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
});

export {Title, Heading};
