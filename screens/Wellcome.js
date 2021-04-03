import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Heading, Title} from '../components/ui';

const WellcomeScreen = props => {
  const navigateUserSignupScreen = () => {
    props.navigation.navigate('Signup');
  };
  const navigateUserSigninScreen = () => {
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.image}>
        <Image
          source={require('../assets/images/flags.png')}
          style={{
            resizeMode: 'contain',
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View style={styles.title}>
        <Title
          title="Wellcome"
          subtitle="Hello There!!!"
          info="Wellcome To StrawHat App.Wellcome To StrawHat App Wellcome To StrawHat
          App.Wellcome To StrawHat App.Wellcome To StrawHat App.Wellcome To
          StrawHat App.Wellcome To StrawHat App.Wellcome To StrawHat App
        "
        />
      </View>
      <View style={styles.button}>
        <Button
          icon="login"
          mode="contained"
          onPress={navigateUserSigninScreen}
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: 'green',
          }}>
          <Heading heading="Sign In" />
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          icon="logout"
          mode="contained"
          onPress={navigateUserSignupScreen}
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: 'red',
          }}>
          <Heading heading="Sign Up" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  image: {
    alignItems: 'center',
    marginTop: 100,
    padding: 10,
  },
  title: {
    padding: 10,
    marginBottom: 10,
  },
  button: {
    padding: 5,
    margin: 5,
  },
});
export default WellcomeScreen;
