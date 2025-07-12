import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Ionicons name="chevron-back" size={28} color="#FF4C61" />
      </TouchableOpacity>

      {/* Sign In Title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="E-mail or phone number"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      {/* Facebook Button */}
      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.fbButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  backArrow: {
    marginBottom: 12,
    marginLeft: -4, // Remove space on the left
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF4C61',
    marginBottom: 32,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#FF4C61',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    marginVertical: 16,
    textAlign: 'center',
    color: '#888',
  },
  fbButton: {
    backgroundColor: '#4267B2',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  fbButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
