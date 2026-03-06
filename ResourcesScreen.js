import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ResourcesScreen = () => {
  const { colors, typography } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ type: '', url: '' });

  const resources = [
    { 
      id: 1, 
      title: 'R Programming Tutorial Series', 
      link: 'https://www.w3schools.com/r/default.asp',
      type: 'link'
    },
    { 
      id: 2, 
      title: 'Learn Data Science', 
      link: 'https://www.w3schools.com/datascience/default.asp',
      type: 'link'
    },
    { 
      id: 8, 
      title: 'Learn Cybersecurity', 
      link: 'https://www.w3schools.com/cybersecurity/index.php',
      type: 'link'
    },
    { 
      id: 3, 
      title: 'SPSS Statistical Analysis Guide', 
      videos: [
        'https://www.youtube.com/embed/_zFBUfZEBWQ?si=M51sWhV5eaoF7krE',
        'https://www.youtube.com/embed/bapuGcjwiLQ?si=lFJ3TUe19Ns7yKz1',
        'https://www.youtube.com/embed/99fGYHGyO5U?si=T98lyUpiCy-1LQUn',
        'https://www.youtube.com/embed/6EH5DSaCF_8?si=GyR4j7Ffgj0VUOrB',
        'https://www.youtube.com/embed/C2Qa5d9ij0Y?si=O4oCzDONe8Pf4uIn',
        'https://www.youtube.com/embed/vII22ZnFOP0?si=fomReQaCcKQJUvAv',
        'https://www.youtube.com/embed/-qGFZFOQx7Q?si=5GbfXfzy36cMLV8E',
        'https://www.youtube.com/embed/R1ON_vM5xak?si=N1TE4mzYve6xHzQr'
      ],
      type: 'videos'
    },
    { 
      id: 4, 
      title: 'Introduction to Bayesian Statistics', 
      video: 'https://www.youtube.com/embed/NIqeFYUhSzU?si=r2GUJ6wEKcc_Bqdu',
      type: 'video'
    },
    { 
      id: 5, 
      title: 'Learn Web Development', 
      video: 'https://www.youtube.com/embed/beJ8fDbX9vs?si=HC72bpXE9sWcNnM8',
      type: 'video'
    },
    { 
      id: 6, 
      title: 'Machine Learning', 
      video: 'https://www.youtube.com/embed/vStJoetOxJg?si=pP4pgcBGH9zMNnYq',
      type: 'video'
    },
    { 
      id: 7, 
      title: 'Learn Stata for Data Analysis', 
      video: 'https://www.youtube.com/embed/gdnDkjoPJTM?si=ldPV9LrjPMESLDPA',
      type: 'video'
    }
  ];

  const openResource = (resource) => {
    if (resource.type === 'link') {
      Linking.openURL(resource.link);
    } else if (resource.type === 'video') {
      setModalContent({ type: 'video', url: resource.video });
      setModalVisible(true);
    } else if (resource.type === 'videos') {
      setModalContent({ type: 'videos', urls: resource.videos });
      setModalVisible(true);
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Learning Resources</Text>
          <Text style={[styles.headerSubtitle, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Curated collection of tutorials, guides, and tools to help you excel in statistical analysis and data science.
          </Text>
        </View>

        {/* Resources */}
        <View style={styles.resourcesContainer}>
          {resources.map((resource) => (
            <TouchableOpacity 
              key={resource.id} 
              style={[styles.resourceCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}
              onPress={() => openResource(resource)}
            >
              <Text style={[styles.resourceTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{resource.title}</Text>
              <Text style={[styles.resourceType, { color: colors.primary }]}>
                Learn
              </Text>
            </TouchableOpacity>
          ))}

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
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 15,
  },
  headerSubtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  resourcesContainer: {
    marginBottom: 30,
  },
  resourceCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  resourceTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  resourceType: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  modalContainer: {
    flex: 1,
    padding: 5,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  videoFrame: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4682b4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
    backgroundColor: '#4682b4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResourcesScreen;