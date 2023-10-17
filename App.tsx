import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
