import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getHeaderTitle} from '@react-navigation/elements';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {COLORS} from '../constants/themes';
import FastImage from 'react-native-fast-image';

const Avatar = () => {
  return (
    <View>
      <FastImage
        style={AvatarStyle.avatar}
        source={{
          uri: 'https://i.pravatar.cc/300',
          cache: FastImage.cacheControl.web,
        }}
      />
      <View style={AvatarStyle.dot} />
    </View>
  );
};
const AvatarStyle = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  avatar: {borderRadius: 20, height: 40, width: 40},
  dot: {
    height: 8,
    width: 8,
    backgroundColor: COLORS.red,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 4,
  },
});

const Header: React.FC<BottomTabHeaderProps> = ({route, options}) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Avatar />
        <View style={styles.center}>
          <FontAwesome6 name="fingerprint" size={20} color={COLORS.blue} />
          <Text style={styles.name}>ispolink</Text>
        </View>
        <FontAwesome5 name="search" size={20} color={COLORS.black} />
      </View>
      <View>
        <Text style={styles.router}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderBottomColor: '#EDEEF1',
    borderBottomWidth: 2,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: COLORS.black,
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '800',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  router: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '800',
  },
});
