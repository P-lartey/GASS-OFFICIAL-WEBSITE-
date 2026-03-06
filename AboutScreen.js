import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// Import committee member images that exist
import presidentPic from '../../assets/presidentpic.jpeg';
import vicePresidentPic from '../../assets/vicepresidentpic.jpeg';
import financialPic from '../../assets/financialpic.jpeg';
import organaPic from '../../assets/organapic.jpeg';
import secretaryPic from '../../assets/secretarypic.jpeg';
import hodPic from '../../assets/hodpic.png';
import wokomPic from '../../assets/wokompic.png';
import patronPic from '../../assets/patronpic.jpeg';

// Import Judicial Council images
import judicialchair from '../../assets/judicialchair.jpg';
import judicialdup1 from '../../assets/judicialdup1.jpg';
import onerep from '../../assets/onerep.jpg';

// Import Students' Academic Board images
import acadahead from '../../assets/acadaheadpic.jpg'; // Changed to the correct file name
import academicdup2 from '../../assets/academicdup2.jpg';
import academicdup1 from '../../assets/academicdup1.jpg';

// Import Welfare Commission images
import welfarecompic from '../../assets/welfarecompic.jpg';
import welfarecomdup1 from '../../assets/welfarecomdup1.jpg';

// Import Chief of Staff image
import cos from '../../assets/cos.jpeg';

// Import Sports and Entertainment Committee images
import sportdup from '../../assets/sportdup.jpg';

// Import Finance Committee images
import fin from '../../assets/fin.jpeg';
import finsec from '../../assets/finsec.jpg';

// Import Public Relations Office images
import pubrel from '../../assets/pubrel.jpg';
import pubrel1 from '../../assets/pubrel1.jpg';

// Import The TRATEC Commission images
import Tratechead from '../../assets/Tratechead.jpg';
import tratecdup1 from '../../assets/tratecdup1.jpg';
import tratecdup2 from '../../assets/tratecdup2.jpg';

// Import Projects and Programs Committee images
import programhead from '../../assets/programhead.jpg';
import programdup1 from '../../assets/programdup1.jpg';

// Import Electoral Commission images
import electorialhead from '../../assets/electorialhead.jpg';
import electorialdup2 from '../../assets/electorialdup2.jpg';
import electorialdup1 from '../../assets/electorialdup1.jpg';

// Import Media Committee images
import mediadup1 from '../../assets/mediadup1.jpg';

// Import Internship and Sponsorship Committee images
import internshiphead from '../../assets/internshipHead.jpg';
import internshipdup1 from '../../assets/internshipdup1.jpg';

// Import Outreach Commissioner image
import outreachhead from '../../assets/outreachhead.jpg';

const AboutScreen = ({ navigation }) => {
  const { colors, typography } = useTheme();
  const [activeTab, setActiveTab] = useState('studentLeaders'); // Default to Student Leaders tab

  const execCommittee = [
    { id: 1, name: 'HERBERT BOADU AYISI', role: 'President', image: presidentPic },
    { id: 2, name: 'KINGSLEY ADJANI', role: 'Vice President', image: vicePresidentPic },
    { id: 3, name: 'KELVIN BIKAM', role: 'Financial Secretary', image: fin }, // Changed back to fin
    { id: 4, name: 'MICHAEL NARH', role: 'Organising Secretary', image: organaPic },
    { id: 5, name: 'BERNICE FORSON', role: 'General Secretary', image: secretaryPic },
    { id: 6, name: 'ADRIANA COBBINAH', role: "Women's Commissioner", image: wokomPic },
  ];

  // Committees data with images and all names in CAPS
  // Reordered to put 3-member committees first (after Student Academic Board), then 2-member, then 1-member
  const committees = [
    {
      id: 1,
      name: 'STUDENTS’ ACADEMIC BOARD',
      members: [
        { id: 1, name: 'PRINCE PHILIP LARTEY A', role: 'HEAD', image: acadahead },
        { id: 2, name: 'AGBLEDZORWU KOFI GABRIEL', role: 'DEPUTY', image: academicdup2 },
        { id: 3, name: 'ALBERT BOATENG', role: 'DEPUTY', image: academicdup1 },
      ]
    },
    {
      id: 2,
      name: 'THE JUDICIAL COUNCIL',
      members: [
        { id: 1, name: 'PRINCE DAVID KWAME-KUMAH', role: 'HEAD', image: judicialchair },
        { id: 2, name: 'AFARI SAMUEL', role: 'DEPUTY', image: judicialdup1 },
        { id: 3, name: 'PETER OWUSU BOAKYE', role: 'DEPUTY', image: onerep },
      ]
    },
    {
      id: 3,
      name: 'THE TRATEC COMMISSION',
      members: [
        { id: 1, name: 'MENSAH KOOMSON JACOB', role: 'HEAD', image: Tratechead },
        { id: 2, name: 'GIDEON LIVINGSTON', role: 'DEPUTY', image: tratecdup1 },
        { id: 3, name: 'AYITEY ERNEST', role: 'DEPUTY', image: tratecdup2 },
      ]
    },
    {
      id: 4,
      name: 'ELECTORAL COMMISSION',
      members: [
        { id: 1, name: 'AKUGBIRE AYALKA EMMANUEL', role: 'HEAD', image: electorialhead },
        { id: 2, name: 'AYISI EKUSIKA', role: 'DEPUTY', image: electorialdup2 },
        { id: 3, name: 'HARRIET LARBI', role: 'DEPUTY', image: electorialdup1 },
      ]
    },
    {
      id: 5,
      name: 'PUBLIC RELATIONS OFFICE',
      members: [
        { id: 1, name: 'BERNARD AWUKU', role: 'HEAD', image: pubrel },
        { id: 2, name: 'ANSONG LILY YAA GYAMFUA', role: 'DEPUTY', image: pubrel1 },
        { id: 3, name: 'LAWRENCIA KORANKYE', role: 'DEPUTY', image: null },
      ]
    },
    {
      id: 6,
      name: 'PROJECTS AND PROGRAMS COMMITTEE',
      members: [
        { id: 1, name: 'RAYNOLDS KYEI ADDAI', role: 'HEAD', image: programhead },
        { id: 2, name: 'ASIAMAH DERRICK BRAKO', role: 'DEPUTY', image: programdup1 },
        { id: 3, name: 'ASERUA JANIFER', role: 'DEPUTY', image: null },
      ]
    },
    {
      id: 7,
      name: 'WELFARE COMMISSION',
      members: [
        { id: 1, name: 'IVY POKUAA AMANKWAA', role: 'HEAD', image: welfarecompic },
        { id: 2, name: 'GIFTY DUROWAAH MENSAH', role: 'DEPUTY', image: welfarecomdup1 },
      ]
    },
    {
      id: 8,
      name: 'CHIEF OF STAFF',
      members: [
        { id: 1, name: 'BABIRE RICHARD BOGBIRE', role: 'HEAD', image: cos },
      ]
    },
    {
      id: 9,
      name: 'SPORTS AND ENTERTAINMENT COMMITTEE',
      members: [
        { id: 1, name: 'EBENEZER ADELASI', role: 'HEAD', image: null },
        { id: 2, name: 'KORLETEY PRINCE', role: 'DEPUTY', image: sportdup },
      ]
    },
    {
      id: 10,
      name: 'FINANCE COMMITTEE',
      members: [
        { id: 1, name: 'BIKAM TAAFU KELVIN', role: 'HEAD', image: fin },
        { id: 2, name: 'SIMONE APEGWINE ANABIA', role: 'DEPUTY', image: finsec },
      ]
    },
    {
      id: 11,
      name: 'MEDIA COMMITTEE',
      members: [
        { id: 1, name: 'PAUL KWADWO ASIEDU BOATENG', role: 'HEAD', image: null },
        { id: 2, name: 'KWARKO KENNETH FRIMPONG', role: 'DEPUTY', image: mediadup1 },
      ]
    },
    {
      id: 12,
      name: 'INTERNSHIP AND SPONSORSHIP COMMITTEE',
      members: [
        { id: 1, name: 'GBEWU JAMES OWUSU', role: 'HEAD', image: internshiphead },
        { id: 2, name: 'FIRDAUS EL-ALAWA', role: 'DEPUTY', image: internshipdup1 },
      ]
    },
    {
      id: 13,
      name: 'OUTREACH COMMISSIONER',
      members: [
        { id: 1, name: 'LYDIA ASAFO AGYEI', role: 'HEAD', image: outreachhead },
      ]
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* History & Mission Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Our History</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            GASS-KNUST is the official student leadership body for statistics students in the Department of Statistics and Actuarial Science at KNUST. The association originated as a wing of the Association of Mathematics and Statistics Students (AMSS-KNUST) before establishing its full autonomy in the 2020/2021 academic year. This transition to an independent body was spearheaded by the Siriboe Kofi Duodu-led administration, with support from patrons Dr. Emmanuel Degraft Johnson and Dr. Sampson Twumasi Ankrah, and under the headship of Prof. Adebanji Atinuke Olusola as Head of Department.
          </Text>
          
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold, marginTop: 20 }]}>Our Vision</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            To be leading Association In Innovation and Research in KNUST and Beyond
          </Text>
          
          <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold, marginTop: 20 }]}>Our Mission</Text>
          <Text style={[styles.paragraph, { color: colors.text, fontFamily: typography.fontFamily }]}>
            Creating an environment for undertaking Quality Research, Technological Advancement and Human Resource Development
          </Text>
        </View>

        {/* New Tabs: Student Leaders and Department Authorities */}
        <View style={styles.section}>
          <View style={[styles.tabContainer, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'studentLeaders' && { borderBottomColor: colors.primary, borderBottomWidth: 2 }]}
              onPress={() => setActiveTab('studentLeaders')}
            >
              <Text style={[styles.tabText, { color: colors.text, fontFamily: typography.fontBold }, activeTab === 'studentLeaders' && { color: colors.primary }]}>Student Leaders</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'departmentAuthorities' && { borderBottomColor: colors.primary, borderBottomWidth: 2 }]}
              onPress={() => setActiveTab('departmentAuthorities')}
            >
              <Text style={[styles.tabText, { color: colors.text, fontFamily: typography.fontBold }, activeTab === 'departmentAuthorities' && { color: colors.primary }]}>Department Authorities</Text>
            </TouchableOpacity>
          </View>

          {/* Content based on selected tab */}
          {activeTab === 'studentLeaders' && (
            <View style={styles.tabContent}>
              {/* Governance Documents */}
              <View style={styles.subSection}>
                <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Governance Documents</Text>
                <TouchableOpacity 
                  style={[styles.documentCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}
                  onPress={() => {
                    // Create a temporary link to trigger download
                    const link = document.createElement('a');
                    link.href = require('../../assets/GASSconstitution.pdf');
                    link.download = 'GASS-Constitution.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Text style={[styles.documentTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{'Constitution of GASS'}</Text>
                  <Text style={[styles.documentDesc, { color: colors.text, fontFamily: typography.fontFamily }]}>{'Official constitution and by-law'}</Text>
                  <Text style={[styles.downloadText, { color: colors.primary }]}>{'Click to download'}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[styles.documentCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                  <Text style={[styles.documentTitle, { color: colors.text, fontFamily: typography.fontBold }]}>{'Code of Conduct'}</Text>
                  <Text style={[styles.documentDesc, { color: colors.text, fontFamily: typography.fontFamily }]}>{'Ethical guidelines for members'}</Text>
                </TouchableOpacity>
              </View>

              {/* Executive Council */}
              <View style={styles.subSection}>
                <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Executive Council 2025/2026</Text>
                <View style={styles.committeeContainer}>
                  {execCommittee.map((member) => (
                    <View key={member.id} style={[styles.memberCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                      {member.image ? (
                        <Image source={member.image} style={styles.memberImage} resizeMode="contain" />
                      ) : (
                        <View style={styles.memberImagePlaceholder}>
                          <Text style={{ color: colors.text }}>👤</Text>
                        </View>
                      )}
                      <Text style={[styles.memberName, { color: colors.text, fontFamily: typography.fontBold }]}>{member.name}</Text>
                      <Text style={[styles.memberRole, { color: colors.primary, fontFamily: typography.fontFamily }]}>{member.role}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Committees */}
              <View style={styles.subSection}>
                <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Appointed Students for Committees</Text>
                {committees.map((committee) => (
                  <View key={committee.id} style={[styles.committeeWrapper, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                    <Text style={[styles.committeeName, { color: colors.text, fontFamily: typography.fontBold }]}>{committee.name}</Text>
                    <View style={styles.committeeMembersContainer}>
                      {committee.members.map((member) => (
                        <View 
                          key={member.id} 
                          style={[
                            styles.committeeMemberCard,
                            committee.members.length === 2 && styles.twoMemberCard,
                            committee.members.length === 3 && styles.threeMemberCard,
                            { backgroundColor: colors.cardBackground }
                          ]}
                        >
                          {member.image ? (
                            <Image source={member.image} style={styles.memberImage} resizeMode="contain" />
                          ) : (
                            <View style={styles.memberImagePlaceholder}>
                              <Text style={{ color: colors.text }}>👤</Text>
                            </View>
                          )}
                          <Text style={[styles.memberName, { color: colors.text, fontFamily: typography.fontBold }]}>{member.name}</Text>
                          <Text style={[styles.memberRole, { color: colors.primary, fontFamily: typography.fontFamily }]}>{member.role}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {activeTab === 'departmentAuthorities' && (
            <View style={styles.tabContent}>
              {/* Department Authorities */}
              <View style={styles.subSection}>
                <Text style={[styles.sectionTitle, { color: colors.text, fontFamily: typography.fontBold }]}>Department Authorities</Text>
                <View style={styles.advisorContainer}>
                  <View style={[styles.advisorCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                    {hodPic ? (
                      <Image source={hodPic} style={styles.advisorImageLarge} resizeMode="contain" />
                    ) : (
                      <View style={styles.advisorImagePlaceholderLarge}>
                        <Text style={{ color: colors.text }}>👤</Text>
                      </View>
                    )}
                    <Text style={[styles.advisorName, { color: colors.text, fontFamily: typography.fontBold }]}>{'GABRIEL ASARE OKYERE'}</Text>
                    <Text style={[styles.advisorTitle, { color: colors.text, fontFamily: typography.fontFamily }]}>{'HEAD OF DEPARTMENT'}</Text>
                  </View>
                  
                  <View style={[styles.advisorCard, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
                    {patronPic ? (
                      <Image source={patronPic} style={styles.advisorImageLarge} resizeMode="contain" />
                    ) : (
                      <View style={styles.advisorImagePlaceholderLarge}>
                        <Text style={{ color: colors.text }}>👤</Text>
                      </View>
                    )}
                    <Text style={[styles.advisorName, { color: colors.text, fontFamily: typography.fontBold }]}>{'DR. EMMANUEL OWIREDU ODAME'}</Text>
                    <Text style={[styles.advisorTitle, { color: colors.text, fontFamily: typography.fontFamily }]}>{'PATRON'}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
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
  subSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
  },
  tabContent: {
    marginTop: 20,
  },
  committeeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memberCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
  },
  memberImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  memberRole: {
    fontSize: 14,
    textAlign: 'center',
  },
  documentCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  documentTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  documentDesc: {
    fontSize: 14,
  },
  downloadText: {
    fontSize: 12,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  advisorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  advisorCard: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    alignItems: 'center',
  },
  advisorImagePlaceholderLarge: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  advisorImageLarge: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  advisorName: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  advisorTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  committeeWrapper: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  committeeName: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  committeeMembersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  committeeMemberCard: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  // Responsive styles for different committee sizes
  twoMemberCard: {
    width: '48%',
  },
  threeMemberCard: {
    width: '30%',
  },
});

export default AboutScreen;