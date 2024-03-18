import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import HomeScreen from "./screens/HomeScreen";
import History from "./components/History";
import Checkout from "./components/Checkout";
import LoginScreen from "./screens/LoginScreen";
import Wallet from "./components/wallet";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false, // Make sure this is not set to false
          headerBackVisible: true,
        }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}