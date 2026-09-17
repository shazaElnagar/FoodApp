import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFoods, setSelectedCategory } from '../Store/foodSlice';
import { CategoryCard  } from '../components/CategoryCard';
import {  PopularCard } from '../components/popularCard';
const CATEGORIES = [
  { id: '1', name: 'Pizza', image: require('../../assets/pizza-icon.png') },
  { id: '2', name: 'Seafood', image: require('../../assets/shrimp-icon.png') },
  { id: '3', name: 'Soft Drinks', image: require('../../assets/soda-icon.png') },
];

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { items, selectedCategory, loading } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <View style={styles.topHeader}>
        <Image source={require('../../assets/profile.png')} style={styles.profileImg} />
        <Text style={styles.menuIcon}>☰</Text>
      </View>

      <Text style={styles.subHeader}>Food</Text>
      <Text style={styles.header}>Delivery</Text>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catList}>
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            item={cat}
            isSelected={selectedCategory === cat.name}
            onPress={() => dispatch(setSelectedCategory(cat.name))}
          />
        ))}
      </ScrollView>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#F5CA48" style={{ marginTop: 20 }} />
      ) : (
        items.map((item) => (
          <PopularCard
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('Details', { product: item })}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9FB', paddingHorizontal: 20, paddingTop: 50 },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  profileImg: { width: 40, height: 40, borderRadius: 20 },
  menuIcon: { fontSize: 24, fontWeight: 'bold', color: '#313234' },
  subHeader: { fontSize: 16, color: '#313234' },
  header: { fontSize: 32, fontWeight: 'bold', color: '#313234', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15, color: '#313234' },
  catList: { flexDirection: 'row', marginBottom: 10 },
});