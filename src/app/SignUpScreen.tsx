import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Create your account to start tracking your expenses
          </Text>
        </View>
  
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Your email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
  
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
  
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              {agreeToTerms && <Ionicons name="checkmark" size={14} color="#fff" />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              I agree with <Text style={styles.link}>Terms & Conditions</Text>
            </Text>
          </View>
  
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
  
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>
  
          <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
            <Ionicons name="logo-apple" size={20} color="#000" />
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <Text style={styles.googleButtonText}>
              <Ionicons name="logo-google" size={20} color="#EA4335" /> Continue with Google
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Text style={styles.facebookButtonText}>
              <Ionicons name="logo-facebook" size={20} color="#1877F2" /> Continue with Facebook
            </Text>
          </TouchableOpacity>
  
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already registered? <Text style={styles.link}>Log In</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
    },
    header: {
      marginTop: 20,
      marginBottom: 30,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    form: {
      width: '100%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 12,
    },
    inputIcon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      height: 50,
      color: '#333',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkbox: {
      width: 18,
      height: 18,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#6C63FF',
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: '#6C63FF',
    },
    checkboxLabel: {
      fontSize: 14,
      color: '#333',
    },
    link: {
      color: '#6C63FF',
      fontWeight: '500',
    },
    signUpButton: {
      backgroundColor: '#6C63FF',
      borderRadius: 8,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#E0E0E0',
    },
    dividerText: {
      marginHorizontal: 10,
      color: '#666',
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 8,
      marginBottom: 12,
    },
    appleButton: {
      backgroundColor: '#F5F5F5',
    },
    appleButtonText: {
      marginLeft: 8,
      fontWeight: '500',
    },
    googleButton: {
      backgroundColor: '#FFF0F0',
    },
    googleButtonText: {
      color: '#EA4335',
      fontWeight: '500',
    },
    facebookButton: {
      backgroundColor: '#E7F3FF',
    },
    facebookButtonText: {
      color: '#1877F2',
      fontWeight: '500',
    },
    footer: {
      marginTop: 10,
      alignItems: 'center',
    },
    footerText: {
      fontSize: 14,
      color: '#666',
    },
  });
