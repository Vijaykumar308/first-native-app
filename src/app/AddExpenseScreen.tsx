import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarModal from '../components/CalendarModal';
import { StackNavigationProp } from '@react-navigation/stack';
import HeaderWithGoBack from '../components/HeaderWithGoBack';

// Define types
type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
};

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

interface AddExpenseScreenProps {
  navigation: AddExpenseScreenNavigationProp;
}

const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const AddExpenseScreen = ({ navigation }:any) => {
  const [amount, setAmount] = useState<string>('100');
  const [description, setDescription] = useState<string>('Lunch with colleagues');
  const [category, setCategory] = useState<string>('Food');
  const [date, setDate] = useState<Date>(new Date(getFormattedDate(new Date())));

  
  // Modal states
  const [categoryModalVisible, setCategoryModalVisible] = useState<boolean>(false);
  const [datePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  
  // Category options
  const categories: CategoryItem[] = [
    { id: '1', name: 'Food', icon: 'fast-food' },
    { id: '2', name: 'Transport', icon: 'car' },
    { id: '3', name: 'Shopping', icon: 'cart' },
    { id: '4', name: 'Bills', icon: 'document-text' },
    { id: '5', name: 'Entertainment', icon: 'film' },
    { id: '6', name: 'Health', icon: 'medical' },
    { id: '7', name: 'Education', icon: 'school' },
    { id: '8', name: 'Other', icon: 'ellipsis-horizontal' },
  ];
  
  // Format date for display
  const formatDate = (date: Date): string => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };
  
  // Handle date selection
  const handleDateSelect = (selectedDate: Date): void => {
    setDate(selectedDate);
  };
  
  // Render category item
  const renderCategoryItem = ({ item }: { item: CategoryItem }): React.ReactElement => (
    <TouchableOpacity 
      style={styles.categoryItem} 
      onPress={() => {
        setCategory(item.name);
        setCategoryModalVisible(false);
      }}
    >
      <View style={styles.categoryIcon}>
        <Ionicons name={item.icon as any} size={20} color="#6B77F8" />
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  // Get current category icon
  const getCategoryIcon = (): string => {
    const currentCategory = categories.find(cat => cat.name === category);
    return currentCategory ? currentCategory.icon : 'help-circle';
  };
  
  // Handle save action
  const handleSave = (): void => {
    const expenseData = {
      amount: parseFloat(amount),
      description,
      category,
      date
    };
    
    console.log('Saving expense:', expenseData);
    // Here you would typically save the data to your state management or API
    // navigation.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        {/* <HeaderWithGoBack title="Add Expense" /> */}
        {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity> */}
        {/* <Text style={styles.headerTitle}>Add Expense</Text> */}
        {/* <TouchableOpacity style={styles.exitButton}>
          <Ionicons name="exit-outline" size={24} color="#6B77F8" />
        </TouchableOpacity> */}
      </View>
      
      {/* Expense Form */}
      <View style={styles.form}>
        {/* Amount */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="0.00"
            testID="amount-input"
          />
        </View>
        
        {/* Description */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="What was this expense for?"
            testID="description-input"
          />
        </View>
        
        {/* Category and Date */}
        <View style={styles.formRow}>
          {/* Category Selector */}
          <View style={[styles.formGroup, styles.halfWidth]}>
            <Text style={styles.label}>Category</Text>
            <TouchableOpacity 
              style={styles.pickerButton}
              onPress={() => setCategoryModalVisible(true)}
              testID="category-picker"
            >
              <Ionicons name={getCategoryIcon() as any} size={20} color="#6B77F8" style={styles.pickerIcon} />
              <Text style={styles.pickerText}>{category}</Text>
            </TouchableOpacity>
          </View>
          
          {/* Date Picker */}
          <View style={[styles.formGroup, styles.halfWidth]}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity 
              style={styles.pickerButton}
              onPress={() => setDatePickerVisible(true)}
              testID="date-picker"
            >
              <Ionicons name="calendar" size={20} color="#6B77F8" style={styles.pickerIcon} />
              <Text style={styles.pickerText}>{formatDate(date)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Save Button */}
      <TouchableOpacity 
        style={styles.saveButton}
        onPress={handleSave}
        testID="save-button"
      >
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      
      {/* Category Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setCategoryModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Select Category</Text>
                  <TouchableOpacity onPress={() => setCategoryModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#000000" />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={categories}
                  renderItem={renderCategoryItem}
                  keyExtractor={item => item.id}
                  style={styles.categoryList}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      {/* Custom Calendar Date Picker */}
      <CalendarModal
        visible={datePickerVisible}
        onClose={() => setDatePickerVisible(false)}
        onSelectDate={handleDateSelect}
        selectedDate={date}
      />
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  exitButton: {
    padding: 8,
    display:"flex",
    justifyContent:"flex-end"
  },
  form: {
    paddingHorizontal: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1F2937',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1F2937',
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  pickerIcon: {
    marginRight: 8,
  },
  pickerText: {
    fontSize: 16,
    color: '#1F2937',
  },
  saveButton: {
    backgroundColor: '#6B77F8',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingBottom: 30,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  categoryList: {
    marginTop: 8,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  categoryName: {
    fontSize: 16,
    color: '#1F2937',
  },
  // Calendar styles
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  monthYearText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  weekdayLabels: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekdayText: {
    flex: 1,
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%', // 7 days per week
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  currentMonthDay: {
    // Default styling
  },
  otherMonthDay: {
    opacity: 0,
  },
  selectedDay: {
    backgroundColor: '#6B77F8',
    borderRadius: 20,
  },
  todayDay: {
    borderWidth: 1,
    borderColor: '#6B77F8',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    color: '#1F2937',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  todayDayText: {
    color: '#6B77F8',
    fontWeight: '600',
  },
  futureDay: {
    opacity: 0.4,
  },
  futureDayText: {
    color: '#9CA3AF',
  },
});

export default AddExpenseScreen;