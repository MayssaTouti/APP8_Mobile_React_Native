import React from 'react'; 
import Login from '../screens/Login'; 
import SearchComponent from '../testFetch/SearchComponent'; 
//importation des screens 


import Home from '../screens/Home'; 
import Settings from "../screens/Settings"; 
import ForgetPassword from '../screens/ForgetPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import ServerExample from '../ServerExample'
import HomeScreens from '../screens/HomeScreen/index'; 
import Welcome from '../screens/Welcome';
import Profile from '../screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//import OnboardingScreen from 

const Stack = createNativeStackNavigator();


const Navigation = () => {
   
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} title="Fetch example" initialRouteName="profile"  >
              <Stack.Screen name="ForgetPass" component={ForgetPassword} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} /> 
              <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 
              <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="Onbording" component={OnboardingScreen} /> 
        <Stack.Screen name="accueil" component={HomeScreens} />
        <Stack.Screen name="server" component={ServerExample} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmSignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="serach"  component={SearchComponent} />
        <Stack.Screen name="profile" component={Profile} />
     

      </Stack.Navigator>
    </NavigationContainer>
  ); 
}; 

export default Navigation; 
