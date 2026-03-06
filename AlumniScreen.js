import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import alum1 from '../../assets/alum1.jpeg';
import alum2 from '../../assets/alum2.jpeg';
import alum3 from '../../assets/alum3.jpeg';

const AlumniScreen = () => {
  const { colors, typography } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const alumniProfiles = [
    {
      id: 1,
      name: 'Professor David Saah',
      image: alum2,
      currentPosition: 'Assistant Teaching Professor at Southern Methodist University, Dallas, Texas',
      quote: 'I am currently an Assistant Teaching Professor at Southern Methodist University in Dallas, Texas. Studying Statistics at KNUST provided me with a strong analytical foundation that opened significant opportunities for my graduate studies in the United States and an internship with United Airlines. The rigorous training and supportive faculty in the Department of Statistics and Actuarial Science played an important role in shaping my academic and professional growth. I highly recommend the department to anyone seeking a solid pathway into data-driven careers.',
      linkedin: 'https://www.linkedin.com/in/saahdavid/'
    },
    {
      id: 2,
      name: 'Patrick Nsor Agasiya, MPhil',
      image: alum1,
      currentPosition: 'Biostatistician with the Global Health and Infectious Diseases Research Group (GHID) at the Kumasi Centre for Collaborative Research in Tropical Medicine (KCCR)',
      quote: 'I am currently a Biostatistician with the Global Health and Infectious Diseases Research Group (GHID) at the Kumasi Centre for Collaborative Research in Tropical Medicine (KCCR). My undergraduate training in Statistics at KNUST laid the strong foundation that continues to shape my work in data-driven health research. The support and exposure I gained through the GASS community further strengthened my analytical growth in career trajectory. I highly recommend studying Statistics to all aspiring students, as data has become the backbone of decision-making today and will drive even greater impact in the future.',
      linkedin: 'https://www.linkedin.com/in/patrick-nsor-agasiya-a17ba5201/'
    },
    {
      id: 3,
      name: 'Emmanuel Ansah',
      image: alum3,
      currentPosition: 'Data Scientist at eFiche Ltd in Rwanda',
      quote: 'I am a Data Scientist at eFiche Ltd in Rwanda, where I transform health data into decision-support systems that improve healthcare outcomes across Africa. My training in the Statistics Department at KNUST taught me to find clarity in complexity and to value models that solve real problems. It also showed me the power of mentorship in shaping confident, capable practitioners. I remain deeply grateful to KNUST and GASS for strengthening my analytical mindset and commitment to impactful, data-driven solutions.',
      linkedin: 'https://www.linkedin.com/in/emmanuel-ansah-9b193a216/'
    }
  ];

  const filteredAlumni = alumniProfiles.filter(alumnus => 
    alumnus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumnus.currentPosition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Distinguished Alumni</Text>
        <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
          Celebrating the achievements of our distinguished alumni who are making significant impacts in their respective fields.
        </Text>
        
        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: colors.cardBackground }]}>
          <TextInput
            style={[styles.searchInput, { color: colors.text, fontFamily: typography.fontFamily }]}
            placeholder="Search alumni..."
            placeholderTextColor={colors.text}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumnus) => (
            <View key={alumnus.id} style={[styles.alumnusCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <View style={styles.alumnusHeader}>
                <Image 
                  source={alumnus.image} 
                  style={styles.profileImage}
                  resizeMode="cover"
                />
                <View style={styles.alumnusInfo}>
                  <Text style={[styles.alumnusName, { color: colors.text, fontFamily: typography.fontBold }]}>{alumnus.name}</Text>
                  <Text style={[styles.currentPosition, { color: colors.text, fontFamily: typography.fontFamily }]}>{alumnus.currentPosition}</Text>
                </View>
              </View>
              <Text style={[styles.quote, { color: colors.text, fontFamily: typography.fontFamily }]}>"{alumnus.quote}"</Text>
              <TouchableOpacity 
                style={[styles.connectButton, { backgroundColor: colors.primary }]}
                onPress={() => window.open(alumnus.linkedin, '_blank')}
              >
                <Text style={[styles.connectButtonText, { fontFamily: typography.fontBold }]}>Connect on LinkedIn</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={[styles.noResults, { color: colors.text, fontFamily: typography.fontFamily }]}>No alumni found matching your search.</Text>
        )}

        {/* Give Back Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Ways to Give Back</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Stay connected and contribute to the next generation of statisticians.
          </Text>
          
          <View style={styles.giveBackOptions}>
            <TouchableOpacity style={[styles.optionCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.optionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{'Mentorship'}</Text>
              <Text style={[styles.optionDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{'Guide current students in their academic and career journeys'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.optionCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.optionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{'Guest Lectures'}</Text>
              <Text style={[styles.optionDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{'Share your expertise through talks and workshops'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.optionCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.optionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{'Donations'}</Text>
              <Text style={[styles.optionDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{'Support scholarships and department initiatives'}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  alumnusCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  alumnusHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  alumnusInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  alumnusName: {
    fontSize: 18,
    marginBottom: 5,
  },
  currentPosition: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  quote: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  connectButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  connectButtonText: {
    color: 'white',
    fontSize: 14,
  },
  searchContainer: {
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchInput: {
    fontSize: 16,
    paddingVertical: 10,
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
  },
  giveBackOptions: {
    marginBottom: 20,
  },
  optionCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 15,
    lineHeight: 22,
  },
});

export default AlumniScreen;