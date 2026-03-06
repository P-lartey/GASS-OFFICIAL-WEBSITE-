import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// Import the slideshow images
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide6 from '../../assets/slide6.jpg';
import slide9 from '../../assets/slide9.jpg';
import slide11 from '../../assets/slide11.jpg';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ImageCarousel = () => {
  const { colors, typography } = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow images array
  const slides = [
    { source: slide1, title: 'Welcome to GASS KNUST' },
    { source: slide2, title: 'Welcome to GASS KNUST' },
    { source: slide6, title: 'Welcome to GASS KNUST' },
    { source: slide9, title: 'Welcome to GASS KNUST' },
    { source: slide11, title: 'Welcome to GASS KNUST' },
  ];

  // Optimize image loading by preloading
  useEffect(() => {
    // Preload images for better performance
    const imagePromises = slides.map(slide => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = slide.source;
      });
    });

    Promise.all(imagePromises).catch(console.error);
  }, []);

  // Change slide every 4 seconds with scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate to next slide
      Animated.timing(scrollX, {
        toValue: -(currentIndex + 1) * SCREEN_WIDTH,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        // Update current index after animation
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
        // Reset scroll position for seamless loop
        scrollX.setValue(-nextIndex * SCREEN_WIDTH);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length, scrollX]);

  // Initialize scroll position
  useEffect(() => {
    scrollX.setValue(-currentIndex * SCREEN_WIDTH);
  }, []);

  // Responsive height adjustments
  const isMobile = SCREEN_WIDTH < 768;
  const carouselHeight = isMobile ? SCREEN_HEIGHT * 0.3 : SCREEN_HEIGHT * 0.4; // Increased height for better visibility
  const titleFontSize = isMobile ? 18 : 24;
  const subtitleFontSize = isMobile ? 14 : 18;

  return (
    <View style={styles.container}>
      <View style={[styles.carouselContainer, { height: carouselHeight }]}>
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX: scrollX }],
              width: SCREEN_WIDTH * slides.length,
            },
          ]}
        >
          {slides.map((slide, index) => (
            <View key={index} style={[styles.slideContainer, { width: SCREEN_WIDTH }]}>
              <ImageBackground 
                source={slide.source} 
                style={[styles.carouselImage, { height: carouselHeight }]}
                resizeMode="cover"
                // Optimize image loading
                loading="lazy"
                fadeDuration={300}
              >
                <View style={styles.overlay}>
                  <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: 'white', fontFamily: typography.fontBold, fontSize: titleFontSize }]}>
                      {slide.title}
                    </Text>
                    <Text style={[styles.subtitle, { color: 'white', fontFamily: typography.fontFamily, fontSize: subtitleFontSize }]}>
                      Ghana Association of Statistics Students
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  slider: {
    flexDirection: 'row',
  },
  slideContainer: {
    width: SCREEN_WIDTH,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ImageCarousel;