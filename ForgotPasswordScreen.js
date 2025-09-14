import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import theme from '../../theme/theme';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = () => {
    // In a real app, this would send a password reset email
    // For this UI-only demo, we'll just show a success message
    setResetSent(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send you a link to reset your password
        </Text>
      </View>

      <View style={styles.formContainer}>
        {!resetSent ? (
          <>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Button
              mode="contained"
              onPress={handleResetPassword}
              style={styles.resetButton}
              labelStyle={styles.resetButtonText}
            >
              Reset Password
            </Button>
          </>
        ) : (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>
              Password reset link has been sent to your email address.
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Login')}
              style={styles.backButton}
              labelStyle={styles.backButtonText}
            >
              Back to Login
            </Button>
          </View>
        )}

        <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={styles.backToLoginContainer}
        >
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  headerContainer: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.darkGray,
    marginTop: 5,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    marginBottom: 15,
    backgroundColor: theme.colors.background,
  },
  resetButton: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
  },
  resetButtonText: {
    fontSize: 16,
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  successText: {
    fontSize: 16,
    color: theme.colors.success,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
  },
  backButtonText: {
    fontSize: 16,
  },
  backToLoginContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  backToLoginText: {
    color: theme.colors.primary,
  },
});

export default ForgotPasswordScreen;