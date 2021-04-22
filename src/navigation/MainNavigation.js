import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import FeeScreen from '../screens/FeeScreen'
import ProfitScreen from '../screens/ProfitScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fee" component={FeeScreen} />
        <Stack.Screen name="Profit" component={ProfitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation
