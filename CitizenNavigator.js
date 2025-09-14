import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import theme from '../theme/theme';

// Import citizen screens
import HomeFeedScreen from '../screens/citizen/HomeFeedScreen';
import ReportIssueScreen from '../screens/citizen/ReportIssueScreen';
import MyIssuesScreen from '../screens/citizen/MyIssuesScreen';
import ProfileScreen from '../screens/citizen/ProfileScreen';
import MapViewScreen from '../screens/MapViewScreen';

const Tab = createBottomTabNavigator();

const CitizenNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeFeed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeFeed') {
            iconName = 'home';
          } else if (route.name === 'ReportIssue') {
            iconName = 'camera';
          } else if (route.name === 'MyIssues') {
            iconName = 'format-list-bulleted';
          } else if (route.name === 'MapView') {
            iconName = 'map';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <IconButton icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkGray,
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="HomeFeed" 
        component={HomeFeedScreen} 
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="ReportIssue" 
        component={ReportIssueScreen} 
        options={{ title: 'Report Issue' }}
      />
      <Tab.Screen 
        name="MyIssues" 
        component={MyIssuesScreen} 
        options={{ title: 'My Issues' }}
      />
      <Tab.Screen 
        name="MapView" 
        component={MapViewScreen} 
        options={{ title: 'Map View' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default CitizenNavigator;