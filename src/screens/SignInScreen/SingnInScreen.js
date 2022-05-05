import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import SocialSignInButton from '../../components/SocialSignInButton';
const SingnInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation(); 


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSignUpPressed = () => {
        console.warn('onSignUpPressed'); 
        
        navigation.navigate('SignUp'); 
    }; 


    const onSignInPressed = () => {
        console.warn(" Sign In "); 
        // validate user
        navigation.navigate('Home'); 
    }; 
    const onForgetPassword = () => {
        console.warn('onForgetPassword'); 
        navigation.navigate("ForgetPass"); 
    }; 

    return (
    <ScrollView>
        <View>
               
           
            <CustomInput
                value={username}
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                setValue={setUsername}
                placeholder="Username" />
            <CustomInput
                placeholder="password"
                value={password}
                setValue={setPassword}
                iconType="lock" 
                secureTextEntry={true}

            />
            <CustomButton
             text="Sign In"
             onPress={onSignInPressed} />

            <CustomButton
             text="Forget Password?" 
             bgColor="#E7EAF4"
             onPress={onForgetPassword} 
             type="TERTIARY"
            />
    <SocialSignInButton />
          <CustomButton 
          text="Dont have an account? create "
          onPress={onSignUpPressed}
          type="TERTIARY" />
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        paddingLeft: 150,
        maxWidth: 500,
        height: 300,

    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#051C60', 
        margin:10 , 
    }
});
export default SingnInScreen;


