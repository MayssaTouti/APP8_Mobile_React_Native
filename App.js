/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import Navigation from './src/navigation';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import React from 'react';

import { StyleSheet } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="setting" component={Settings} />
    </Drawer.Navigator>


  )
}


const App = () => {

  return (
    <SafeAreaView style={style.root}>
      <Navigation />

    </SafeAreaView>
    // <NavigationContainer>
    //   <MyDrawer />

    // </NavigationContainer>
  );


};
const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }

});


export default App;
