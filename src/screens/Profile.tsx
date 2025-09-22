import React from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 justify-center items-center bg-green-100">
      <Text className="text-2xl font-bold text-green-800">Profile Screen</Text>
      <Text className="text-lg text-green-600 mt-4">This is your profile!</Text>
    </View>
  );
}