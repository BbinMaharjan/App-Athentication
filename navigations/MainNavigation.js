import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TodosScreen from '../screens/TodosScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="home"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Todo"
        component={TodosScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="paste"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: props => (
            <Icon
              name="user"
              color={props.color}
              size={props.focused ? props.size * 1.3 : props.size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
