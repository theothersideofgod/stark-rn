import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import FarmingCard from '../components/FarmingCard';
const data = [
  {
    data: {
      name: 'BNB',
      liq: 18239452,
      apr: 23.66,
      stake: 0,
    },
  },
  {
    data: {
      name: 'USDT',
      liq: 10666110,
      apr: 16.66,
      stake: 0,
    },
  },
  {
    data: {
      name: 'USDC',
      liq: 22789821,
      apr: 13.76,
      stake: 6,
    },
  },
];

const Farming = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={data}
        renderItem={item => <FarmingCard {...item.item} />}
        keyExtractor={item => item.data.name}
      />
    </View>
  );
};

export default Farming;

const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFF',
  },
});
