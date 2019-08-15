import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Logo from './assets/instagram.png';

import Feed from './pages/Feed';

export default createAppContainer(
  createStackNavigator({
    Feed,
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: <Image source={Logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5',
      },
    },
  }),
);
