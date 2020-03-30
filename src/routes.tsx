import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '~/pages/Home';
import Favorites from '~/pages/Favorites';

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default Routes;
