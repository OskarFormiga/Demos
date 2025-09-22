import React from 'react';
import { View, Text } from 'react-native';

export default function Settings() {
  return (
    <View className="flex-1 justify-center items-center bg-red-100">
      <Text className="text-2xl font-bold text-red-800">Settings Screen</Text>
      <Text className="text-lg text-red-600 mt-4">Adjust your settings here!</Text>
    </View>
  );
}