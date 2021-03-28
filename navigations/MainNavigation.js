import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WellcomeScreen from '../screens/WellcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wellcome"
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'red'},
        }}
      />
      <Stack.Screen
        name="Sign In"
        component={LoginScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'green'},
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'green'},
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
