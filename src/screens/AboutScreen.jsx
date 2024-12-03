import React from 'react';
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>App Name: My To-Do List</Text>
        <Text>Developer: Your Name</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
