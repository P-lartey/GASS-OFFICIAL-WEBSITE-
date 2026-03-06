import React, { memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CustomHeader = ({ navigation }) => {
  const { colors, typography, isDarkMode, toggleTheme } = useTheme();

  // Responsive adjustments
  const isMobile = SCREEN_WIDTH < 768;
  const logoSize = isMobile ? 30 : 35;
  const mainTitleSize = isMobile ? 12 : 14;
  const subtitleSize = isMobile ? 9 : 11;
  const logoBackgroundSize = isMobile ? 35 : 45;
  const logoBorderRadius = isMobile ? 17.5 : 22.5;
  const toggleTextSize = isMobile ? 18 : 20;
  const headerPaddingHorizontal = isMobile ? 10 : 15; // Reduced padding on mobile

  return (
    <View style={[styles.header, { backgroundColor: colors.headerBackground, borderBottomColor: colors.borderColor, paddingHorizontal: headerPaddingHorizontal }]}>
      <View style={styles.logoContainer}>
        <View style={[styles.logoBackground, { backgroundColor: isDarkMode ? '#ffffff' : 'transparent', width: logoBackgroundSize, height: logoBackgroundSize, borderRadius: logoBorderRadius }]}>
          <Image 
            source={require('../../assets/Knustlogo.png')} 
            style={[styles.knustLogo, { width: logoSize, height: logoSize }]} 
            resizeMode="contain"
          />
        </View>
        <View style={[styles.logoBackground, { backgroundColor: isDarkMode ? '#ffffff' : 'transparent', width: logoBackgroundSize, height: logoBackgroundSize, borderRadius: logoBorderRadius }]}>
          <Image 
            source={require('../../assets/Gasslogo.png')} 
            style={[styles.gassLogo, { width: logoSize, height: logoSize }]} 
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.mainTitle, { color: colors.text, fontFamily: typography.fontBold, fontSize: mainTitleSize }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Ghana Association of Statistics Students
          </Text>
          <Text style={[styles.subtitle, { color: colors.text, fontFamily: typography.fontFamily, fontSize: subtitleSize }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Kwame Nkrumah University of Science and Technology
          </Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.themeToggle, { padding: 8 }]} onPress={toggleTheme} activeOpacity={0.7}>
        <Text style={[styles.toggleText, { color: colors.primary, fontSize: toggleTextSize }]}>{isDarkMode ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allow logo container to take available space
  },
  logoBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  knustLogo: {
  },
  gassLogo: {
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 5,
    flex: 1, // Allow text container to take available space
  },
  mainTitle: {
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 2,
  },
  themeToggle: {
    padding: 10,
    zIndex: 10, // Ensure button is on top
  },
  toggleText: {
    fontSize: 20,
  },
});

export default memo(CustomHeader);