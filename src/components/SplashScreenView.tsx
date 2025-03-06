import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'

const {width, height} = Dimensions.get('window');
const SplashScreenView = ({navigation}:any) => {

    useEffect(() => {
        // Set a timeout for 3 seconds, after which the app will navigate to the main screen
        const timer = setTimeout(() => {
          navigation.replace('Home'); // Navigate to HomeScreen after the splash screen
        }, 1000); // 3000 ms = 3 seconds
    
        // Clean up the timeout on component unmount
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image 
                source={require("../assets/app_logo.png")} 
            />
            <Text style={styles.appTitle}>Welcome to Buget App</Text>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width:width,
      height:height,
      backgroundColor: '#636AE8FF', 
    },
    appTitle:{
        fontSize:26,
        color:"#fff"
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
    },
    logoContainer: {
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      opacity: 0.9,
    },
    buttonContainer: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    signUpButton: {
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingVertical: 15,
      alignItems: 'center',
      marginBottom: 12,
    },
    signUpText: {
      color: '#6366F1',
      fontSize: 16,
      fontWeight: '600',
    },
    logInButton: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      paddingVertical: 15,
      alignItems: 'center',
    },
    logInText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default SplashScreenView