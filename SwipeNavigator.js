import React from 'react';
import { View, PanResponder } from 'react-native';

const SwipeNavigator = ({ children, navigation, showBackButton }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      // Handle horizontal swipe
      if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
        // Horizontal swipe detected
        if (gestureState.dx > 50 && showBackButton && navigation.canGoBack()) {
          // Swipe right - go back
          navigation.goBack();
        }
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      // Reset any animations if needed
    },
  });

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {children}
    </View>
  );
};

export default SwipeNavigator;