import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Text, Card, Button, Searchbar, Menu, Divider, Chip, IconButton } from 'react-native-paper';
import theme from '../../theme/theme';

const ManageIssuesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Dummy data for issues
  const issues = [
    {
      id: '1',
      title: 'Pothole on Main Street',
      description: 'Large pothole causing traffic hazards',
      category: 'Roads',
      location: '123 Main St',
      reportedBy: 'John Doe',
      reportedDate: '2023-06-15',
      status: 'Pending',
      priority: 'High',
    },
    {
      id: '2',
      title: 'Broken Street Light',
      description: 'Street light not working at night',
      category: 'Lighting',
      location: '456 Oak Ave',
      reportedBy: 'Jane Smith',
      reportedDate: '2023-06-14',
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: '3',
      title: 'Overflowing Trash Bin',
      description: 'Trash bin overflowing in public park',
      category: 'Sanitation',
      location: 'Central Park',
      reportedBy: 'Mike Johnson',
      reportedDate: '2023-06-13',
      status: 'Resolved',
      priority: 'Low',
    },
    {
      id: '4',
      title: 'Graffiti on Public Building',
      description: 'Vandalism on community center wall',
      category: 'Vandalism',
      location: 'Community Center',
      reportedBy: 'Sarah Williams',
      reportedDate: '2023-06-12',
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: '5',
      title: 'Fallen Tree Blocking Sidewalk',
      description: 'Tree fell after storm and blocks pedestrian path',
      category: 'Parks',
      location: '789 Elm St',
      reportedBy: 'David Brown',
      reportedDate: '2023-06-11',
      status: 'Pending',
      priority: 'High',
    },
  ];

  const onChangeSearch = (query) => setSearchQuery(query);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return theme.colors.warning;
      case 'In Progress':
        return theme.colors.info;
      case 'Resolved':
        return theme.colors.success;
      default:
        return theme.colors.primary;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return theme.colors.error;
      case 'Medium':
        return theme.colors.warning;
      case 'Low':
        return theme.colors.success;
      default:
        return theme.colors.primary;
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          issue.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || issue.status === statusFilter;
    const matchesCategory = categoryFilter === 'All' || issue.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const renderIssueItem = ({ item }) => (
    <Card style={styles.issueCard}>
      <Card.Content>
        <View style={styles.issueHeader}>
          <View style={styles.issueTitleContainer}>
            <Text style={styles.issueTitle}>{item.title}</Text>
            <Chip 
              style={[styles.statusChip, { backgroundColor: getStatusColor(item.status) }]}
              textStyle={styles.statusChipText}
            >
              {item.status}
            </Chip>
          </View>
          <Chip 
            style={[styles.priorityChip, { backgroundColor: getPriorityColor(item.priority) }]}
            textStyle={styles.priorityChipText}
          >
            {item.priority}
          </Chip>
        </View>
        
        <Text style={styles.issueDescription}>{item.description}</Text>
        
        <View style={styles.issueDetails}>
          <Text style={styles.issueDetailText}>Category: {item.category}</Text>
          <Text style={styles.issueDetailText}>Location: {item.location}</Text>
          <Text style={styles.issueDetailText}>Reported by: {item.reportedBy}</Text>
          <Text style={styles.issueDetailText}>Date: {item.reportedDate}</Text>
        </View>
      </Card.Content>
      <Card.Actions style={styles.issueActions}>
        <Button 
          mode="contained" 
          style={[styles.actionButton, { backgroundColor: theme.colors.info }]}
          labelStyle={styles.actionButtonLabel}
          onPress={() => {}}
        >
          Update Status
        </Button>
        <Button 
          mode="contained" 
          style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
          labelStyle={styles.actionButtonLabel}
          onPress={() => {}}
        >
          Assign
        </Button>
        <Button 
          mode="contained" 
          style={[styles.actionButton, { backgroundColor: theme.colors.accent }]}
          labelStyle={styles.actionButtonLabel}
          onPress={() => {}}
        >
          View Details
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Manage Issues</Text>
      </View>
      
      <View style={styles.searchFilterContainer}>
        <Searchbar
          placeholder="Search issues"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        
        <View style={styles.filterContainer}>
          <Menu
            visible={filterMenuVisible}
            onDismiss={() => setFilterMenuVisible(false)}
            anchor={
              <Button 
                mode="outlined" 
                onPress={() => setFilterMenuVisible(true)}
                icon="filter"
                style={styles.filterButton}
              >
                Filter
              </Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Status" disabled />
            <Divider />
            <Menu.Item 
              onPress={() => { setStatusFilter('All'); setFilterMenuVisible(false); }} 
              title="All"
              right={() => statusFilter === 'All' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setStatusFilter('Pending'); setFilterMenuVisible(false); }} 
              title="Pending"
              right={() => statusFilter === 'Pending' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setStatusFilter('In Progress'); setFilterMenuVisible(false); }} 
              title="In Progress"
              right={() => statusFilter === 'In Progress' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setStatusFilter('Resolved'); setFilterMenuVisible(false); }} 
              title="Resolved"
              right={() => statusFilter === 'Resolved' ? <IconButton icon="check" size={20} /> : null}
            />
            
            <Divider />
            <Menu.Item onPress={() => {}} title="Category" disabled />
            <Divider />
            <Menu.Item 
              onPress={() => { setCategoryFilter('All'); setFilterMenuVisible(false); }} 
              title="All"
              right={() => categoryFilter === 'All' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setCategoryFilter('Roads'); setFilterMenuVisible(false); }} 
              title="Roads"
              right={() => categoryFilter === 'Roads' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setCategoryFilter('Lighting'); setFilterMenuVisible(false); }} 
              title="Lighting"
              right={() => categoryFilter === 'Lighting' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setCategoryFilter('Sanitation'); setFilterMenuVisible(false); }} 
              title="Sanitation"
              right={() => categoryFilter === 'Sanitation' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setCategoryFilter('Parks'); setFilterMenuVisible(false); }} 
              title="Parks"
              right={() => categoryFilter === 'Parks' ? <IconButton icon="check" size={20} /> : null}
            />
            <Menu.Item 
              onPress={() => { setCategoryFilter('Vandalism'); setFilterMenuVisible(false); }} 
              title="Vandalism"
              right={() => categoryFilter === 'Vandalism' ? <IconButton icon="check" size={20} /> : null}
            />
          </Menu>
          
          {statusFilter !== 'All' && (
            <Chip 
              style={styles.activeFilterChip}
              onClose={() => setStatusFilter('All')}
            >
              Status: {statusFilter}
            </Chip>
          )}
          
          {categoryFilter !== 'All' && (
            <Chip 
              style={styles.activeFilterChip}
              onClose={() => setCategoryFilter('All')}
            >
              Category: {categoryFilter}
            </Chip>
          )}
        </View>
      </View>
      
      <FlatList
        data={filteredIssues}
        renderItem={renderIssueItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.issuesList}
      />
    </View>
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
  searchFilterContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  searchBar: {
    marginBottom: 8,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  filterButton: {
    marginRight: 8,
    borderColor: theme.colors.primary,
  },
  activeFilterChip: {
    marginRight: 8,
    backgroundColor: theme.colors.lightGray,
  },
  issuesList: {
    padding: 16,
  },
  issueCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  issueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  issueTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    flex: 1,
  },
  statusChip: {
    height: 24,
    marginTop: 4,
  },
  statusChipText: {
    fontSize: 10,
    color: 'white',
  },
  priorityChip: {
    height: 24,
    marginLeft: 4,
  },
  priorityChipText: {
    fontSize: 10,
    color: 'white',
  },
  issueDescription: {
    fontSize: 14,
    color: theme.colors.darkGray,
    marginBottom: 8,
  },
  issueDetails: {
    backgroundColor: theme.colors.lightGray,
    padding: 8,
    borderRadius: 4,
  },
  issueDetailText: {
    fontSize: 12,
    color: theme.colors.darkGray,
    marginBottom: 2,
  },
  issueActions: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  actionButton: {
    marginLeft: 8,
    marginTop: 8,
    borderRadius: 4,
  },
  actionButtonLabel: {
    fontSize: 12,
    color: 'white',
  },
});

export default ManageIssuesScreen;