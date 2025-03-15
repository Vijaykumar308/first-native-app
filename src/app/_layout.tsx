import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import AddExpenseScreen from "./AddExpenseScreen";
import SignUpScreen from "./SignUpScreen";
import ExpenseDetailsScreen from "./ExpenseDetailsScreen";
import Index from "./Index";
import SplashScreenView from "../components/SplashScreenView";

const Stack = createStackNavigator();

const RootLayout = () => {

    return <>
    <NavigationIndependentTree>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreenView">
                
            <Stack.Screen
                    name="SplashScreenView" 
                    component={SplashScreenView} 
                    options={
                        {
                            headerShown:false
                        }
                    }
                />


                <Stack.Screen
                    name="SignUpScreen" 
                    component={SignUpScreen} 
                    options={
                        {
                            headerTitle:"Sign Up"
                        }
                    }
                />

                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                />

                <Stack.Screen 
                    name="Index" 
                    component={Index} 
                />

                <Stack.Screen 
                    name="AddExpenseScreen" 
                    component={AddExpenseScreen}
                    options={{ title: 'Add Expense' }}
                />

                <Stack.Screen
                name="ExpenseDetailsScreen"
                component={ExpenseDetailsScreen}
                options={{ title: 'Expense Details' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    </NavigationIndependentTree>
    </>
}





// const RootLayout = () => {
//     return <Stack>
//          <Stack.Screen 
//             name="SignUpScreen"
//             options={{
//                 headerTitle:"Sign Up"
//             }}
//          />
//         <Stack.Screen 
//             name="AddExpenseScreen"
//             options={{
//                 headerTitle:"Add Expense"
//             }}
//          />
//          <Stack.Screen 
//             name="ExpenseDetailsScreen"
//             options={{
//                 headerTitle:"Expense Details"
//             }}
//          />
//     </Stack>
// }

export default RootLayout;