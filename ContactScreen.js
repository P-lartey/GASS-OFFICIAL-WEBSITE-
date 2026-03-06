import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ContactScreen = () => {
  const { colors, typography } = useTheme();

  const socialMedia = [
    { id: 1, name: 'TikTok', handle: '@knuststats_27', icon: 'tiktok', url: 'https://www.tiktok.com/@knuststats_27/video/7571765490893344012?is_from_webapp=1&sender_device=pc' },
    { id: 2, name: 'Twitter', handle: '@GASSKNUST', icon: 'twitter', url: 'https://www.twitter.com' },
    { id: 3, name: 'LinkedIn', handle: 'GASS KNUST', icon: 'linkedin', url: 'https://www.linkedin.com/company/ghana-association-of-statistics-students-knust/posts/?feedView=all' },
    { id: 4, name: 'WhatsApp', handle: 'GASS Community Group', icon: 'whatsapp', url: 'https://www.whatsapp.com' }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Contact Information</Text>
          
          <View style={[styles.contactCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
            <Text style={[styles.contactLabel, { color: colors.text, fontFamily: typography.fontBold }]}>Official Email</Text>
            <Text style={[styles.contactValue, { color: colors.primary, fontFamily: typography.fontFamily }]}>gassknust26@gmail.com</Text>
          </View>
          
          <View style={[styles.contactCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
            <Text style={[styles.contactLabel, { color: colors.text, fontFamily: typography.fontBold }]}>Department Address</Text>
            <Text style={[styles.contactValue, { color: colors.text, fontFamily: typography.fontFamily }]}>
              Department of Statistics & Actuarial Science{'\n'}
              Fac.: Physical & Computational Sciences{'\n'}
              College of Science{'\n'}
              KNUST, PMB, Kumasi-Ghana
            </Text>
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Connect With Us</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Follow us on social media for updates, events, and announcements.
          </Text>
          
          <View style={styles.socialContainer}>
            {socialMedia.map((social) => (
              <TouchableOpacity 
                key={social.id} 
                style={[styles.socialCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}
                onPress={() => window.open(social.url, '_blank')}
              >
                <Text style={[styles.socialName, { color: colors.text, fontFamily: typography.fontBold }]}>{social.name}</Text>
                <Text style={[styles.socialHandle, { color: colors.primary, fontFamily: typography.fontFamily }]}>{social.handle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Office Hours */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Office Hours</Text>
          <View style={[styles.hoursCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
            <Text style={[styles.hoursText, { color: colors.text, fontFamily: typography.fontFamily }]}>Monday - Friday: 9:00 AM - 5:00 PM</Text>
            <Text style={[styles.hoursText, { color: colors.text, fontFamily: typography.fontFamily }]}>Saturday: 10:00 AM - 2:00 PM</Text>
            <Text style={[styles.hoursText, { color: colors.text, fontFamily: typography.fontFamily }]}>Sunday: Closed</Text>
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
  formGroup: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 120,
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  contactCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  contactLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  contactValue: {
    fontSize: 15,
    lineHeight: 22,
  },
  socialContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  socialCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  socialName: {
    fontSize: 16,
    marginBottom: 5,
  },
  socialHandle: {
    fontSize: 14,
  },
  hoursCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  hoursText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ContactScreen;