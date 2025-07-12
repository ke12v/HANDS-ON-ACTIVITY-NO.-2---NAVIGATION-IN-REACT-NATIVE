import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Ionicons name="chevron-back" size={32} color="#f45b69" />
      </TouchableOpacity>

      {}
      <Text style={styles.title}>Create new account</Text>

      {}
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Phone Number" keyboardType="phone-pad" style={styles.input} />
      <TextInput placeholder="E-mail Address" keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      {}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backArrow: {
    marginBottom: 16,
    marginright: 20,
   
    padding: 8,
  },
  title: {
    fontSize: 24,
    color: '#f45b69',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#f45b69',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
