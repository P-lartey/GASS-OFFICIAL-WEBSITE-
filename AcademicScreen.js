import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const AcademicScreen = () => {
  const { colors, typography } = useTheme();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  
  // Animation values for the blinking light effect
  const [blinkAnimation] = useState(new Animated.Value(0));

  // Start the blinking animation when component mounts
  React.useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => animate()); // Repeat the animation
    };
    
    animate();
  }, []);

  const courseData = [
    {
      level: 'Level 100',
      semesters: [
        {
          semester: 'Semester 1',
          courses: [
            'MATH 171: Calculus I',
            'MATH 173: Logic and Set Theory',
            'MATH 175: Vectors and Mechanics',
            'MATH 177: Computing for Mathematics I',
            'BIO 155: Biology for Mathematics',
            'ECONS 151: Elements of Economics I',
            'ENGL 157: Communication Skills I'
          ]
        },
        {
          semester: 'Semester 2',
          courses: [
            'MATH 172: Calculus II',
            'MATH 174: Discrete Mathematics',
            'MATH 176: Linear Algebra I',
            'ENGL 178: Computing for Mathematics II',
            'STAT 166: Probability and Statistics',
            'ECONS 152: Elements of Economics II',
            'ENGL 158: Communication Skills II'
          ]
        }
      ]
    },
    {
      level: 'Level 200',
      semesters: [
        {
          semester: 'Semester 1',
          courses: [
            'MATH 265: Mathematical Methods I',
            'STAT 266: Statistical Inference',
            'MATH 277: Real Analysis I',
            'MATH 275: Linear Algebra II',
            'MATH 279: Mathematical Programming',
            'STAT 265: Probability Distributions',
            'ENGL 263: Literature in English I'
          ]
        },
        {
          semester: 'Semester 2',
          courses: [
            'MATH 278: Real Analysis II',
            'MATH 266: Mathematical Methods II',
            'MATH 276: Numerical Analysis I',
            'STAT 266: Statistical Inference',
            'MATH 286: Differential Equations I',
            'ENGL 264: Literature in English II',
            'STAT 267: Statistical Reasoning'
          ]
        }
      ]
    },
    {
      level: 'Level 300',
      semesters: [
        {
          semester: 'Semester 1',
          courses: [
            'MATH 365: Differential Equations II',
            'MATH 379: Numerical Analysis II',
            'STAT 361: Statistical Computing and Data Analysis I',
            'STAT 363: Demographic Statistics',
            'STAT 365: Sample Survey Theory and Methods I',
            'STAT 367: Introduction to Regression Analysis',
            'STAT 369: Stochastic Processes I'
          ]
        },
        {
          semester: 'Semester 2',
          courses: [
            'STAT 362: Statistical Computing and Data Analysis II',
            'MATH 366: Partial Differential Equations',
            'STAT 364: Non-Parametric Statistics',
            'STAT 366: Sample Survey Theory and Methods II',
            'STAT 368: Time Series Analysis I',
            'STAT 370: Stochastic Processes II'
          ]
        }
      ]
    },
    {
      level: 'Level 400',
      semesters: [
        {
          semester: 'Semester 1',
          courses: [
            'STAT 461: Project Report Writing',
            'STAT 463: Introduction to Measure and Probability Theory',
            'STAT 465: Survival Analysis',
            'STAT 467: Design and Analysis of Experiments I',
            'STAT 469: Operations Research I',
            'STAT 471: Applied Time Series Analysis',
            'STAT 473: Further Topics in Regression Analysis',
            'STAT 475: Mathematics of Finance',
            'ACTS 475: Loss Models I',
            'MATH 473: Mathematical Economics I',
            'MGT 471: Principles of Management I'
          ]
        },
        {
          semester: 'Semester 2',
          courses: [
            'STAT 462: Project Report',
            'STAT 464: Introduction to Bayesian Statistics',
            'STAT 466: Multivariate Analysis',
            'STAT 468: Design and Analysis of Experiments II',
            'STAT 470: Operations Research II',
            'STAT 472: Statistical Quality Control',
            'STAT 474: Topics in Biostatistics',
            'STAT 476: Actuarial Statistics II',
            'STAT 478: Financial Accounting',
            'MATH 474: Mathematical Economics II',
            'MGT 472: Principles of Management II'
          ]
        }
      ]
    }
  ];

  const handleLevelSelect = (levelIndex) => {
    setSelectedLevel(levelIndex);
    setSelectedSemester(0); // Default to Semester 1 when a level is selected
  };

  const handleSemesterSelect = (semesterIndex) => {
    setSelectedSemester(semesterIndex);
  };

  // Interpolate animation values for blinking effect
  const blinkColor = blinkAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['blue', 'white']
  });

  // Responsive layout adjustments
  const isMobile = SCREEN_WIDTH < 768;
  const levelBarWidth = isMobile ? '100%' : '30%';
  const flexDirection = isMobile ? 'column' : 'row';

  // Performance optimization: Reduce animation intensity on mobile but keep the blinking effect
  const glassEffectStyle = isMobile 
    ? { 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
      };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text, fontFamily: typography.fontBold }]}>
          BSc Statistics (KNUST) - Course List by Level
        </Text>
        
        <View style={styles.centeredContainer}>
          <Animated.View 
            style={[
              styles.mainContainer, 
              glassEffectStyle,
              { flexDirection },
              {
                shadowColor: blinkColor,
                borderColor: blinkColor,
              }
            ]}
          >
            {/* Blinking light effect around the glass surface - now enabled on mobile too */}
            <Animated.View 
              style={[
                styles.blinkingLight,
                {
                  shadowColor: blinkColor,
                  borderColor: blinkColor,
                }
              ]}
            />
            
            {/* Vertical Level Bar */}
            <View style={[styles.levelBarContainer, { width: levelBarWidth }]}>
              {courseData.map((levelData, levelIndex) => (
                <TouchableOpacity
                  key={levelIndex}
                  style={[
                    styles.levelBarButton,
                    isMobile ? styles.simpleButton : styles.glassButton,
                    { 
                      backgroundColor: selectedLevel === levelIndex ? colors.primary : (isMobile ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'),
                      borderColor: selectedLevel === levelIndex ? colors.primary : (isMobile ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)'),
                      shadowColor: selectedLevel === levelIndex ? colors.primary : 'transparent'
                    }
                  ]}
                  onPress={() => handleLevelSelect(levelIndex)}
                >
                  <Text style={[
                    styles.levelBarButtonText,
                    { 
                      color: selectedLevel === levelIndex ? '#fff' : colors.text,
                      fontFamily: typography.fontBold
                    }
                  ]}>
                    {levelData.level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Semester Selection and Course Display */}
            {selectedLevel !== null && (
              <View style={[styles.detailsContainer, { width: isMobile ? '100%' : '70%' }]}>
                {/* Semester Tabs */}
                <View style={styles.semesterTabsContainer}>
                  {courseData[selectedLevel].semesters.map((semesterData, semesterIndex) => (
                    <TouchableOpacity
                      key={semesterIndex}
                      style={[
                        styles.semesterTab,
                        isMobile ? styles.simpleButton : styles.glassButton,
                        { 
                          backgroundColor: selectedSemester === semesterIndex ? colors.primary : (isMobile ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'),
                          borderColor: selectedSemester === semesterIndex ? colors.primary : (isMobile ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)'),
                          shadowColor: selectedSemester === semesterIndex ? colors.primary : 'transparent'
                        }
                      ]}
                      onPress={() => handleSemesterSelect(semesterIndex)}
                    >
                      <Text style={[
                        styles.semesterTabText,
                        { 
                          color: selectedSemester === semesterIndex ? '#fff' : colors.text,
                          fontFamily: typography.fontBold
                        }
                      ]}>
                        {semesterData.semester}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Course List for Selected Semester */}
                <View style={[styles.courseListContainer, isMobile ? styles.simpleList : styles.glassList]}>
                  {courseData[selectedLevel].semesters[selectedSemester].courses.map((course, courseIndex) => (
                    <Text key={courseIndex} style={[styles.courseItem, { color: colors.text, fontFamily: typography.fontFamily }]}>
                      {course}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </Animated.View>
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
  centeredContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  mainContainer: {
    width: '100%',
    maxWidth: 800,
    borderRadius: 20,
    padding: 20,
    position: 'relative',
  },
  simpleButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  glassButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  glassList: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
  },
  simpleList: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 10,
  },
  blinkingLight: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 22,
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    zIndex: -1,
  },
  levelBarContainer: {
    marginRight: 20,
  },
  levelBarButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
  },
  levelBarButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  semesterTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginLeft: 0,
  },
  semesterTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  semesterTabText: {
    fontSize: 16,
    textAlign: 'center',
  },
  courseItem: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
    textAlign: 'left',
  },
});

export default AcademicScreen;