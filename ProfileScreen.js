import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, Button, TextInput, Divider, IconButton } from 'react-native-paper';
import theme from '../../theme/theme';

const ProfileScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('(555) 123-4567');
  const [address, setAddress] = useState('123 Main St, Anytown, USA');

  const handleLogout = () => {
    // In a real app, this would clear auth state and navigate to login
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleSaveProfile = () => {
    // In a real app, this would update the user profile in the backend
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image 
          size={100} 
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
          style={styles.avatar}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <Button 
          mode="contained" 
          onPress={() => setIsEditing(!isEditing)}
          style={styles.editButton}
          icon="account-edit"
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.profileInfoContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>

        {isEditing ? (
          <View style={styles.editFormContainer}>
            <TextInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              mode="outlined"
              style={styles.input}
            />

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Phone Number"
              value={phone}
              onChangeText={setPhone}
              mode="outlined"
              style={styles.input}
              keyboardType="phone-pad"
            />

            <TextInput
              label="Address"
              value={address}
              onChangeText={setAddress}
              mode="outlined"
              style={styles.input}
            />

            <Button
              mode="contained"
              onPress={handleSaveProfile}
              style={styles.saveButton}
              icon="content-save"
            >
              Save Changes
            </Button>
          </View>
        ) : (
          <View>
            <View style={styles.infoRow}>
              <IconButton icon="account" size={24} color={theme.colors.primary} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Full Name</Text>
                <Text style={styles.infoValue}>{name}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <IconButton icon="email" size={24} color={theme.colors.primary} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{email}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <IconButton icon="phone" size={24} color={theme.colors.primary} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Phone</Text>
                <Text style={styles.infoValue}>{phone}</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <IconButton icon="map-marker" size={24} color={theme.colors.primary} />
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoValue}>{address}</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <Divider style={styles.divider} />

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Activity</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Reports</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>
      </View>

      <Button
        mode="outlined"
        onPress={handleLogout}
        style={styles.logoutButton}
        icon="logout"
        color={theme.colors.error}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
  avatar: {
    backgroundColor: theme.colors.background,
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  editButton: {
    backgroundColor: theme.colors.primary,
  },
  divider: {
    marginVertical: 8,
  },
  profileInfoContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  infoValue: {
    fontSize: 16,
    color: theme.colors.text,
  },
  editFormContainer: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
    backgroundColor: theme.colors.background,
  },
  saveButton: {
    marginTop: 8,
    backgroundColor: theme.colors.success,
  },
  statsContainer: {
    padding: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  logoutButton: {
    margin: 16,
    borderColor: theme.colors.error,
  },
});

export default ProfileScreen;