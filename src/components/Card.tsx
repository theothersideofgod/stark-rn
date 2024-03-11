import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/themes';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {StakeData} from '../constants/types';
import getHexAlpha from '../lib/getHexAlpha';

const DataSection = ({data}: {data: StakeData}) => {
  return (
    <View style={DataSectionStyle.wrap}>
      <View style={DataSectionStyle.item}>
        <Text style={DataSectionStyle.name}>Total Staked (USD)</Text>
        <Text style={DataSectionStyle.value}>
          ${data.totalStaked.toLocaleString()}
        </Text>
      </View>
      <View style={DataSectionStyle.item}>
        <Text style={DataSectionStyle.name}>Your Staked (USD)</Text>
        <Text style={DataSectionStyle.value}>
          ${data.yourStaked.toLocaleString()}
        </Text>
      </View>
      <View style={DataSectionStyle.item}>
        <Text style={DataSectionStyle.name}>APR (7D)</Text>
        <Text style={DataSectionStyle.value}>{data.apr.toFixed(2)}%</Text>
      </View>
      <View style={DataSectionStyle.item}>
        <Text style={DataSectionStyle.name}>Deposit Fee</Text>
        <Text style={DataSectionStyle.value}>
          {data.depositFee.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};
const DataSectionStyle = StyleSheet.create({
  wrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    width: '50%',
    marginBottom: 20,
    flexDirection: 'column',
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
});

const ProductTitle = ({
  name,
  desc,
  color,
}: {
  name: string;
  desc: string;
  color: string;
}) => {
  return (
    <View style={ProductTitleStyle.wrap}>
      <View style={ProductTitleStyle.titleWrap}>
        <FontAwesome6
          name="fingerprint"
          size={30}
          color={color}
          style={[
            ProductTitleStyle.icon,
            {backgroundColor: getHexAlpha(color, 0.1)},
          ]}
        />
        <View style={ProductTitleStyle.title}>
          <Text style={ProductTitleStyle.main}>{name}</Text>
          <Text style={ProductTitleStyle.sub}>Staking</Text>
        </View>
      </View>
      <Text
        style={[
          ProductTitleStyle.desc,
          {backgroundColor: getHexAlpha(color, 0.1)},
        ]}>
        {desc}
      </Text>
    </View>
  );
};

const ProductTitleStyle = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0000ff10',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    flexDirection: 'column',
  },
  main: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
  },
  sub: {fontSize: 12, fontWeight: '600', color: COLORS.black},
  desc: {
    marginLeft: 'auto',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 9999,
    fontWeight: '600',
    color: COLORS.black,
    fontSize: 12,
  },
});

type CardProps = {
  color: string;
  name: string;
  desc: string;
  data: StakeData;
};

const Card: React.FC<CardProps> = ({color, data, name, desc}) => {
  return (
    <View style={styles.card}>
      <ProductTitle name={name} desc={desc} color={color} />
      <DataSection data={data} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>STAKE NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  sub: {
    width: '50%',
    marginBottom: 20,
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
