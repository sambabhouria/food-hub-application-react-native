import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
const AppNavigator = () => {
  const isLogin = useSelector(selector => selector.user.isLogin);
  console.log(
    '🚀 ~ file: AppNavigator.js:12 ~ AppNavigator ~ isLogin:',
    isLogin,
  );

  return (
    <NavigationContainer>
      {true ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
