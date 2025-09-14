import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../theme/theme';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Auto-navigate to Onboarding after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* App Logo Placeholder */}
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>CC</Text>
        </View>
      </View>
      
      {/* App Name */}
      <Text style={styles.appName}>Civic Connect</Text>
      
      {/* Tagline */}
      <Text style={styles.tagline}>Report. Track. Resolve.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: theme.colors.darkGray,
    textAlign: 'center',
  },
});

export default SplashScreen;