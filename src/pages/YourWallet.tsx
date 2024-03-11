import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationList from '../components/NavigationList';
import {Button} from 'react-native';
import {COLORS} from '../constants/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import InfoBox from '../components/InfoBox';

const YourWallet = ({navigation}) => {
  const handleNav = path => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.page}>
      <View style={styles.detail}>
        <InfoBox />
      </View>

      <NavigationList onNavigation={handleNav} />

      <View style={styles.claimWrap}>
        <Text style={styles.title}>You're eligible to claim your reward</Text>
        <Text style={styles.value}>4203 $ISP</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Claim Rewards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourWallet;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F8FAFF',
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  detail: {
    backgroundColor: COLORS.white,
    marginBottom: 16,
  },

  claimWrap: {
    padding: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 999,
    width: 300,
  },
  btnText: {
    color: COLORS.white,
    textAlign: 'center',
  },
});
