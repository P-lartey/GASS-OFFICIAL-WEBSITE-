import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Linking, Modal, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import partnershipImage from '../../assets/partnershipgass.jpeg';

const CareersScreen = () => {
  const { colors, typography } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const jobPostings = [
    {
      id: 1,
      title: 'Data Analyst',
      company: 'Ghana Health Service',
      location: 'Accra',
      type: 'Full-time',
      description: 'Seeking a skilled data analyst to interpret healthcare data and provide insights for policy decisions.',
      applyLink: 'https://www.linkedin.com/jobs/ghana-health-service-jobs/?currentJobId=3643214807&originalSubdomain=gh'
    },
    {
      id: 2,
      title: 'Research Statistician',
      company: 'Ghana Statistical Service',
      location: 'Accra',
      type: 'Full-time',
      description: 'Join our team in conducting national surveys and analyzing complex datasets for government planning.',
      applyLink: 'https://www.ghanacurrentjobs.com/job-vacancy-for-data-processing-officer/#google_vignette'
    },
    {
      id: 3,
      title: 'Market Research Analyst',
      company: 'Ghana Cocoa Board',
      location: 'Greater Accra',
      type: 'Internship',
      description: 'Opportunity for students to gain hands-on experience in market research and consumer behavior analysis.',
      applyLink: 'https://cocobod.gh/'
    },
    {
      id: 4,
      title: 'Quantitative Analyst',
      company: 'Bank of Ghana',
      location: 'Accra',
      type: 'Full-time',
      description: 'Work with financial data to develop models for risk assessment and investment strategies.',
      applyLink: 'https://www.bog.gov.gh/careers/'
    }
  ];

  const careerTips = [
    {
      id: 1,
      title: 'Crafting the Perfect CV',
      description: 'Learn how to highlight your statistical skills and projects effectively.',
      videoUrl: 'https://www.youtube.com/embed/oAckpNuJDds?si=B10L358eJ_qfXOZg',
      cvLink: 'https://app.flowcv.com/resumes'
    }
  ];

  const filteredJobs = jobPostings.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApply = (job) => {
    if (job.applyLink) {
      Linking.openURL(job.applyLink);
    } else {
      // Default action for jobs without specific links
      alert('Application details will be provided soon. Please check back later.');
    }
  };

  const openCVResources = (tip) => {
    if (tip.videoUrl && tip.cvLink) {
      setModalVisible(true);
    } else {
      // Default action for tips without specific resources
      alert('More resources will be provided soon. Please check back later.');
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: colors.cardBackground }]}>
          <TextInput
            style={[styles.searchInput, { color: colors.text, fontFamily: typography.fontFamily }]}
            placeholder="Search jobs, companies, locations..."
            placeholderTextColor={colors.text}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Job Postings */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Job Opportunities</Text>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <View key={job.id} style={[styles.jobCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                <Text style={[styles.jobTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{job.title}</Text>
                <Text style={[styles.jobCompany, { color: colors.primary, fontFamily: typography.fontFamily }]}>{job.company}</Text>
                <View style={styles.jobMeta}>
                  <Text style={[styles.jobLocation, { color: colors.text, fontFamily: typography.fontFamily }]}>{job.location}</Text>
                  <Text style={[styles.jobType, { color: colors.text, fontFamily: typography.fontBold }]}>{job.type}</Text>
                </View>
                <Text style={[styles.jobDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{job.description}</Text>
                <TouchableOpacity 
                  style={[styles.applyButton, { backgroundColor: colors.primary }]}
                  onPress={() => handleApply(job)}
                >
                  <Text style={[styles.applyButtonText, { fontFamily: typography.fontBold }]}>Apply Now</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={[styles.noResults, { color: colors.text, fontFamily: typography.fontFamily }]}>No jobs found matching your search.</Text>
          )}
        </View>

        {/* Career Development Tips */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Career Development</Text>
          {careerTips.map((tip) => (
            <View key={tip.id} style={[styles.tipCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.tipTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{tip.title}</Text>
              <Text style={[styles.tipDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{tip.description}</Text>
              <TouchableOpacity 
                style={styles.readMoreButton}
                onPress={() => openCVResources(tip)}
              >
                <Text style={[styles.readMoreText, { color: colors.primary, fontFamily: typography.fontBold }]}>
                  {tip.videoUrl && tip.cvLink ? 'Watch Video & Create CV' : 'Read More'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Partnership Opportunities */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Partnership Opportunities</Text>
          
          <View style={[styles.partnershipCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
            
            <Text style={[styles.partnershipText, { color: colors.text, fontFamily: typography.fontFamily }]}>
              The Sponsorship and Internship Committee wishes to inform all students that we are inviting supportive partners who are willing to:
            </Text>
            
            <View style={styles.benefitsContainer}>
              <Text style={[styles.benefitTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Provide:</Text>
              <View style={styles.benefitItem}>
                <Text style={[styles.benefitBullet, { color: colors.primary }]}>•</Text>
                <Text style={[styles.benefitText, { color: colors.text, fontFamily: typography.fontFamily }]}>
                  Internship opportunities for students of our department
                </Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={[styles.benefitBullet, { color: colors.primary }]}>•</Text>
                <Text style={[styles.benefitText, { color: colors.text, fontFamily: typography.fontFamily }]}>
                  Sponsorships (financial or material support) to assist the department's academic, practical, and developmental activities
                </Text>
              </View>
            </View>
            
            <View style={styles.benefitsContainer}>
              <Text style={[styles.benefitTitle, { color: colors.text, fontFamily: typography.fontBold }]}>What We Offer:</Text>
              <View style={styles.benefitItem}>
                <Text style={[styles.benefitBullet, { color: colors.primary }]}>•</Text>
                <Text style={[styles.benefitText, { color: colors.text, fontFamily: typography.fontFamily }]}>
                  Strong exposure across GASS events and social media
                </Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={[styles.benefitBullet, { color: colors.primary }]}>•</Text>
                <Text style={[styles.benefitText, { color: colors.text, fontFamily: typography.fontFamily }]}>
                  Direct connection with top Statistics students for internships and recruitment
                </Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={[styles.benefitBullet, { color: colors.primary }]}>•</Text>
                <Text style={[styles.benefitText, { color: colors.text, fontFamily: typography.fontFamily }]}>
                  Collaboration through guest lectures, research partnerships, and networking
                </Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={[styles.contactButton, { backgroundColor: colors.primary }]}
              onPress={() => Linking.openURL('mailto:gassknust26@gmail.com')}
            >
              <Text style={[styles.contactButtonText, { fontFamily: typography.fontBold }]}>Contact Us: gassknust26@gmail.com</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CV Resources Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Crafting the Perfect CV</Text>
            
            <Text style={[styles.modalSubtitle, { color: colors.text, fontFamily: typography.fontFamily }]}>
              Watch this video to learn how to create an effective CV:
            </Text>
            
            <iframe
              src="https://www.youtube.com/embed/oAckpNuJDds?si=B10L358eJ_qfXOZg"
              style={styles.videoFrame}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
            
            <Text style={[styles.modalText, { color: colors.text, fontFamily: typography.fontFamily }]}>
              After watching the video, click the button below to create your professional CV online for free:
            </Text>
            
            <TouchableOpacity
              style={[styles.createCVButton, { backgroundColor: colors.primary }]}
              onPress={() => Linking.openURL('https://app.flowcv.com/resumes')}
            >
              <Text style={[styles.createCVButtonText, { fontFamily: typography.fontBold }]}>Create Your Free CV</Text>
            </TouchableOpacity>
          </ScrollView>
          
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: '#6c757d' }]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={[styles.closeButtonText, { fontFamily: typography.fontBold }]}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  jobCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  jobTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 10,
  },
  jobMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  jobLocation: {
    fontSize: 14,
  },
  jobType: {
    fontSize: 14,
  },
  jobPosted: {
    fontSize: 14,
  },
  jobDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
  },
  applyButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 14,
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
  },
  tipCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  tipTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    fontSize: 14,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  contactButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 10,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
  },
  partnershipCard: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
  },
  partnershipImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 16/9,
    borderRadius: 10,
    marginBottom: 20,
  },
  partnershipText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  benefitTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  benefitBullet: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 3,
  },
  benefitText: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  contactButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 10,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 5, // Reduced padding to maximize width
    backgroundColor: '#f0f8ff', // Light blue background
  },
  modalContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  videoFrame: {
    width: '100%',
    height: 400, // Adjusted to 400 for a more square shape
    marginBottom: 30,
    backgroundColor: '#ffffff', // White background for the video area
    borderRadius: 15, // Rounded corners
    borderWidth: 2,
    borderColor: '#4682b4', // Steel blue border
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10, // Android shadow
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  createCVButton: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#4682b4', // Steel blue background
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10, // Android shadow
  },
  createCVButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#6c757d',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CareersScreen;