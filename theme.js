import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1976D2', // Blue primary color
    accent: '#4CAF50', // Green accent color
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#212121',
    error: '#D32F2F',
    disabled: '#BDBDBD',
    placeholder: '#9E9E9E',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#1976D2',
    // Custom colors
    secondary: '#4CAF50',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#2196F3',
    lightGray: '#F5F5F5',
    mediumGray: '#E0E0E0',
    darkGray: '#757575',
  },
  roundness: 10,
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export default theme;