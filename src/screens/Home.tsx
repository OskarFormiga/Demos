import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-2xl font-bold text-blue-800">Home Screen</Text>
      <Text className="text-lg text-blue-600 mt-4">Welcome to the Home tab!</Text>
    </View>
  );
}