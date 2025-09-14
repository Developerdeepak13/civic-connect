import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, Avatar, Button, TextInput, Divider, IconButton } from 'react-native-paper';
import theme from '../../theme/theme';

const AdminProfileScreen = ({ navigation }) => {
  const [editing, setEditing] = useState(false);
  const [adminData, setAdminData] = useState({
    name: 'Admin User',
    email: 'admin@civicconnect.gov',
    phone: '(555) 123-4567',
    department: 'Public Works',
    role: 'Department Manager',
    joinDate: 'January 15, 2022',
  });

  const [editedData, setEditedData] = useState({ ...adminData });

  const handleSave = () => {
    setAdminData(editedData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...adminData });
    setEditing(false);
  };

  const handleLogout = () => {
    // In a real app, this would handle logout logic
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Admin Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Card style={styles.profileCard}>
          <Card.Content style={styles.profileCardContent}>
            <View style={styles.avatarContainer}>
              <Avatar.Image 
                size={100} 
                source={require('../../assets/images/admin_avatar.png')} 
                style={styles.avatar}
              />
              <IconButton 
                icon="camera" 
                size={20} 
                color="white" 
                style={styles.avatarEditButton}
                onPress={() => {}}
              />
            </View>
            
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{adminData.name}</Text>
              <Text style={styles.profileRole}>{adminData.role}</Text>
              <Text style={styles.profileDepartment}>{adminData.department}</Text>
            </View>

            <Button 
              mode={editing ? "contained" : "outlined"} 
              onPress={() => setEditing(!editing)}
              style={styles.editButton}
              icon={editing ? "content-save" : "account-edit"}
            >
              {editing ? "Save Profile" : "Edit Profile"}
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.detailsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <Divider style={styles.divider} />
            
            {editing ? (
              <View style={styles.editForm}>
                <TextInput
                  label="Full Name"
                  value={editedData.name}
                  onChangeText={(text) => setEditedData({...editedData, name: text})}
                  style={styles.input}
                  mode="outlined"
                />
                <TextInput
                  label="Email"
                  value={editedData.email}
                  onChangeText={(text) => setEditedData({...editedData, email: text})}
                  style={styles.input}
                  mode="outlined"
                  keyboardType="email-address"
                />
                <TextInput
                  label="Phone"
                  value={editedData.phone}
                  onChangeText={(text) => setEditedData({...editedData, phone: text})}
                  style={styles.input}
                  mode="outlined"
                  keyboardType="phone-pad"
                />
                <TextInput
                  label="Department"
                  value={editedData.department}
                  onChangeText={(text) => setEditedData({...editedData, department: text})}
                  style={styles.input}
                  mode="outlined"
                />
                <TextInput
                  label="Role"
                  value={editedData.role}
                  onChangeText={(text) => setEditedData({...editedData, role: text})}
                  style={styles.input}
                  mode="outlined"
                />
                <View style={styles.editActions}>
                  <Button 
                    mode="contained" 
                    onPress={handleSave}
                    style={[styles.actionButton, styles.saveButton]}
                  >
                    Save
                  </Button>
                  <Button 
                    mode="outlined" 
                    onPress={handleCancel}
                    style={styles.actionButton}
                  >
                    Cancel
                  </Button>
                </View>
              </View>
            ) : (
              <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Email:</Text>
                  <Text style={styles.infoValue}>{adminData.email}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Phone:</Text>
                  <Text style={styles.infoValue}>{adminData.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Department:</Text>
                  <Text style={styles.infoValue}>{adminData.department}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Role:</Text>
                  <Text style={styles.infoValue}>{adminData.role}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Join Date:</Text>
                  <Text style={styles.infoValue}>{adminData.joinDate}</Text>
                </View>
              </View>
            )}
          </Card.Content>
        </Card>

        <Card style={styles.statsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Activity Statistics</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>156</Text>
                <Text style={styles.statLabel}>Issues Managed</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>79</Text>
                <Text style={styles.statLabel}>Resolved</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>42</Text>
                <Text style={styles.statLabel}>Pending</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.actionsCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Account Actions</Text>
            <Divider style={styles.divider} />
            
            <View style={styles.accountActions}>
              <Button 
                mode="outlined" 
                icon="lock-reset" 
                style={styles.accountActionButton}
                onPress={() => {}}
              >
                Change Password
              </Button>
              <Button 
                mode="outlined" 
                icon="bell-outline" 
                style={styles.accountActionButton}
                onPress={() => {}}
              >
                Notification Settings
              </Button>
              <Button 
                mode="contained" 
                icon="logout" 
                style={[styles.accountActionButton, styles.logoutButton]}
                onPress={handleLogout}
              >
                Logout
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: theme.colors.primary,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    padding: 16,
  },
  profileCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  profileCardContent: {
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  avatarEditButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    borderWidth: 2,
    borderColor: 'white',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  profileRole: {
    fontSize: 16,
    color: theme.colors.primary,
    marginTop: 4,
  },
  profileDepartment: {
    fontSize: 14,
    color: theme.colors.darkGray,
    marginTop: 2,
  },
  editButton: {
    marginTop: 8,
  },
  detailsCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  divider: {
    marginVertical: 8,
  },
  infoContainer: {
    marginTop: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    width: '30%',
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.text,
    fontWeight: '500',
  },
  editForm: {
    marginTop: 8,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionButton: {
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
  },
  statsCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statItem: {
    alignItems: 'center',
    width: '30%',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.darkGray,
    marginTop: 4,
  },
  actionsCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  accountActions: {
    marginTop: 8,
  },
  accountActionButton: {
    marginBottom: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
  },
});

export default AdminProfileScreen;