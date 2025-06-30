import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new{'\n'}                app</Text>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnLogText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btnSignText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 50,
    color: '#ff4665',
  },
  buttonLogin: {
    backgroundColor: '#ff4665',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    width: 300,
  },
  buttonSignup: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    borderColor: '#ff4665',
    borderWidth: 1,
    marginBottom: 15,
    width: 300,
  },
  btnLogText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  btnSignText: {
    color: '#ff4665',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeScreen;