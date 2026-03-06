import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_600SemiBold,
        });
        setFontsLoaded(true);
      } catch (error) {
        console.log('Error loading fonts:', error);
        // Set fonts as loaded even if there's an error to prevent infinite loading
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    try {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.log('Error saving theme to localStorage:', error);
    }
  }, [isDarkMode]);

  const colors = {
    primary: '#2563eb',
    secondary: '#1e40af',
    background: isDarkMode ? '#1f2937' : '#ffffff',
    text: isDarkMode ? '#ffffff' : '#1f2937',
    cardBackground: isDarkMode ? '#374151' : '#f9fafb',
    borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
    headerBackground: isDarkMode ? '#111827' : '#ffffff',
    footerBackground: isDarkMode ? '#111827' : '#1f2937',
  };

  const theme = {
    isDarkMode,
    fontsLoaded,
    toggleTheme,
    colors,
    typography: {
      fontFamily: 'Poppins_400Regular',
      fontBold: 'Poppins_600SemiBold',
      fontSize: {
        small: 12,
        medium: 16,
        large: 20,
        xlarge: 24,
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};