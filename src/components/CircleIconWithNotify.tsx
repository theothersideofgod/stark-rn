import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
import getHexAlpha from '../lib/getHexAlpha';
import {COLORS} from '../constants/themes';

type CircleIconWithNotifyProps = {
  backgroundColor: string;
  height: number;
  width: number;
} & IconProps;

const CircleIconWithNotify = ({
  backgroundColor,
  height,
  width,
  style,
  ...iconProps
}: CircleIconWithNotifyProps) => {
  return (
    <View
      style={[
        styles.wrap,
        {height, width, backgroundColor: getHexAlpha(backgroundColor, 0.1)},
        style,
      ]}>
      <MaterialCommunityIcons
        {...iconProps}
        size={Math.max(height * 0.6, width * 0.6)}
        color={backgroundColor}
        style={styles.icon}
      />
      <View style={[styles.circle, {backgroundColor}]} />
    </View>
  );
};

export default CircleIconWithNotify;

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 999,
    position: 'relative',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  circle: {
    position: 'absolute',
    height: 12,
    width: 12,
    borderRadius: 999,
    borderColor: COLORS.white,
    borderWidth: 2,
    top: 0,
    right: 0,
  },
});
