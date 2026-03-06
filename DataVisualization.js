import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Line, Circle, Path } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DataVisualization = ({ width = 300, height = 200, isDarkMode }) => {
  const strokeColor = isDarkMode ? '#ffffff' : '#1f2937';
  const fillColor = isDarkMode ? '#374151' : '#f9fafb';
  
  // Responsive sizing
  const isMobile = SCREEN_WIDTH < 768;
  const chartWidth = isMobile ? SCREEN_WIDTH * 0.8 : width;
  const chartHeight = isMobile ? 150 : height;
  
  // Sample data points for a line chart - adjusted for proper scaling
  const dataPoints = [
    { x: 30, y: 130 },
    { x: 70, y: 110 },
    { x: 110, y: 125 },
    { x: 150, y: 90 },
    { x: 190, y: 70 },
    { x: 230, y: 80 },
    { x: 270, y: 50 },
  ];

  // Create line path with proper scaling
  const createLinePath = () => {
    if (dataPoints.length === 0) return '';
    let path = `M ${dataPoints[0].x},${dataPoints[0].y}`;
    for (let i = 1; i < dataPoints.length; i++) {
      path += ` L ${dataPoints[i].x},${dataPoints[i].y}`;
    }
    return path;
  };

  // Further optimize by reducing the number of data points on mobile
  const optimizedDataPoints = isMobile ? dataPoints.filter((_, index) => index % 2 === 0) : dataPoints;

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {/* Grid lines */}
        <Line x1="20" y1="20" x2="20" y2={chartHeight - 20} stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
        <Line x1="20" y1={chartHeight - 20} x2={chartWidth - 20} y2={chartHeight - 20} stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
        
        {/* Data line - properly constrained within chart boundaries */}
        <Path d={createLinePath()} fill="none" stroke="#2563eb" strokeWidth="2" />
        
        {/* Data points - properly positioned within chart boundaries */}
        {optimizedDataPoints.map((point, index) => (
          <Circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#2563eb"
            stroke={fillColor}
            strokeWidth="2"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default DataVisualization;