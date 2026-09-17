import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const IngredientCard = ({ image }) => (
  <View style={styles.ingCard}>
    <Image source={image} style={styles.ingImage} />
  </View>
);

const styles = StyleSheet.create({
  ingCard: { width: 90, height: 80, backgroundColor: '#FFF', borderRadius: 15, padding: 10, marginRight: 15, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  ingImage: { width: 50, height: 50, resizeMode: 'contain' },
});