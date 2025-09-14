import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Chip, Button, Searchbar, Menu } from 'react-native-paper';
import theme from '../../theme/theme';

const MyIssuesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  // Dummy data for the user's reported issues
  const myIssuesData = [
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic issues and potential vehicle damage.',
      category: 'Roads',
      status: 'In Progress',
      date: '2023-07-15',
      location: 'Main Street & 5th Avenue',
    },
    {
      id: '2',
      title: 'Broken Street Light',
      description: 'Street light not working for the past week, creating safety concerns at night.',
      category: 'Lighting',
      status: 'Pending',
      date: '2023-07-14',
      location: 'Oak Avenue',
    },
    {
      id: '3',
      title: 'Overflowing Trash Bin',
      description: 'Trash bin at the park is overflowing and needs immediate attention.',
      category: 'Sanitation',
      status: 'Resolved',
      date: '2023-07-10',
      location: 'Central Park',
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

  const filteredIssues = myIssuesData
    .filter(issue => 
      (statusFilter === 'All' || issue.status === statusFilter) &&
      (issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       issue.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const renderIssueCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Chip 
            style={[styles.statusChip, { backgroundColor: getStatusColor(item.status) }]}
            textStyle={styles.statusText}
          >
            {item.status}
          </Chip>
        </View>
        <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
        <View style={styles.cardFooter}>
          <Chip style={styles.categoryChip}>{item.category}</Chip>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <Text style={styles.locationText}>{item.location}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="text" onPress={() => {}} color={theme.colors.primary}>View Details</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search issues"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
        <Menu
          visible={filterVisible}
          onDismiss={() => setFilterVisible(false)}
          anchor={
            <Button 
              mode="outlined" 
              onPress={() => setFilterVisible(true)}
              style={styles.filterButton}
              icon="filter-variant"
            >
              {statusFilter}
            </Button>
          }
        >
          <Menu.Item onPress={() => {
            setStatusFilter('All');
            setFilterVisible(false);
          }} title="All" />
          <Menu.Item onPress={() => {
            setStatusFilter('Pending');
            setFilterVisible(false);
          }} title="Pending" />
          <Menu.Item onPress={() => {
            setStatusFilter('In Progress');
            setFilterVisible(false);
          }} title="In Progress" />
          <Menu.Item onPress={() => {
            setStatusFilter('Resolved');
            setFilterVisible(false);
          }} title="Resolved" />
        </Menu>
      </View>

      {filteredIssues.length > 0 ? (
        <FlatList
          data={filteredIssues}
          renderItem={renderIssueCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No issues found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightGray,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  searchbar: {
    flex: 1,
    marginRight: 8,
    backgroundColor: theme.colors.lightGray,
  },
  filterButton: {
    justifyContent: 'center',
    borderColor: theme.colors.primary,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: theme.colors.darkGray,
  },
});

export default MyIssuesScreen;