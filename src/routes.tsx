import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleProp, ViewStyle } from 'react-native';

import Home from '~/pages/Home';
import Favorites from '~/pages/Favorites';
import Details from '~/pages/Details';

const headerStyle: StyleProp<ViewStyle> = {
  height: 45,
  elevation: 0,
  backgroundColor: 'rgba(250, 250, 250, 0.9)',
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeScreen: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 17,
        color: '#4A90E2',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        headerTransparent: true,
      }}
    />
  </Stack.Navigator>
);

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default Routes;
