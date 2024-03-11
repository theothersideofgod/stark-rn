import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/themes';
import Card from '../components/Card';

const data = [
  {
    name: 'ISP',
    desc: 'Stake Your ISP Tokens',
    color: COLORS.blue,
    data: {
      totalStaked: 32555562,
      yourStaked: 0,
      apr: 85.56,
      depositFee: 1,
    },
  },
  {
    name: 'sISP',
    desc: 'Earn USDT Stablecoins',
    color: COLORS.green,
    data: {
      totalStaked: 32555562,
      yourStaked: 0,
      apr: 85.56,
      depositFee: 1,
    },
  },
  {
    name: 'bISP',
    desc: 'Boost Your Farm Rewards',
    color: COLORS.yellow,
    data: {
      totalStaked: 32555562,
      yourStaked: 0,
      apr: 85.56,
      depositFee: 1,
    },
  },
];

const Staking = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={data}
        renderItem={item => <Card {...item.item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Staking;

const styles = StyleSheet.create({
  page: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFF',
  },
});
