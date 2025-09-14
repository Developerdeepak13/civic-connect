import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FAB, Chip, IconButton } from 'react-native-paper';
import theme from '../../theme/theme';
import { issuesData } from '../../utils/mockData';
import { getStatusColor } from '../../utils/helpers';

// This would be a real map component in a real app
const MapPlaceholder = ({ markers, onMarkerPress }) => {
  return (
    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapPlaceholderText}>Map View</Text>
      <Text style={styles.mapPlaceholderSubtext}>Google Maps would be integrated here</Text>
      {markers.map((marker, index) => (
        <View 
          key={index} 
          style={[
            styles.mapMarker,
            { 
              left: `${30 + (index * 15)}%`, 
              top: `${20 + (index * 10)}%`,
              backgroundColor: getStatusColor(marker.status, theme)
            }
          ]}
          onTouchEnd={() => onMarkerPress(marker)}
        >
          <Text style={styles.mapMarkerText}>{index + 1}</Text>
        </View>
      ))}
    </View>
  );
};

const MapViewScreen = ({ navigation }) => {
  const [selectedIssue, setSelectedIssue] = React.useState(null);
  const [filterStatus, setFilterStatus] = React.useState('All');

  // Filter issues based on status
  const filteredIssues = filterStatus === 'All' 
    ? issuesData 
    : issuesData.filter(issue => issue.status === filterStatus);

  const handleMarkerPress = (issue) => {
    setSelectedIssue(issue);
  };

  const handleReportIssue = () => {
    navigation.navigate('ReportIssue');
  };

  const handleFilterPress = (status) => {
    setFilterStatus(status);
    setSelectedIssue(null);
  };

  return (
    <View style={styles.container}>
      <MapPlaceholder markers={filteredIssues} onMarkerPress={handleMarkerPress} />
      
      {/* Filter chips */}
      <View style={styles.filterContainer}>
        <Chip 
          selected={filterStatus === 'All'}
          onPress={() => handleFilterPress('All')}
          style={styles.filterChip}
        >
          All
        </Chip>
        <Chip 
          selected={filterStatus === 'Pending'}
          onPress={() => handleFilterPress('Pending')}
          style={[styles.filterChip, { backgroundColor: filterStatus === 'Pending' ? theme.colors.warning : 'white' }]}
          textStyle={{ color: filterStatus === 'Pending' ? 'white' : theme.colors.text }}
        >
          Pending
        </Chip>
        <Chip 
          selected={filterStatus === 'In Progress'}
          onPress={() => handleFilterPress('In Progress')}
          style={[styles.filterChip, { backgroundColor: filterStatus === 'In Progress' ? theme.colors.info : 'white' }]}
          textStyle={{ color: filterStatus === 'In Progress' ? 'white' : theme.colors.text }}
        >
          In Progress
        </Chip>
        <Chip 
          selected={filterStatus === 'Resolved'}
          onPress={() => handleFilterPress('Resolved')}
          style={[styles.filterChip, { backgroundColor: filterStatus === 'Resolved' ? theme.colors.success : 'white' }]}
          textStyle={{ color: filterStatus === 'Resolved' ? 'white' : theme.colors.text }}
        >
          Resolved
        </Chip>
      </View>

      {/* Selected issue details */}
      {selectedIssue && (
        <View style={styles.issueDetailContainer}>
          <View style={styles.issueDetailHeader}>
            <Text style={styles.issueDetailTitle}>{selectedIssue.title}</Text>
            <IconButton 
              icon="close" 
              size={20} 
              onPress={() => setSelectedIssue(null)} 
              style={styles.closeButton}
            />
          </View>
          
          <View style={styles.issueDetailContent}>
            <Chip 
              style={[styles.statusChip, { backgroundColor: getStatusColor(selectedIssue.status, theme) }]}
              textStyle={styles.statusChipText}
            >
              {selectedIssue.status}
            </Chip>
            
            <Text style={styles.issueDetailDescription}>{selectedIssue.description}</Text>
            
            <View style={styles.issueDetailInfo}>
              <Text style={styles.issueDetailInfoText}>Category: {selectedIssue.category}</Text>
              <Text style={styles.issueDetailInfoText}>Location: {selectedIssue.location}</Text>
              <Text style={styles.issueDetailInfoText}>Reported by: {selectedIssue.reportedBy}</Text>
              <Text style={styles.issueDetailInfoText}>Date: {selectedIssue.reportedDate}</Text>
            </View>
            
            <View style={styles.issueDetailActions}>
              <Chip 
                icon="comment" 
                onPress={() => {}} 
                style={styles.actionChip}
              >
                Comment
              </Chip>
              <Chip 
                icon="share" 
                onPress={() => {}} 
                style={styles.actionChip}
              >
                Share
              </Chip>
            </View>
          </View>
        </View>
      )}

      {/* FABs */}
      <FAB
        style={styles.locationFab}
        icon="crosshairs-gps"
        color="white"
        onPress={() => {}}
      />
      
      <FAB
        style={styles.reportFab}
        icon="plus"
        label="Report Issue"
        color="white"
        onPress={handleReportIssue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapPlaceholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  mapPlaceholderSubtext: {
    fontSize: 16,
    color: theme.colors.darkGray,
    marginTop: 8,
  },
  mapMarker: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    elevation: 5,
  },
  mapMarkerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  filterChip: {
    margin: 4,
    elevation: 2,
  },
  issueDetailContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
    maxHeight: '50%',
  },
  issueDetailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  issueDetailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    margin: 0,
  },
  issueDetailContent: {
    padding: 16,
  },
  statusChip: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  statusChipText: {
    color: 'white',
  },
  issueDetailDescription: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 16,
  },
  issueDetailInfo: {
    backgroundColor: theme.colors.lightGray,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  issueDetailInfoText: {
    fontSize: 12,
    color: theme.colors.darkGray,
    marginBottom: 4,
  },
  issueDetailActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  actionChip: {
    marginRight: 8,
  },
  locationFab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: theme.colors.primary,
  },
  reportFab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 16,
    backgroundColor: theme.colors.accent,
  },
});

export default MapViewScreen;