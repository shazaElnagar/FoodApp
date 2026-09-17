import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const PopularCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.popCard} onPress={onPress}>
    <View style={styles.popInfo}>
      {item.isTopOfTheWeek && (
        <Text style={styles.topBadge}>👑 top of the week</Text>
      )}
      <Text style={styles.popTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.popWeight}>Weight {item.weight}</Text>

      <View style={styles.popFooter}>
        <View style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </View>
        <Text style={styles.rating}>★ {item.rating}</Text>
      </View>
    </View>

    <Image source={item.image} style={styles.popImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  popCard: { backgroundColor: '#FFF', borderRadius: 25, paddingLeft: 20, paddingTop: 20, flexDirection: 'row', marginBottom: 20, elevation: 3, overflow: 'hidden' },
  popInfo: { flex: 1 },
  topBadge: { fontSize: 12, fontWeight: 'bold', color: '#313234', marginBottom: 5 },
  popTitle: { fontSize: 16, fontWeight: 'bold', color: '#313234' },
  popWeight: { fontSize: 12, color: '#C4C4C4', marginVertical: 5 },
  popFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  addBtn: { backgroundColor: '#F5CA48', borderTopRightRadius: 20, borderBottomLeftRadius: 20, width: 75, height: 45, justifyContent: 'center', alignItems: 'center', marginLeft: -20 },
  addBtnText: { fontSize: 22, fontWeight: 'bold', color: '#313234' },
  rating: { marginLeft: 15, fontWeight: 'bold', fontSize: 14, color: '#313234' },
  popImage: { width: 140, height: 110, resizeMode: 'contain', alignSelf: 'flex-end' },
});