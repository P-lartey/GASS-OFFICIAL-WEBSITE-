import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ResearchScreen = () => {
  const { colors, typography } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ type: '', url: '' });
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [researchTitle, setResearchTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const researchProjects = [
    {
      id: 1,
      title: 'GASS Website',
      author: 'Prince Philip Lartey',
      year: '2025',
      description: 'A comprehensive platform for the Ghana Association of Statistics Students (GASS) at KNUST. This website serves as a central hub for association activities, member resources, research showcases, and communication.'
    },
    {
      id: 2,
      title: 'GASSHUB - An Android/iOS App to Streamline Activities of the Statistics Students Association',
      author: 'Prince Philip Lartey',
      year: '2025',
      description: 'A mobile application designed to enhance communication, event management, and resource sharing among statistics students, making association activities more accessible and efficient.'
    },
    {
      id: 3,
      title: 'Student Satisfaction with Campus Accommodation',
      author: 'Group Research',
      year: '2024',
      description: 'A comprehensive study analyzing factors affecting student satisfaction with dormitory facilities and services, providing insights for improving campus living conditions.'
    },
    {
      id: 4,
      title: 'Social Media Sentiment Analysis During Elections',
      author: 'Yaw Boateng',
      year: '2023',
      description: 'Using NLP techniques to analyze public sentiment during the 2020 Ghanaian elections.'
    },
    {
      id: 5,
      title: 'Predictive Modeling for Stock Market Trends',
      author: 'Adwoa Asante',
      year: '2023',
      description: 'Developing statistical models to forecast stock price movements in the GSE.'
    }
  ];

  const openDocument = (docName) => {
    if (docName === 'gassweb') {
      // For the GASS Website project, we'll show the video in a modal like other videos
      setModalContent({ type: 'video', url: 'https://www.youtube.com/embed/kBhQs-abh64?si=pwG_H1zsh-AljSBC' });
      setModalVisible(true);
    } else if (docName === 'gasshub') {
      // For the GASSHUB project, we'll show the video in a modal like other videos
      setModalContent({ type: 'video', url: 'https://www.youtube.com/embed/tAmPa2_o1nI?si=S5kUUFJo8htWWIRA' });
      setModalVisible(true);
    } else if (docName === 'research') {
      // For the research project PDF, we'll trigger a download
      const link = document.createElement('a');
      link.href = '../../assets/Research Project.pdf';
      link.download = 'Research-Project.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Research Spotlight */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Research/Projects</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Showcasing exceptional research work by our talented statistics students. These projects demonstrate the innovative applications of statistical methods to real-world problems.
          </Text>
          
          {researchProjects.map((project) => (
            <View key={project.id} style={[styles.projectCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
              <Text style={[styles.projectTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{project.title}</Text>
              <Text style={[styles.projectAuthor, { color: colors.primary, fontFamily: typography.fontFamily }]}>{project.author} • {project.year}</Text>
              <Text style={[styles.projectDescription, { color: colors.text, fontFamily: typography.fontFamily }]}>{project.description}</Text>
              <TouchableOpacity 
                style={[styles.readMoreButton, { backgroundColor: colors.primary }]}
                onPress={() => {
                  if (project.id === 1) {
                    openDocument('gassweb');
                  } else if (project.id === 2) {
                    openDocument('gasshub');
                  } else if (project.id === 3) {
                    openDocument('research');
                  }
                }}
              >
                <Text style={[styles.readMoreText, { fontFamily: typography.fontBold }]}>Read Full Paper</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Submission Info */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Submit Your Work</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Are you working on an exciting research project? We'd love to feature it in our spotlight! 
            Submit your abstract and we'll review it for publication on our website.
          </Text>
          <TouchableOpacity 
            style={[styles.submitButton, { backgroundColor: colors.primary }]}
            onPress={() => Linking.openURL('https://forms.gle/87JL2cJ1a1BkAPhp8')}
          >
            <Text style={[styles.submitButtonText, { fontFamily: typography.fontBold }]}>Submit Research</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Resource Modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setModalContent({ type: '', url: '' });
        }}
      >
        <View style={styles.modalContainer}>
          {modalContent.type === 'video' && (
            <iframe
              src={modalContent.url}
              style={styles.videoFrame}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></iframe>
          )}
            
          {modalContent.type === 'videos' && (
            <ScrollView>
              {modalContent.urls.map((url, index) => (
                <iframe
                  key={index}
                  src={url}
                  style={styles.videoFrame}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowfullscreen
                ></iframe>
              ))}
            </ScrollView>
          )}
            
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: colors.primary }]}
            onPress={() => {
              setModalVisible(false);
              setModalContent({ type: '', url: '' });
            }}
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
  section: {
    marginBottom: 30,
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
  projectCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  projectTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  projectAuthor: {
    fontSize: 14,
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  readMoreText: {
    color: 'white',
    fontSize: 14,
  },
  submitButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 5, // Further reduced padding to maximize width
    backgroundColor: '#f0f8ff', // Light blue background
    alignItems: 'center',
  },
  videoFrame: {
    width: '100%',
    height: 400, // Reduced height from 500 to 400 for a more square shape
    marginBottom: 20,
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
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
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
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResearchScreen;