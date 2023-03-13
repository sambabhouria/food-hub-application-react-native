import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Delivery from '../ui/screens/Delivery';
import Profile from '../ui/screens/Profile';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.PROFILE} component={Profile} />
      <Stack.Screen name={routes.DELIVERY} component={Delivery} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
