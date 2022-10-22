import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import LoginPage from '../loginpage/loginPage';
import SignupPage from '../signuppage/signupPage';

export default function WelcomePage({navigation}) {
    <View style={styles.container}>
      <Text>Welcome screen!</Text>

      <View style={styles.buttons}>
        <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate(LoginPage)} />
        <Button title="Sign up" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate(SignupPage)} />
      </View>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});
