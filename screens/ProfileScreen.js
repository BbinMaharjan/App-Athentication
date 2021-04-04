import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button, Appbar, Avatar} from 'react-native-paper';
import {Header} from 'react-native/Libraries/NewAppScreen';
import AuthContext from '../store/contexts/AuthContext';
import {UserText, Heading, Info} from '../components/ui';

const ProfileScreen = props => {
  const authContext = React.useContext(AuthContext);
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.image}>
      <Appbar.Header style={{backgroundColor: 'green'}}>
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View style={styles.screen}>
        <Avatar.Image
          size={200}
          style={{
            resizeMode: 'cover',
            backgroundColor: 'transprant',
          }}
          source={require('../assets/images/student.png')}
        />
      </View>
      <View style={styles.info}>
        <UserText username={authContext.authUser.fullName} />
        <Info />
        <Button
          icon="github"
          mode="contained"
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: 'skyblue',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Heading heading="GitHUb" />
        </Button>
        <Button
          icon="logout"
          mode="contained"
          onPress={() => authContext.logOut()}
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: 'red',
            marginBottom: 20,
          }}>
          <Heading heading="Sign Out" />
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  screen: {
    marginTop: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  info: {
    padding: 20,
  },
});

export default ProfileScreen;
