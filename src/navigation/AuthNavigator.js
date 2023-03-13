import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../ui/screens/Login';
import Register from '../ui/screens/Register';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
