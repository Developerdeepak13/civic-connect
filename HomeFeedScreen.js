import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Chip, Avatar, Title, Paragraph } from 'react-native-paper';
import theme from '../../theme/theme';

const HomeFeedScreen = () => {
  // Dummy data for the issues feed
  const issuesData = [
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic issues and potential vehicle damage.',
      category: 'Roads',
      status: 'In Progress',
      date: '2023-07-15',
      image: 'https://example.com/pothole.jpg', // This would be a real image in a real app
      location: 'Main Street & 5th Avenue',
    },
    {
      id: '2',
      title: 'Broken Street Light',
      description: 'Street light not working for the past week, creating safety concerns at night.',
      category: 'Lighting',
      status: 'Pending',
      date: '2023-07-14',
      image: 'https://example.com/streetlight.jpg',
      location: 'Oak Avenue',
    },
    {
      id: '3',
      title: 'Overflowing Trash Bin',
      description: 'Trash bin at the park is overflowing and needs immediate attention.',
      category: 'Sanitation',
      status: 'Resolved',
      date: '2023-07-10',
      image: 'https://example.com/trash.jpg',
      location: 'Central Park',
    },
    {
      id: '4',
      title: 'Graffiti on Public Building',
      description: 'Inappropriate graffiti on the wall of the community center.',
      category: 'Vandalism',
      status: 'In Progress',
      date: '2023-07-12',
      image: 'https://example.com/graffiti.jpg',
      location: 'Community Center',
    },
    {
      id: '5',
      title: 'Fallen Tree Blocking Sidewalk',
      description: 'Tree fell after the storm and is completely blocking the pedestrian path.',
      category: 'Environment',
      status: 'Pending',
      date: '2023-07-16',
      image: 'https://example.com/tree.jpg',
      location: 'Elm Street',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return theme.colors.warning;
      case 'In Progress':
        return theme.colors.info;
      case 'Resolved':
        return theme.colors.success;
      default:
        return theme.colors.darkGray;
    }
  };

  const renderIssueCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} style={styles.cardImage} />
      <Card.Content>
        <View style={styles.cardHeader}>
          <Title style={styles.cardTitle}>{item.title}</Title>
          <Chip 
            style={[styles.statusChip, { backgroundColor: getStatusColor(item.status) }]}
            textStyle={styles.statusText}
          >
            {item.status}
          </Chip>
        </View>
        <Paragraph style={styles.cardDescription}>{item.description}</Paragraph>
        <View style={styles.cardFooter}>
          <Chip style={styles.categoryChip}>{item.category}</Chip>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <Text style={styles.locationText}>{item.location}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={issuesData}
        renderItem={renderIssueCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusChip: {
    height: 28,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
  },
  cardDescription: {
    marginTop: 8,
    marginBottom: 12,
    color: theme.colors.text,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  categoryChip: {
    backgroundColor: theme.colors.primary,
    height: 28,
  },
  dateText: {
    color: theme.colors.darkGray,
    fontSize: 12,
  },
  locationText: {
    color: theme.colors.darkGray,
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeFeedScreen;