import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Detail from '../ui/screens/Detail';
import Home from '../ui/screens/Home';
import RestaurantDetail from '../ui/screens/RestaurantDetail';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen
        name={routes.RESTAURANTDETAIL}
        component={RestaurantDetail}
      />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
