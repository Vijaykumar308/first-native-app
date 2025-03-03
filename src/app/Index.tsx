import { View } from 'react-native'
import React, { useEffect } from 'react';
import LaunchScreen from './LaunchScreen';
import { useNavigation } from 'expo-router';
const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  return (
    <View>
      <LaunchScreen />
    </View>
  )
}


export default Index