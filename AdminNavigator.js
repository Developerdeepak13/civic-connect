import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IconButton } from 'react-native-paper';
import theme from '../theme/theme';

// Import admin screens
import DashboardScreen from '../screens/admin/DashboardScreen';
import ManageIssuesScreen from '../screens/admin/ManageIssuesScreen';
import AnalyticsScreen from '../screens/admin/AnalyticsScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';
import MapViewScreen from '../screens/MapViewScreen';

const Drawer = createDrawerNavigator();

const AdminNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.darkGray,
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <IconButton icon="view-dashboard" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="ManageIssues" 
        component={ManageIssuesScreen} 
        options={{
          title: 'Manage Issues',
          drawerIcon: ({ color }) => (
            <IconButton icon="clipboard-list" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Analytics" 
        component={AnalyticsScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <IconButton icon="chart-bar" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="MapView" 
        component={MapViewScreen} 
        options={{
          title: 'Map View',
          drawerIcon: ({ color }) => (
            <IconButton icon="map" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="AdminProfile" 
        component={AdminProfileScreen} 
        options={{
          title: 'Profile',
          drawerIcon: ({ color }) => (
            <IconButton icon="account" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminNavigator;