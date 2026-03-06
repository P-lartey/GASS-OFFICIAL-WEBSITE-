import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const StudentLifeScreen = () => {
  const { colors, typography } = useTheme();
  const [activeTab, setActiveTab] = useState('events');
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  const events = [
    {
      id: 1,
      title: "Annual Departmental Quiz",
      description: "Competition between Statistics, Math and Actuarial Science",
      date: "July every year",
      anticipate: true // Flag to show "Anticipate" text
    },
    {
      id: 2,
      title: "GASS Dinner and Excellence Awards Night",
      description: "An evening of celebration recognizing outstanding achievements and contributions to the department. Enjoy a delightful dinner while honoring exceptional students, faculty, and alumni who have demonstrated excellence in academics, research, leadership, and service to the GASS community.",
      date: "To be announced",
      anticipate: true // Flag to show "Anticipate" text
    },
    {
      id: 3,
      title: "GASS Sports Day",
      description: "Competition between all levels of the departments",
      date: "To be announced",
      anticipate: true // Flag to show "Anticipate" text
    },
    {
      id: 4,
      title: "GASS Week",
      description: "A week dedicated to activities like official wear - rep your school, rep your jessie, African print wear, etc. Students take pictures during these activities creating memories.",
      date: "To be announced",
      anticipate: true // Flag to show "Anticipate" text
    }
  ];

  const galleryImages = [
    // GASS Dinner Night images
    { id: 1, uri: require('../../assets/slide8.jpg'), caption: 'GASS Dinner Night' },
    { id: 2, uri: require('../../assets/slide10.jpg'), caption: 'GASS Dinner Night' },
    { id: 3, uri: require('../../assets/slide15.jpg'), caption: 'GASS Dinner Night' },
    { id: 4, uri: require('../../assets/slide16.jpg'), caption: 'GASS Dinner Night' },
    { id: 5, uri: require('../../assets/slide17.jpg'), caption: 'GASS Dinner Night' },
    { id: 6, uri: require('../../assets/slide18.jpg'), caption: 'GASS Dinner Night' },
    { id: 7, uri: require('../../assets/slide26.jpg'), caption: 'GASS Dinner Night' },
    { id: 8, uri: require('../../assets/slide27.jpg'), caption: 'GASS Dinner Night' },
    
    // GASS Seminar images
    { id: 9, uri: require('../../assets/slide12.jpg'), caption: 'GASS Seminar' },
    { id: 10, uri: require('../../assets/slide11.jpg'), caption: 'GASS Seminar' },
    { id: 11, uri: require('../../assets/slide2.jpg'), caption: 'GASS Seminar' },
    { id: 12, uri: require('../../assets/slide4.jpg'), caption: 'GASS Seminar' },
    { id: 13, uri: require('../../assets/slide5.jpg'), caption: 'GASS Seminar' },
    { id: 14, uri: require('../../assets/slide28.jpg'), caption: 'GASS Seminar' },
    
    // Field Trip images
    { id: 15, uri: require('../../assets/slide19.jpg'), caption: 'Field Trip' },
    { id: 16, uri: require('../../assets/slide10.jpg'), caption: 'Field Trip' },
    
    // Departmental Quiz images
    { id: 17, uri: require('../../assets/slide22.jpg'), caption: 'Departmental Quiz' },
    { id: 18, uri: require('../../assets/slide6.jpg'), caption: 'Departmental Quiz' },
    
    // Peer Mentorship images
    { id: 19, uri: require('../../assets/slide25.jpeg'), caption: 'Peer Mentorship' },
    { id: 20, uri: require('../../assets/slide23.jpeg'), caption: 'Peer Mentorship' },
    { id: 21, uri: require('../../assets/slide24.jpeg'), caption: 'Peer Mentorship' },
    { id: 22, uri: require('../../assets/slide29.jpg'), caption: 'Peer Mentorship' }
  ];

  const academicCalendar = [
    { 
      id: 1, 
      month: 'First Semester 2025/2026', 
      events: [
        'School Resumption: January 12',
        'Mid-Semester Exams: Monday, February 23 - Friday, February 27',
        'Final Exams: Tuesday, April 7 - Friday, April 24'
      ] 
    },
    { 
      id: 2, 
      month: 'Second Semester 2025/2026', 
      events: [
        'School Resumption: May 23',
        'Mid-Semester Exams: Monday, July 6 - Friday, July 10',
        'Final Exams: Monday, August 17 - Friday, September 4'
      ] 
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Tabs */}
        <View style={[styles.tabContainer, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'events' && { borderBottomColor: colors.primary, borderBottomWidth: 2 }]}
            onPress={() => setActiveTab('events')}
          >
            <Text style={[styles.tabText, { color: colors.text, fontFamily: typography.fontBold }, activeTab === 'events' && { color: colors.primary }]}>Events</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'gallery' && { borderBottomColor: colors.primary, borderBottomWidth: 2 }]}
            onPress={() => setActiveTab('gallery')}
          >
            <Text style={[styles.tabText, { color: colors.text, fontFamily: typography.fontBold }, activeTab === 'gallery' && { color: colors.primary }]}>Gallery</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'calendar' && { borderBottomColor: colors.primary, borderBottomWidth: 2 }]}
            onPress={() => setActiveTab('calendar')}
          >
            <Text style={[styles.tabText, { color: colors.text, fontFamily: typography.fontBold }, activeTab === 'calendar' && { color: colors.primary }]}>Calendar</Text>
          </TouchableOpacity>
        </View>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <View style={styles.tabContent}>
            <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Upcoming Events</Text>
            {events.map((event) => (
              <View key={event.id} style={[styles.eventCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                <Text style={[styles.eventTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{event.title}</Text>
                <Text style={[styles.eventDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{event.description}</Text>
                <Text style={[styles.eventDate, { color: colors.text, fontFamily: typography.fontFamily }]}>{event.date}</Text>
                {event.anticipate && (
                  <Text style={[styles.anticipateText, { color: colors.primary, fontFamily: typography.fontBold }]}>Anticipate</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <View style={styles.tabContent}>
            <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Photo Gallery</Text>
            <View style={styles.galleryGrid}>
              {galleryImages.map((image) => (
                <View key={image.id} style={[styles.imageCard, { backgroundColor: colors.cardBackground }]}>
                  {imageLoadErrors[image.id] ? (
                    <View style={[styles.imagePlaceholder, { backgroundColor: colors.borderColor }]}>
                      <Text style={{ color: colors.text }}>Image not available</Text>
                    </View>
                  ) : (
                    <Image 
                      source={image.uri} 
                      style={styles.galleryImage}
                      resizeMode="cover"
                      onError={(error) => {
                        setImageLoadErrors({
                          ...imageLoadErrors,
                          [image.id]: true,
                        });
                        console.log('Image loading error for image ID ' + image.id + ':', error.nativeEvent.error);
                      }}
                      // Add loading prop for better UX
                      loading="lazy"
                    />
                  )}
                  <Text style={[styles.imageCaption, { color: colors.text, fontFamily: typography.fontFamily }]}>{image.caption}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <View style={styles.tabContent}>
            <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Academic Calendar</Text>
            
            {/* Download Calendar Button */}
            <TouchableOpacity 
              style={[styles.downloadButton, { backgroundColor: colors.primary }]}
              onPress={() => {
                // Create a temporary link to trigger download
                const link = document.createElement('a');
                link.href = require('../../assets/calender.pdf');
                link.download = 'GASS-Academic-Calendar.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Text style={[styles.downloadButtonText, { fontFamily: typography.fontBold }]}>Download Academic Calendar</Text>
            </TouchableOpacity>
            
            {academicCalendar.map((semester) => (
              <View key={semester.id} style={[styles.monthSection, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                <Text style={[styles.monthTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{semester.month}</Text>
                {semester.events.map((event, index) => (
                  <Text key={index} style={[styles.calendarEvent, { color: colors.text, fontFamily: typography.fontFamily }]}>{event}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Mentorship Program */}
        {/* Removed as per user request */}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  eventCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  eventTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 16,
  },
  eventTime: {
    fontSize: 14,
  },
  eventVenue: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
  },
  rsvpButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  rsvpButtonText: {
    color: 'white',
    fontSize: 14,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageCard: {
    width: SCREEN_WIDTH < 768 ? '48%' : '32%', // Better responsive sizing for mobile
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  galleryImage: {
    width: '100%',
    height: SCREEN_WIDTH < 768 ? 150 : 200, // Responsive height
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    height: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  imageCaption: {
    fontSize: 14,
    textAlign: 'center',
  },
  monthSection: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  monthTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  calendarEvent: {
    fontSize: 15,
    marginBottom: 5,
    paddingLeft: 10,
  },
  downloadButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: 5,
  },
  vsText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  anticipateText: {
    fontSize: 16,
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

export default StudentLifeScreen;