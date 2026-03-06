import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import DataVisualization from '../components/DataVisualization';
import ImageCarousel from '../components/ImageCarousel';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const { colors, typography, isDarkMode } = useTheme();
  const borderPosition = useRef(new Animated.Value(0)).current;

  // Animation for the moving border
  React.useEffect(() => {
    const animateBorder = () => {
      borderPosition.setValue(0);
      Animated.timing(borderPosition, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => animateBorder()); // Repeat the animation
    };

    animateBorder();
  }, [borderPosition]);

  const borderColor = borderPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.primary, '#FFD700'], // Transition from primary color to gold
  });

  // Memoize quickLinks to prevent unnecessary re-renders
  const quickLinks = useMemo(() => [
    { id: 1, title: 'About Us', screen: 'About' },
    { id: 2, title: 'Academic Program', screen: 'Academic' },
    { id: 4, title: 'Learning Resources', screen: 'Resources' },
    { id: 3, title: 'Student Research', screen: 'Research' },
    { id: 5, title: 'Career Opportunities', screen: 'Careers' },
    { id: 6, title: 'Student Life', screen: 'StudentLife' },
    { id: 7, title: 'Alumni Network', screen: 'Alumni' },
    { id: 8, title: 'Contact Us', screen: 'Contact' },
  ], []);

  const upcomingEvents = useMemo(() => [
    { id: 1, title: 'Annual Departmental Quiz', date: 'July every year' },
    { id: 2, title: 'GASS Dinner and Excellence Awards Night', date: 'To be announced' },
    { id: 3, title: 'GASS Seminar', date: 'To be announced' },
  ], []);

  // Responsive layout adjustments
  const isMobile = SCREEN_WIDTH < 768;
  const committeeWidth = isMobile ? '90%' : '50%';
  const quickLinkWidth = isMobile ? '100%' : '48%';

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Image Carousel */}
      <View style={styles.carouselSection}>
        <ImageCarousel />
      </View>

      {/* Academic Committee Highlight */}
      <View style={styles.section}>
        <View style={[styles.committeeContainer, { backgroundColor: colors.cardBackground, width: committeeWidth }]}>
          <Animated.View 
            style={[
              styles.movingBorder, 
              {
                borderColor: borderColor,
                transform: [
                  {
                    rotate: borderPosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg']
                    })
                  }
                ]
              }
            ]}
          />
          <View style={styles.committeeContent}>
            <Text style={[styles.committeeTitle, { color: colors.text, fontFamily: typography.fontBold }]}>
              GASS Website
            </Text>
            <Text style={[styles.committeeText, { color: colors.text, fontFamily: typography.fontFamily }]}>
              Powered by Academic Committee • Led by Prince Philip Lartey • Under Ayisi-Adjani Administration
            </Text>
          </View>
        </View>
      </View>

      {/* Quick Links */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Quick Access</Text>
        <View style={styles.quickLinksContainer}>
          {quickLinks.map((link) => (
            <TouchableOpacity
              key={link.id}
              style={[styles.quickLinkCard, { backgroundColor: colors.cardBackground, width: quickLinkWidth }]}
              onPress={() => navigation.navigate(link.screen)}
            >
              <Text style={[styles.quickLinkText, { color: colors.text, fontFamily: typography.fontBold }]}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Upcoming Events */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Upcoming Events</Text>
        <View style={styles.eventsContainer}>
          {upcomingEvents.map((event) => (
            <View key={event.id} style={[styles.eventCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.eventTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{event.title}</Text>
              <Text style={[styles.eventDate, { color: colors.primary, fontFamily: typography.fontFamily }]}>{event.date}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>By The Numbers</Text>
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statNumber, { color: colors.primary, fontFamily: typography.fontBold }]}>500+</Text>
            <Text style={[styles.statLabel, { color: colors.text, fontFamily: typography.fontFamily }]}>Members</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statNumber, { color: colors.primary, fontFamily: typography.fontBold }]}>25+</Text>
            <Text style={[styles.statLabel, { color: colors.text, fontFamily: typography.fontFamily }]}>Events</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.cardBackground }]}>
            <Text style={[styles.statNumber, { color: colors.primary, fontFamily: typography.fontBold }]}>15+</Text>
            <Text style={[styles.statLabel, { color: colors.text, fontFamily: typography.fontFamily }]}>Years</Text>
          </View>
        </View>
      </View>

      {/* Data Visualization */}
      <View style={styles.visualizationSection}>
        <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Membership Growth</Text>
        <DataVisualization isDarkMode={isDarkMode} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselSection: {
    padding: 20,
    paddingTop: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickLinkCard: {
    padding: 15, // Reduced from 20 to 15
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickLinkText: {
    fontSize: 16,
  },
  eventsContainer: {
    marginBottom: 20,
  },
  eventCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 24,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
  committeeContainer: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    height: 70, // Reduced from 80 to 70
  },
  movingBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 2,
    borderRadius: 8,
  },
  committeeContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  committeeTitle: {
    fontSize: 16,
    marginBottom: 3,
    textAlign: 'center',
  },
  committeeText: {
    fontSize: 11,
    textAlign: 'center',
  },
  visualizationSection: {
    padding: 20,
    paddingBottom: 40,
  },
});

export default HomeScreen;