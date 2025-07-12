import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new app</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#f45b69',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#f45b69',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 15,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupButton: {
    borderColor: '#f45b69',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  signupText: {
    color: '#f45b69',
    fontWeight: 'bold',
  },
});
