import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Appbar} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const HomeScreen = props => {
  return (
    <View>
      <Appbar.Header style={{backgroundColor: 'green'}}>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
