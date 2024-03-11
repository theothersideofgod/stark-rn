import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import YourWallet from './YourWallet';
import Staking from './Staking';
import Farming from './Farming';
const Stack = createStackNavigator();

const Wallet = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Your Wallet">
      <Stack.Screen name="Your Wallet" component={YourWallet} />
      <Stack.Screen name="Staking" component={Staking} />
      <Stack.Screen name="Farming" component={Farming} />
    </Stack.Navigator>
  );
};

export default Wallet;
