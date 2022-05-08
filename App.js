import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplaceScreen from './src/componets/SplaceScreen';
import LoginScreen from './src/componets/LoginScreen';
import OtpScreen from "./src/componets/OtpScreen";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splace">
          <Stack.Screen
              name="Splace"
              component={SplaceScreen}
              options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
