import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/themes';
import {FarmDataType} from '../constants/types';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FastImage from 'react-native-fast-image';

type FarmingCardProps = {
  data: FarmDataType;
};

const ImageMapper: {[name: string]: any} = {
  BNB: require('../../assets/bnb-bnb-logo.png'),
  USDT: require('../../assets/tether-usdt-logo.png'),
  USDC: require('../../assets/usd-coin-usdc-logo.png'),
};

const PairIcon = ({name}: {name: string}) => {
  return (
    <View style={PairIconStyle.wrap}>
      <View style={[PairIconStyle.icon, {backgroundColor: COLORS.blueLight}]}>
        <FontAwesome6 name="fingerprint" size={30} color={COLORS.blue} />
      </View>

      <FastImage
        style={PairIconStyle.img}
        source={ImageMapper[name]}
        resizeMode="center"
      />
    </View>
  );
};
const PairIconStyle = StyleSheet.create({
  wrap: {
    position: 'relative',
    flexDirection: 'row',
    marginRight: 10,
  },
  icon: {
    width: 54,
    height: 54,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    zIndex: 999,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  img: {
    marginLeft: -10,
    width: 50,
    height: 50,
  },
});

const FarmingCard: React.FC<FarmingCardProps> = ({data}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.type}>
        <PairIcon name={data.name} />
        <View>
          <Text style={styles.typeText}>ISP</Text>
          <Text style={styles.typeText}>{data.name}</Text>
        </View>
      </View>
      <View style={styles.liqWrap}>
        <View style={styles.liq}>
          <Text style={styles.name}>Liquidity</Text>
          <Text style={styles.value}>${data.liq.toLocaleString()}</Text>
        </View>
        <View style={styles.liq}>
          <Text style={styles.name}>Total APR</Text>
          <Text style={styles.value}>{data.apr.toLocaleString()}%</Text>
        </View>
        <View style={styles.liq}>
          <Text style={styles.name}>Your Stake</Text>
          <Text style={styles.value}>${data.stake.toLocaleString()}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>STAKE NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FarmingCard;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.white,
    padding: 16,
    flexDirection: 'column',
    marginBottom: 16,
  },
  type: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  typeText: {
    fontSize: 16,
    color: COLORS.black,
  },
  img: {
    height: 52,
    width: 90,
  },
  liqWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  liq: {
    width: '50%',
    marginBottom: 16,
  },
  name: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
  },
  value: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: COLORS.white,
  },
});
