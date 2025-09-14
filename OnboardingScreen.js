import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import theme from '../theme/theme';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onboardingData = [
    {
      id: '1',
      title: 'Report Issues Instantly',
      description: 'Report civic issues instantly with photos & location.',
      icon: '📸',
    },
    {
      id: '2',
      title: 'Track in Real Time',
      description: 'Track your reports and community updates in real time.',
      icon: '🔍',
    },
    {
      id: '3',
      title: 'Work Together',
      description: 'Work together for a cleaner, safer city.',
      icon: '🤝',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.icon}>{item.icon}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.x) /
              Math.floor(event.nativeEvent.layoutMeasurement.width)
          );
          setCurrentIndex(index);
        }}
      />

      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: index === currentIndex ? theme.colors.primary : theme.colors.mediumGray },
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="text"
          onPress={handleSkip}
          style={styles.skipButton}
          labelStyle={styles.skipButtonText}
        >
          Skip
        </Button>
        <Button
          mode="contained"
          onPress={handleNext}
          style={styles.nextButton}
        >
          {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  slide: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: theme.colors.darkGray,
    textAlign: 'center',
    marginBottom: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  skipButton: {
    alignSelf: 'center',
  },
  skipButtonText: {
    color: theme.colors.darkGray,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;