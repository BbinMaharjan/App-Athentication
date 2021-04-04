import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <Text numberOfLines={3} ellipsizeMode="tail" style={styles.info}>
        {props.info}
      </Text>
    </View>
  );
};

const Heading = props => {
  return <Text style={styles.heading}>{props.heading}</Text>;
};

const UserText = props => {
  return (
    <View style={styles.usertext}>
      <Text style={styles.utext}>Hello</Text>
      <Text style={styles.username}>{props.username} !!!</Text>
    </View>
  );
};
const Info = () => {
  return (
    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.info}>
      Wellcome To StrawHat App.Wellcome To StrawHat App Wellcome To StrawHat
      App.Wellcome To StrawHat App.Wellcome To StrawHat App.Wellcome To StrawHat
      App.Wellcome To StrawHat App.Wellcome To StrawHat App
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 30,
    color: 'white',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 25,
    color: 'gray',
  },
  info: {
    fontFamily: 'Oxygen-Light',
    fontSize: 15,
    color: 'gray',
  },
  heading: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 25,
    color: 'white',
    letterSpacing: 2,
  },
  usertext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  utext: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 50,
    color: 'white',
    marginRight: 10,
  },
  username: {
    fontFamily: 'Oxygen-Light',
    fontSize: 40,
    color: 'gray',
    marginLeft: 10,
  },
});

export {Title, Heading, UserText, Info};
