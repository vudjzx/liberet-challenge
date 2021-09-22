import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import AppProvider from './context/AppProvider';
const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>

    </AppProvider>
  );
};

export default App;
