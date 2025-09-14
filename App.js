import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/theme/theme';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import MapViewScreen from './src/screens/MapViewScreen';
import CitizenNavigator from './src/navigation/CitizenNavigator';
import AdminNavigator from './src/navigation/AdminNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="CitizenHome" component={CitizenNavigator} />
          <Stack.Screen name="AdminHome" component={AdminNavigator} />
          <Stack.Screen name="MapView" component={MapViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}