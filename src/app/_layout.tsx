import { Stack } from "expo-router";

const RootLayout = () => {
    return <Stack>
        <Stack.Screen 
            name="AddExpenseScreen"
            options={{
                headerTitle:"Add Expense"
            }}
         />
         <Stack.Screen 
            name="ExpenseDetailsScreen"
            options={{
                headerTitle:"Expense Details"
            }}
         />
    </Stack>
}

export default RootLayout;