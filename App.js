import React from 'react';
import {  Text, View,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"

import styles from "./styles.js"



//Defines a navigation flow
const Stack = createStackNavigator();

//imports different screens from files
import Home from "./Home.js";
import EpisodeList from "./EpisodeList.js";
import Contact from "./Contact.js";
import Help from "./Help.js";
import Feed from "./Feed.js"
import NavigationBar from "./NavigationBar.js"



function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Episodes" component={EpisodeList} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}

