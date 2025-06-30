import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="E-mail or phone number"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.contButton}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.facebookButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start' },
  header: { paddingBottom: 30, width: '100%', alignItems: 'flex-start', paddingLeft: 20 },
  content: { width: '80%' },
  contButton: { width: '70%' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#ff4665' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 30, padding: 10, borderRadius: 20 },
  button: { marginTop: 20, borderRadius: 50, backgroundColor: '#ff4665', padding: 10, marginBottom: 30 },
  orText: { textAlign: 'center', marginBottom: 10 },
  facebookButton: { backgroundColor: '#4267B2', padding: 10, borderRadius: 50, marginTop: 30, marginBottom: 30 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default LoginPage;
