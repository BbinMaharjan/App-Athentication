import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const HomeScreen = props => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, fontFamily: 'Ubuntu-Bold'}}>
        Welcome Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
