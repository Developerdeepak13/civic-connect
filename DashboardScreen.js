import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import theme from '../../theme/theme';

// This would be a real chart component in a real app
const ChartPlaceholder = ({ title, height = 200 }) => {
  return (
    <View style={[styles.chartPlaceholder, { height }]}>
      <Text style={styles.chartTitle}>{title}</Text>
      <Text style={styles.chartSubtitle}>Chart visualization would appear here</Text>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  // Dummy data for the dashboard
  const summaryData = {
    totalIssues: 156,
    pendingIssues: 42,
    inProgressIssues: 35,
    resolvedIssues: 79,
    newIssuesThisWeek: 23,
    resolvedThisWeek: 18,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.headerSubtitle}>Overview of civic issues</Text>
      </View>

      <View style={styles.summaryCardsContainer}>
        <Card style={[styles.summaryCard, styles.totalCard]}>
          <Card.Content style={styles.summaryCardContent}>
            <View>
              <Text style={styles.summaryCardLabel}>Total Issues</Text>
              <Text style={styles.summaryCardValue}>{summaryData.totalIssues}</Text>
            </View>
            <IconButton icon="clipboard-list" size={30} color={theme.colors.primary} />
          </Card.Content>
        </Card>

        <Card style={[styles.summaryCard, styles.pendingCard]}>
          <Card.Content style={styles.summaryCardContent}>
            <View>
              <Text style={styles.summaryCardLabel}>Pending</Text>
              <Text style={styles.summaryCardValue}>{summaryData.pendingIssues}</Text>
            </View>
            <IconButton icon="clock-outline" size={30} color={theme.colors.warning} />
          </Card.Content>
        </Card>

        <Card style={[styles.summaryCard, styles.inProgressCard]}>
          <Card.Content style={styles.summaryCardContent}>
            <View>
              <Text style={styles.summaryCardLabel}>In Progress</Text>
              <Text style={styles.summaryCardValue}>{summaryData.inProgressIssues}</Text>
            </View>
            <IconButton icon="progress-wrench" size={30} color={theme.colors.info} />
          </Card.Content>
        </Card>

        <Card style={[styles.summaryCard, styles.resolvedCard]}>
          <Card.Content style={styles.summaryCardContent}>
            <View>
              <Text style={styles.summaryCardLabel}>Resolved</Text>
              <Text style={styles.summaryCardValue}>{summaryData.resolvedIssues}</Text>
            </View>
            <IconButton icon="check-circle" size={30} color={theme.colors.success} />
          </Card.Content>
        </Card>
      </View>

      <View style={styles.chartsContainer}>
        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues by Status</Title>
            <ChartPlaceholder title="Pie Chart" />
          </Card.Content>
        </Card>

        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues by Category</Title>
            <ChartPlaceholder title="Bar Chart" />
          </Card.Content>
        </Card>

        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues Over Time</Title>
            <ChartPlaceholder title="Line Chart" />
          </Card.Content>
        </Card>
      </View>

      <Card style={styles.recentActivityCard}>
        <Card.Content>
          <Title>Recent Activity</Title>
          <View style={styles.activityItem}>
            <IconButton icon="alert" size={24} color={theme.colors.warning} />
            <View style={styles.activityContent}>
              <Paragraph style={styles.activityText}>New issue reported: Pothole on Oak Street</Paragraph>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <IconButton icon="progress-wrench" size={24} color={theme.colors.info} />
            <View style={styles.activityContent}>
              <Paragraph style={styles.activityText}>Issue status updated: Broken Street Light (In Progress)</Paragraph>
              <Text style={styles.activityTime}>5 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <IconButton icon="check-circle" size={24} color={theme.colors.success} />
            <View style={styles.activityContent}>
              <Paragraph style={styles.activityText}>Issue resolved: Graffiti on Community Center</Paragraph>
              <Text style={styles.activityTime}>Yesterday</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
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
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  summaryCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  summaryCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  summaryCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryCardLabel: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  summaryCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  totalCard: {
    backgroundColor: 'white',
  },
  pendingCard: {
    backgroundColor: 'white',
  },
  inProgressCard: {
    backgroundColor: 'white',
  },
  resolvedCard: {
    backgroundColor: 'white',
  },
  chartsContainer: {
    padding: 8,
  },
  chartCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  chartPlaceholder: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  chartSubtitle: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  recentActivityCard: {
    margin: 8,
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
  },
  activityTime: {
    fontSize: 12,
    color: theme.colors.darkGray,
  },
});

export default DashboardScreen;