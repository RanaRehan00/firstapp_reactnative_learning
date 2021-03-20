
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App_Home from "./App_Home.js";
import App_1 from './App_1.js';
import App_2 from "./App_2.js";
import App_3 from "./App_3.js";
import App_4 from "./App_4.js";
import App_5 from "./App_5.js";
import SettingScreen from "./SettingScreen.js";
import SettingScreen1 from "./SettingScreen1.js";
import Fontsetting from "./Fontsetting.js";
import Test_screen from "./Test_screen.js";

const AppsStack = createStackNavigator();
// testing
function AppsStackScreen() {
  return (
    <AppsStack.Navigator>
      <AppsStack.Screen name="Home" component={App_Home} />
      <AppsStack.Screen name="App_1" component={App_1} />
      <AppsStack.Screen name="App_2" component={App_2} />
      <AppsStack.Screen name="App_3" component={App_3} />
      <AppsStack.Screen name="App_4" component={App_4} />
      <AppsStack.Screen name="App_5" component={App_5} />
    </AppsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingScreen" component={SettingScreen} />
      <SettingsStack.Screen name="SettingScreen1" component={SettingScreen1} />
      <SettingsStack.Screen name="Fontsetting" component={Fontsetting} />
    </SettingsStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Apps">
      <Tab.Screen name="Test_screen" component={Test_screen} />
        <Tab.Screen name="Apps" component={AppsStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
