import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Chip, Divider } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import theme from '../../theme/theme';

const ReportIssueScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const categories = [
    'Roads',
    'Lighting',
    'Sanitation',
    'Vandalism',
    'Environment',
    'Public Safety',
    'Water',
    'Electricity',
    'Other'
  ];

  const handleSubmit = () => {
    // In a real app, this would send the issue report to a backend
    // For this UI-only demo, we'll just navigate back to the home screen
    navigation.navigate('HomeFeed');
  };

  const handleTakePhoto = () => {
    // In a real app, this would open the camera
    // For this UI-only demo, we'll just set a dummy image
    setImage('https://example.com/dummy-image.jpg');
  };

  const handlePickLocation = () => {
    // In a real app, this would open a location picker
    // For this UI-only demo, we'll just set a dummy location
    setLocation('123 Main Street, Anytown, USA');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Issue Details</Text>
        
        <TextInput
          label="Title"
          value={title}
          onChangeText={setTitle}
          mode="outlined"
          style={styles.input}
          placeholder="Brief title of the issue"
        />

        <TextInput
          label="Description"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.input}
          multiline
          numberOfLines={4}
          placeholder="Detailed description of the issue"
        />

        <Text style={styles.sectionTitle}>Category</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              selected={category === cat}
              onPress={() => setCategory(cat)}
              style={[styles.categoryChip, category === cat && styles.selectedCategoryChip]}
              textStyle={category === cat ? styles.selectedCategoryText : {}}
            >
              {cat}
            </Chip>
          ))}
        </View>

        <Divider style={styles.divider} />

        <Text style={styles.sectionTitle}>Photo</Text>
        <View style={styles.photoContainer}>
          {image ? (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: image }} style={styles.imagePreview} />
              <IconButton
                icon="close-circle"
                size={24}
                color={theme.colors.error}
                style={styles.removeImageButton}
                onPress={() => setImage(null)}
              />
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadButton} onPress={handleTakePhoto}>
              <IconButton icon="camera" size={30} color={theme.colors.primary} />
              <Text style={styles.uploadText}>Take Photo</Text>
            </TouchableOpacity>
          )}
        </View>

        <Divider style={styles.divider} />

        <Text style={styles.sectionTitle}>Location</Text>
        <View style={styles.locationContainer}>
          {location ? (
            <View style={styles.locationPreview}>
              <Text style={styles.locationText}>{location}</Text>
              <IconButton
                icon="map-marker"
                size={24}
                color={theme.colors.primary}
                onPress={handlePickLocation}
              />
            </View>
          ) : (
            <TouchableOpacity style={styles.locationButton} onPress={handlePickLocation}>
              <IconButton icon="map-marker" size={30} color={theme.colors.primary} />
              <Text style={styles.locationButtonText}>Pick Location</Text>
            </TouchableOpacity>
          )}
        </View>

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.submitButton}
          labelStyle={styles.submitButtonText}
          disabled={!title || !description || !category}
        >
          Submit Report
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  formContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
    backgroundColor: theme.colors.background,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryChip: {
    margin: 4,
    backgroundColor: theme.colors.lightGray,
  },
  selectedCategoryChip: {
    backgroundColor: theme.colors.primary,
  },
  selectedCategoryText: {
    color: 'white',
  },
  divider: {
    marginVertical: 16,
  },
  photoContainer: {
    marginBottom: 16,
  },
  uploadButton: {
    height: 150,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lightGray,
  },
  uploadText: {
    color: theme.colors.primary,
    marginTop: 8,
  },
  imagePreviewContainer: {
    position: 'relative',
  },
  imagePreview: {
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  locationContainer: {
    marginBottom: 24,
  },
  locationButton: {
    height: 100,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lightGray,
  },
  locationButtonText: {
    color: theme.colors.primary,
    marginTop: 8,
  },
  locationPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
  },
  locationText: {
    flex: 1,
    color: theme.colors.text,
  },
  submitButton: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
  },
  submitButtonText: {
    fontSize: 16,
  },
});

export default ReportIssueScreen;