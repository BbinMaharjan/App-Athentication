import React, {useContext} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {Avatar, Button, TextInput} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
import {Heading, Title} from '../components/ui';

const SignupScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const authContext = useContext(AuthContext);

  const handleSignup = () => {
    authContext.signUpUserWithFirebase({email, password, fullName});
    props.navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.image}>
      <View style={styles.screen}>
        <Avatar.Image
          size={100}
          style={{
            resizeMode: 'cover',
            backgroundColor: 'transprant',
          }}
          source={require('../assets/images/student.png')}
        />
        <Text>Hello There!!!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Full Name"
          mode="outlined"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.Button}>
          <Button
            icon="login"
            mode="contained"
            onPress={handleSignup}
            style={{
              borderRadius: 25,
              height: 50,
              backgroundColor: 'green',
            }}>
            <Heading heading="Save" />
          </Button>
        </View>
        <View style={styles.Button}>
          <Button
            icon="close"
            mode="contained"
            onPress={() => props.navigation.navigate('Wellcome')}
            style={{
              borderRadius: 25,
              height: 50,
              backgroundColor: 'red',
            }}>
            <Heading heading="Cancle" />
          </Button>
        </View>
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
  },
  form: {
    flex: 3,
    padding: 10,
    flexDirection: 'column',
  },
  Button: {
    padding: 5,
    margin: 5,
  },
});

export default SignupScreen;
