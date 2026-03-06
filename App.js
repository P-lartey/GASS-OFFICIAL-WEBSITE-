import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ResearchScreen from './src/screens/ResearchScreen';
import CareersScreen from './src/screens/CareersScreen';
import StudentLifeScreen from './src/screens/StudentLifeScreen';
import AlumniScreen from './src/screens/AlumniScreen';
import ContactScreen from './src/screens/ContactScreen';
import AcademicScreen from './src/screens/AcademicScreen';
import ResourcesScreen from './src/screens/ResourcesScreen'; // Added import for ResourcesScreen
import CustomHeader from './src/components/CustomHeader';
import { View, Text, ActivityIndicator } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeMain" 
      component={HomeScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const AboutStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="AboutMain" 
      component={AboutScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const ResearchStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ResearchMain" 
      component={ResearchScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const CareersStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="CareersMain" 
      component={CareersScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const StudentLifeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="StudentLifeMain" 
      component={StudentLifeScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const AlumniStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="AlumniMain" 
      component={AlumniScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const ContactStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ContactMain" 
      component={ContactScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const AcademicStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="AcademicMain" 
      component={AcademicScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

// Added ResourcesStack
const ResourcesStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ResourcesMain" 
      component={ResourcesScreen} 
      options={{ 
        header: (props) => <CustomHeader navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

const AppContent = () => {
  const { fontsLoaded, colors } = useTheme();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarStyle: {
            backgroundColor: colors.headerBackground,
            borderTopColor: colors.borderColor,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{ 
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutStack}
          options={{ 
            tabBarLabel: 'About',
          }}
        />
        <Tab.Screen 
          name="Academic" 
          component={AcademicStack}
          options={{ 
            tabBarLabel: 'Academic',
          }}
        />
        <Tab.Screen 
          name="Resources" 
          component={ResourcesStack}
          options={{ 
            tabBarLabel: 'Resources',
          }}
        />
        <Tab.Screen 
          name="Research" 
          component={ResearchStack}
          options={{ 
            tabBarLabel: 'Research',
          }}
        />
        <Tab.Screen 
          name="Careers" 
          component={CareersStack}
          options={{ 
            tabBarLabel: 'Careers',
          }}
        />
        <Tab.Screen 
          name="StudentLife" 
          component={StudentLifeStack}
          options={{ 
            tabBarLabel: 'Student Life',
          }}
        />
        <Tab.Screen 
          name="Alumni" 
          component={AlumniStack}
          options={{ 
            tabBarLabel: 'Alumni',
          }}
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactStack}
          options={{ 
            tabBarLabel: 'Contact',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};