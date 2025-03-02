import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Transaction {
  id: string;
  time: string;
  description: string;
  amount: number;
}

interface Category {
  id: string;
  name: string;
  amount: number;
}

const ExpenseDetailsScreen: React.FC = () => {
  // Sample data based on the screenshot
  const totalExpense = 280.50;
  const percentChange = -9.8;
  
  const categories: Category[] = [
    { id: '1', name: 'Food', amount: 50.00 },
    { id: '2', name: 'Transport', amount: 30.00 },
    { id: '3', name: 'Entertainment', amount: 20.00 },
    { id: '4', name: 'Shopping', amount: 15.00 },
    { id: '5', name: 'Bills', amount: 100.00 },
  ];
  
  const transactions: Transaction[] = [
    { id: '1', time: '9:30 AM', description: 'Breakfast', amount: -20.00 },
    { id: '2', time: '11:00 AM', description: 'Haircut', amount: -50.00 },
    { id: '3', time: '1:00 PM', description: 'Lunch with Friends', amount: -30.00 },
    { id: '4', time: '4:30 PM', description: 'Groceries', amount: -60.00 },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Expense Details</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.summaryContainer}>
          <Text style={styles.totalAmount}>${totalExpense.toFixed(2)}</Text>
          <Text style={styles.totalLabel}>Total Daily Expenses</Text>
          
          <Text style={[styles.percentChange, { color: percentChange < 0 ? '#e74c3c' : '#2ecc71' }]}>
            {percentChange}%
          </Text>
          <Text style={styles.comparisonText}>from yesterday</Text>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryAmount}>${category.amount.toFixed(2)}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Transactions</Text>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <Text style={styles.transactionTime}>{transaction.time} - {transaction.description}</Text>
              <Text style={styles.transactionAmount}>${transaction.amount.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerTab}>
          <Ionicons name="home" size={24} color="#7e57c2" />
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerTab}>
          <Ionicons name="settings" size={24} color="#888" />
          <Text style={styles.footerTabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  summaryContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  totalLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  percentChange: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  comparisonText: {
    fontSize: 14,
    color: '#888',
  },
  sectionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  categoryName: {
    fontSize: 16,
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  transactionTime: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e74c3c',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  footerTab: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  footerTabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#888',
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7e57c2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 16,
  },
});

export default ExpenseDetailsScreen;