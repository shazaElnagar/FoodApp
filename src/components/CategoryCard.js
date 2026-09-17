import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const CategoryCard = ({ item, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.catCard, isSelected && styles.catCardSelected]}
    onPress={onPress}
  >
    <Image source={item.image} style={styles.catImage} />
    <Text style={styles.catTitle}>{item.name}</Text>
    <View style={[styles.arrowCircle, isSelected ? styles.arrowActive : styles.arrowInactive]}>
      <Text style={[styles.arrowText, isSelected && { color: '#313234' }]}>›</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  catCard: { width: 105, height: 175, backgroundColor: '#FFF', borderRadius: 20, padding: 15, marginRight: 15, alignItems: 'center', justifyContent: 'space-between', elevation: 3 },
  catCardSelected: { backgroundColor: '#F5CA48' },
  catImage: { width: 60, height: 60, resizeMode: 'contain' },
  catTitle: { fontSize: 14, fontWeight: 'bold', color: '#313234' },
  arrowCircle: { width: 26, height: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center' },
  arrowActive: { backgroundColor: '#FFF' },
  arrowInactive: { backgroundColor: '#E02020' },
  arrowText: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
});