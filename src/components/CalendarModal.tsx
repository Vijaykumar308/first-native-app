import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// Simple calendar modal component for date selection
interface CalendarModalProps {
    visible: boolean;
    onClose: () => void;
    onSelectDate: (date: Date) => void;
    selectedDate: Date;
  }
  
  const CalendarModal: React.FC<CalendarModalProps> = ({ visible, onClose, onSelectDate, selectedDate }) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
    
    // Get days in month
    const getDaysInMonth = (year: number, month: number): number => {
      return new Date(year, month + 1, 0).getDate();
    };
    
    // Get day of week for first day of month (0 = Sunday)
    const getFirstDayOfMonth = (year: number, month: number): number => {
      return new Date(year, month, 1).getDay();
    };
    
    // Create calendar days array
    const generateCalendarDays = () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      const daysInMonth = getDaysInMonth(year, month);
      const firstDayOfMonth = getFirstDayOfMonth(year, month);
      
      const days: Array<{date: Date | null, isCurrentMonth: boolean}> = [];
      
      // Add empty days for start of month
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push({date: null, isCurrentMonth: false});
      }
      
      // Add days of current month
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({date: new Date(year, month, i), isCurrentMonth: true});
      }
      
      return days;
    };
    
    // Navigate to previous month
    const goToPreviousMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    
    // Navigate to next month
    const goToNextMonth = () => {
      const today = new Date();
      const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
      
      // Only allow navigating to next month if it's not in the future
      if (nextMonth.getFullYear() < today.getFullYear() || 
          (nextMonth.getFullYear() === today.getFullYear() && nextMonth.getMonth() <= today.getMonth())) {
        setCurrentMonth(nextMonth);
      }
    };
    
    // Format month name
    const formatMonthYear = (date: Date): string => {
      return date.toLocaleString('default', { month: 'long', year: 'numeric' });
    };
    
    // Check if a date is the currently selected date
    const isSelectedDate = (date: Date | null): boolean => {
      if (!date) return false;
      return date.getDate() === selectedDate.getDate() && 
             date.getMonth() === selectedDate.getMonth() && 
             date.getFullYear() === selectedDate.getFullYear();
    };
    
    // Check if a date is today
    const isToday = (date: Date | null): boolean => {
      if (!date) return false;
      const today = new Date();
      return date.getDate() === today.getDate() && 
             date.getMonth() === today.getMonth() && 
             date.getFullYear() === today.getFullYear();
    };
    
    // Check if a date is in the future
    const isFutureDate = (date: Date | null): boolean => {
      if (!date) return false;
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day for proper comparison
      return date.getTime() > today.getTime();
    };
    
    const calendarDays = generateCalendarDays();
    
    // Check if we should disable the next month button
    const isNextMonthDisabled = (): boolean => {
      const today = new Date();
      return currentMonth.getFullYear() === today.getFullYear() && 
             currentMonth.getMonth() === today.getMonth();
    };
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.calendarContainer}>
                <View style={styles.calendarHeader}>
                  <Text style={styles.calendarTitle}>Select Date</Text>
                  <TouchableOpacity onPress={onClose}>
                    <Ionicons name="close" size={24} color="#000000" />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.monthSelector}>
                  <TouchableOpacity onPress={goToPreviousMonth}>
                    <Ionicons name="chevron-back" size={24} color="#6B77F8" />
                  </TouchableOpacity>
                  <Text style={styles.monthYearText}>{formatMonthYear(currentMonth)}</Text>
                  <TouchableOpacity 
                    onPress={goToNextMonth}
                    disabled={isNextMonthDisabled()}
                  >
                    <Ionicons 
                      name="chevron-forward" 
                      size={24} 
                      color={isNextMonthDisabled() ? "#CCCCCC" : "#6B77F8"} 
                    />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.weekdayLabels}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <Text key={index} style={styles.weekdayText}>{day}</Text>
                  ))}
                </View>
                
                <View style={styles.calendarGrid}>
                  {calendarDays.map((day, index) => {
                    const isFuture = isFutureDate(day.date);
                    const isSelected = isSelectedDate(day.date);
                    const isDayToday = isToday(day.date);
                    
                    return (
                      <TouchableOpacity 
                        key={index}
                        style={[
                          styles.calendarDay,
                          day.isCurrentMonth ? styles.currentMonthDay : styles.otherMonthDay,
                          isSelected ? styles.selectedDay : null,
                          isDayToday ? styles.todayDay : null,
                          isFuture ? styles.futureDay : null
                        ]}
                        onPress={() => {
                          if (day.date && !isFuture) {
                            onSelectDate(day.date);
                            onClose();
                          }
                        }}
                        disabled={!day.date || isFuture}
                      >
                        <Text style={[
                          styles.dayText,
                          isSelected ? styles.selectedDayText : null,
                          isDayToday && !isSelected ? styles.todayDayText : null,
                          isFuture ? styles.futureDayText : null
                        ]}>
                          {day.date ? day.date.getDate() : ''}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
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
  monthYearText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
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

  export default CalendarModal;