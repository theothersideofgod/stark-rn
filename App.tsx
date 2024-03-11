/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PageOne from './src/pages/PageOne';
import PageThree from './src/pages/PageThree';
import PageTwo from './src/pages/PageTwo';
import PageFive from './src/pages/PageFive';
import TabBar from './src/components/TabBar';
import Header from './src/components/Header';
import Wallet from './src/pages/Wallet';

const Tab = createBottomTabNavigator();

const TabList = [
  {
    name: 'page1',
    component: PageOne,
  },
  {
    name: 'page2',
    component: PageTwo,
  },
  {
    name: 'page3',
    component: PageThree,
  },
  {
    name: 'Wallet',
    component: Wallet,
  },
  {
    name: 'page5',
    component: PageFive,
  },
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={TabBar}
          screenOptions={{header: Header}}
          initialRouteName="Wallet">
          {TabList.map((tab, index) => (
            <Tab.Screen key={`${tab.name}${index}`} {...tab} />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
