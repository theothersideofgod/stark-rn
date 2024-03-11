import {TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

const TabBarButton: React.FC<BottomTabBarButtonProps> = props => {
  console.log(props);
  //   const customStyle = {
  //     borderBottomWidth: accessibilityState?.selected ? 3 : 0,
  //   };

  //   return <TouchableOpacity {...props} style={[style, customStyle]} />;
  return <TouchableOpacity {...props} />;
};

export default TabBarButton;
