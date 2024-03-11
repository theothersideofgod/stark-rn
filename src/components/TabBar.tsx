import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants/themes';
const TabBarIconMapper: {
  [name: string]: {
    icon: (color: string, size: number) => ReactNode;
  };
} = {
  page1: {
    icon: (color: string, size: number) => (
      <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
    ),
  },
  page2: {
    icon: (color: string, size: number) => (
      <MaterialCommunityIcons
        name="account-search-outline"
        color={color}
        size={size}
      />
    ),
  },
  page3: {
    icon: (color: string, size: number) => (
      <MaterialCommunityIcons
        name="format-list-checkbox"
        color={color}
        size={size}
      />
    ),
  },
  Wallet: {
    icon: (color: string, size: number) => (
      <MaterialCommunityIcons name="wallet-outline" color={color} size={size} />
    ),
  },
  page5: {
    icon: (color, size) => (
      <MaterialCommunityIcons
        name="message-processing-outline"
        color={color}
        size={size}
      />
    ),
  },
};

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.wrap}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const tabButtonIconStyle: ViewStyle = {
          borderBottomColor: isFocused ? COLORS.blue : 'rgba(0,0,0,0)',
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
            key={index}>
            <View style={[styles.buttonIcon, tabButtonIconStyle]}>
              <View>
                {TabBarIconMapper[route.name].icon(
                  isFocused ? COLORS.blue : COLORS.gray,
                  30,
                )}
                {route.name === 'page5' && <View style={styles.redDot} />}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderTopColor: '#EDEEF1',
    borderTopWidth: 2,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    paddingVertical: 25,
    borderBottomWidth: 4,
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.red,
    borderRadius: 5,
    position: 'absolute', // 將紅點設置為絕對定位，相對於按鈕的父元素
    top: -5, // 調整紅點的位置，使其位於按鈕上方
    right: -5, // 調整紅點的位置，使其位於按鈕的右側
  },
});
