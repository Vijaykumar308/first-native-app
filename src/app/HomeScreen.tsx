import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
         
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="exit-outline" size={24} color="#6B77F8" />
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search expenses..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
        
        {/* Expense Summaries */}
        <View style={styles.content}>
          {/* Today's Expenses */}
          <View style={styles.expenseCard}>
            <View style={styles.expenseInfo}>
              <Text style={styles.periodTitle}>Today</Text>
              <Text style={styles.expenseSubtitle}>Daily Expenses: $120</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.expenseImage}
              // In a real app, you would use actual local images or from your assets
            />
          </View>
          
          {/* This Week's Expenses */}
          <View style={styles.expenseCard}>
            <View style={styles.expenseInfo}>
              <Text style={styles.periodTitle}>This Week</Text>
              <Text style={styles.expenseSubtitle}>Weekly Expenses: $850</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.expenseImage}
            />
          </View>
          
          {/* This Month's Expenses */}
          <View style={styles.expenseCard}>
            <View style={styles.expenseInfo}>
              <Text style={styles.periodTitle}>This Month</Text>
              <Text style={styles.expenseSubtitle}>Monthly Expenses: $3200</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.expenseImage}
            />
          </View>
        </View>
        
        {/* Add Expense Button */}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="white" style={styles.addIcon} />
          <Text style={styles.addButtonText}>Add Expense</Text>
        </TouchableOpacity>
        
        {/* Bottom Tab Navigation */}
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="home" size={24} color="#6B77F8" />
            <Text style={[styles.tabLabel, styles.activeTabLabel]}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="add-circle-outline" size={24} color="#9CA3AF" />
            <Text style={styles.tabLabel}>Add Expense</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="settings-outline" size={24} color="#9CA3AF" />
            <Text style={styles.tabLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 10,
      paddingBottom: 15,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
    },
    profileButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F3F4F6',
      borderRadius: 10,
      marginHorizontal: 16,
      paddingHorizontal: 12,
      height: 40,
      marginBottom: 20,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      height: 40,
      color: '#1F2937',
      fontSize: 16,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    expenseCard: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      marginBottom: 16,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    expenseInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    periodTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: 4,
    },
    expenseSubtitle: {
      fontSize: 14,
      color: '#6B7280',
      marginBottom: 12,
    },
    detailsButton: {
      backgroundColor: '#F3F4F6',
      borderRadius: 6,
      paddingVertical: 6,
      paddingHorizontal: 12,
      alignSelf: 'flex-start',
    },
    detailsButtonText: {
      color: '#6B77F8',
      fontSize: 14,
      fontWeight: '500',
    },
    expenseImage: {
      width: 70,
      height: 70,
      borderRadius: 8,
      marginLeft: 12,
    },
    addButton: {
      flexDirection: 'row',
      backgroundColor: '#6B77F8',
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginHorizontal: 16,
      marginBottom: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addIcon: {
      marginRight: 8,
    },
    addButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
    tabBar: {
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#F3F4F6',
      paddingVertical: 10,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabLabel: {
      fontSize: 12,
      marginTop: 4,
      color: '#9CA3AF',
    },
    activeTabLabel: {
      color: '#6B77F8',
      fontWeight: '500',
    },
  });
  
  export default HomeScreen;
