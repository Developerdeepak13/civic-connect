import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Button, Menu, Divider } from 'react-native-paper';
import theme from '../../theme/theme';

// This would be a real chart component in a real app
const ChartPlaceholder = ({ title, type, height = 200 }) => {
  return (
    <View style={[styles.chartPlaceholder, { height }]}>
      <Text style={styles.chartTitle}>{title}</Text>
      <Text style={styles.chartSubtitle}>{type} Chart</Text>
      <View style={styles.chartVisualization}>
        {type === 'Pie' && (
          <View style={styles.pieChartPlaceholder}>
            <View style={[styles.pieSlice, { backgroundColor: theme.colors.primary, transform: [{ rotate: '0deg' }], width: '50%' }]} />
            <View style={[styles.pieSlice, { backgroundColor: theme.colors.warning, transform: [{ rotate: '180deg' }], width: '30%' }]} />
            <View style={[styles.pieSlice, { backgroundColor: theme.colors.info, transform: [{ rotate: '270deg' }], width: '20%' }]} />
          </View>
        )}
        {type === 'Bar' && (
          <View style={styles.barChartPlaceholder}>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 80, backgroundColor: theme.colors.primary }]} />
              <Text style={styles.barLabel}>Roads</Text>
            </View>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 60, backgroundColor: theme.colors.warning }]} />
              <Text style={styles.barLabel}>Lighting</Text>
            </View>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 40, backgroundColor: theme.colors.info }]} />
              <Text style={styles.barLabel}>Sanitation</Text>
            </View>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 30, backgroundColor: theme.colors.success }]} />
              <Text style={styles.barLabel}>Parks</Text>
            </View>
            <View style={styles.barContainer}>
              <View style={[styles.bar, { height: 20, backgroundColor: theme.colors.error }]} />
              <Text style={styles.barLabel}>Other</Text>
            </View>
          </View>
        )}
        {type === 'Line' && (
          <View style={styles.lineChartPlaceholder}>
            <View style={styles.lineChartLine} />
            <View style={[styles.lineChartDot, { left: '10%', bottom: '20%' }]} />
            <View style={[styles.lineChartDot, { left: '30%', bottom: '40%' }]} />
            <View style={[styles.lineChartDot, { left: '50%', bottom: '30%' }]} />
            <View style={[styles.lineChartDot, { left: '70%', bottom: '60%' }]} />
            <View style={[styles.lineChartDot, { left: '90%', bottom: '50%' }]} />
          </View>
        )}
      </View>
    </View>
  );
};

const AnalyticsScreen = () => {
  const [timeFilterVisible, setTimeFilterVisible] = useState(false);
  const [timeFilter, setTimeFilter] = useState('This Month');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Analytics</Text>
        <Text style={styles.headerSubtitle}>Insights and statistics</Text>
      </View>

      <View style={styles.filterContainer}>
        <Menu
          visible={timeFilterVisible}
          onDismiss={() => setTimeFilterVisible(false)}
          anchor={
            <Button 
              mode="outlined" 
              onPress={() => setTimeFilterVisible(true)}
              icon="calendar"
              style={styles.filterButton}
            >
              {timeFilter}
            </Button>
          }
        >
          <Menu.Item 
            onPress={() => { setTimeFilter('Today'); setTimeFilterVisible(false); }} 
            title="Today" 
          />
          <Menu.Item 
            onPress={() => { setTimeFilter('This Week'); setTimeFilterVisible(false); }} 
            title="This Week" 
          />
          <Menu.Item 
            onPress={() => { setTimeFilter('This Month'); setTimeFilterVisible(false); }} 
            title="This Month" 
          />
          <Menu.Item 
            onPress={() => { setTimeFilter('This Year'); setTimeFilterVisible(false); }} 
            title="This Year" 
          />
          <Menu.Item 
            onPress={() => { setTimeFilter('All Time'); setTimeFilterVisible(false); }} 
            title="All Time" 
          />
        </Menu>
      </View>

      <View style={styles.chartsContainer}>
        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues by Status</Title>
            <ChartPlaceholder title="Distribution of issue statuses" type="Pie" />
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: theme.colors.primary }]} />
                <Text style={styles.legendText}>Resolved (50%)</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: theme.colors.warning }]} />
                <Text style={styles.legendText}>Pending (30%)</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: theme.colors.info }]} />
                <Text style={styles.legendText}>In Progress (20%)</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues by Category</Title>
            <ChartPlaceholder title="Number of issues per category" type="Bar" />
          </Card.Content>
        </Card>

        <Card style={styles.chartCard}>
          <Card.Content>
            <Title>Issues Over Time</Title>
            <ChartPlaceholder title="Trend of reported issues" type="Line" />
          </Card.Content>
        </Card>

        <Card style={styles.statsCard}>
          <Card.Content>
            <Title>Key Statistics</Title>
            <Divider style={styles.divider} />
            
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Average Resolution Time</Text>
                <Text style={styles.statValue}>3.2 days</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Issues Reported</Text>
                <Text style={styles.statValue}>156</Text>
              </View>
            </View>
            
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Resolution Rate</Text>
                <Text style={styles.statValue}>78%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Citizen Engagement</Text>
                <Text style={styles.statValue}>42%</Text>
              </View>
            </View>
            
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Most Active Area</Text>
                <Text style={styles.statValue}>Downtown</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Top Issue Category</Text>
                <Text style={styles.statValue}>Roads</Text>
              </View>
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
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  filterContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  filterButton: {
    borderColor: theme.colors.primary,
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
    padding: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  chartSubtitle: {
    fontSize: 14,
    color: theme.colors.darkGray,
    marginBottom: 16,
  },
  chartVisualization: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChartPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    position: 'relative',
  },
  pieSlice: {
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
  },
  barChartPlaceholder: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  barContainer: {
    alignItems: 'center',
    width: '18%',
  },
  bar: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barLabel: {
    fontSize: 10,
    marginTop: 4,
    color: theme.colors.darkGray,
  },
  lineChartPlaceholder: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  lineChartLine: {
    position: 'absolute',
    width: '80%',
    height: 2,
    backgroundColor: theme.colors.primary,
    left: '10%',
    bottom: '40%',
    borderRadius: 1,
  },
  lineChartDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  legendContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4,
  },
  legendText: {
    fontSize: 12,
    color: theme.colors.darkGray,
  },
  statsCard: {
    marginBottom: 16,
    borderRadius: 10,
    elevation: 4,
  },
  divider: {
    marginVertical: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    width: '48%',
  },
  statLabel: {
    fontSize: 12,
    color: theme.colors.darkGray,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
});

export default AnalyticsScreen;