import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WellcomeScreen from '../screens/Wellcome';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Wellcome"
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'green'},
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'red'},
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
