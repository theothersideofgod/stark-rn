import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CircleIconWithNotify from './CircleIconWithNotify';
import {COLORS} from '../constants/themes';
import getHexAlpha from '../lib/getHexAlpha';

const InfoBox = () => {
  return (
    <View style={styles.wrap}>
      <View style={[styles.row, styles.firstRow, styles.rowBottomMargin]}>
        <View style={styles.col1}>
          <Text style={styles.total}>$1,520.70</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.totalName}>Total</Text>
        </View>
        <View style={styles.col2}>
          <Text style={[styles.greenText, {fontSize: 24}]}>+7.81%</Text>
        </View>
      </View>
      <View style={[styles.row, styles.secondRow, styles.rowBottomMargin]}>
        <View style={[styles.col1, styles.firstCol]}>
          <CircleIconWithNotify
            style={styles.icon}
            name="fingerprint"
            height={40}
            width={40}
            backgroundColor={COLORS.blue}
          />
          <View>
            <Text style={styles.name}>Ispolink Token</Text>
            <Text style={styles.value}>236,660,32 ISP</Text>
          </View>
        </View>
        <View style={styles.col2}>
          <Text style={[styles.name, styles.textRight]}>$988.51</Text>
          <Text style={[styles.value, styles.textRight]}>$0.00417</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.greenText}>+6.66%</Text>
        </View>
      </View>
      <View style={[styles.row, styles.secondRow]}>
        <View style={[styles.col1, styles.firstCol]}>
          <CircleIconWithNotify
            style={styles.icon}
            name="fingerprint"
            height={40}
            width={40}
            backgroundColor={COLORS.yellow}
          />
          <View>
            <Text style={styles.name}>Binance Chain Token</Text>
            <Text style={styles.value}>1.83 BNB</Text>
          </View>
        </View>
        <View style={styles.col2}>
          <Text style={[styles.name, styles.textRight]}>$532.27</Text>
          <Text style={[styles.value, styles.textRight]}>$290.85</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.greenText}>+1.23%</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoBox;

const styles = StyleSheet.create({
  wrap: {
    padding: 12,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  rowBottomMargin: {
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  col1: {
    width: 190,
  },
  col2: {
    flex: 1,
  },
  col3: {
    textAlign: 'right',
  },
  firstRow: {
    alignItems: 'flex-end',
  },
  secondRow: {
    alignItems: 'flex-start',
  },
  firstCol: {
    flexDirection: 'row',
  },
  total: {
    color: COLORS.black,
    fontSize: 40,
    fontWeight: '600',
  },
  totalName: {
    fontWeight: '400',
    textAlign: 'left',
    fontSize: 24,
    color: COLORS.black,
  },
  greenText: {
    textAlign: 'right',
    color: getHexAlpha(COLORS.green, 0.8),
    fontWeight: '600',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  textRight: {
    textAlign: 'right',
  },
  value: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.black,
  },
});
