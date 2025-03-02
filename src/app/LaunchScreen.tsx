import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react'

const {width, height} = Dimensions.get('window');

const LaunchScreen = ({  }) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View>
            <Image 
                source={require("../assets/app_logo.png")} 
            />
        </View>
        <Text style={styles.title}>Expense Tracker</Text>
        <Text style={styles.subtitle}>
          Explore features to manage your expenses effectively.
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.signUpButton}
        //   onPress={() => navigation?.navigate('SignUp')}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.logInButton}
        //   onPress={() => navigation?.navigate('Login')}
        >
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
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

export default LaunchScreen