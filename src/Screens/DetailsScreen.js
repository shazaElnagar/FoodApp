import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { IngredientCard } from '../components/IngredientCard';

export default function DetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Buttons */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.starBtn}>
          <Text style={styles.starText}>★</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <View style={styles.detailsRow}>
        <View style={styles.infoCol}>
          <Text style={styles.label}>Size</Text>
          <Text style={styles.value}>{product.size}</Text>

          <Text style={styles.label}>Crust</Text>
          <Text style={styles.value}>{product.crust}</Text>

          <Text style={styles.label}>Delivery in</Text>
          <Text style={styles.value}>{product.deliveryTime}</Text>
        </View>

        <Image source={product.image} style={styles.mainImage} />
      </View>

      {/* Ingredients Section */}
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ingredientsRow}>
        {product.ingredients?.map((ing) => (
          <IngredientCard key={ing.id} image={ing.image} />
        ))}
      </ScrollView>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>Place an order ›</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20, paddingTop: 50 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  iconBtn: { width: 40, height: 40, borderWidth: 1, borderColor: '#CDCDCD', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  btnText: { fontSize: 24, fontWeight: 'bold' },
  starBtn: { width: 40, height: 40, backgroundColor: '#F5CA48', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  starText: { color: '#FFF', fontSize: 18 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#313234', width: '70%' },
  price: { fontSize: 28, fontWeight: 'bold', color: '#E2574A', marginVertical: 15 },
  detailsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  infoCol: { flex: 1 },
  label: { fontSize: 12, color: '#C4C4C4', marginTop: 10 },
  value: { fontSize: 16, fontWeight: 'bold', color: '#313234' },
  mainImage: { width: 200, height: 160, resizeMode: 'contain' },
  ingredientsTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  ingredientsRow: { flexDirection: 'row', marginBottom: 30 },
  orderBtn: { backgroundColor: '#F5CA48', borderRadius: 30, height: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  orderBtnText: { fontSize: 16, fontWeight: 'bold', color: '#313234' },
});