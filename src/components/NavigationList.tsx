import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../constants/themes';
import FastImage from 'react-native-fast-image';
const navigators = [
  {
    path: 'Staking',
    name: 'Staking',
    image: require('../../assets/staking.png'),
  },
  {
    path: 'Farming',
    name: 'Farming',
    image: require('../../assets/farming.png'),
  },
  {
    path: 'Rewards',
    name: 'Rewards',
    image: require('../../assets/rewards.png'),
  },
  {
    path: 'Referrals',
    name: 'Referrals',
    image: require('../../assets/referrals.png'),
  },
];
const NavigationList = ({onNavigation}) => {
  return (
    <View style={styles.wrap}>
      {navigators.map((n, i) => {
        return (
          <View key={i} style={styles.block}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => onNavigation(n.path)}>
              <Text style={styles.name}>{n.name}</Text>
              <View style={styles.imgWrap}>
                <Image style={styles.img} source={n.image} />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default NavigationList;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'relative',
  },
  block: {
    width: '47.5%',
    backgroundColor: COLORS.white,
    height: 125,
    marginBottom: 16,
    borderRadius: 10,
    padding: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  btn: {
    position: 'relative',
    height: 120,
  },
  name: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: 16,
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff10',
    borderRadius: 100,
    height: 120,
    width: 120,
    position: 'absolute',
    right: -30,
    bottom: -10,
  },
  img: {
    height: 70,
    width: 70,
  },
});
