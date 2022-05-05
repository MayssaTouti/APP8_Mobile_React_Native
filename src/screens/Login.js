import { StatusBar } from 'react-native';
import React, { useState } from "react";
import {  ScrollView } from "react-native";
import MyTextInput from './MyTextInput';
import {
    StyledContainer,
    InnerContainer,
    StyledTextInput,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    Colors,
    StyledInputLabel,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent

} from  "../components/Style"; 


//icons 

import { Formik} from 'formik'; 
import { Ionicons} from "react-native-vector-icons"; 

//colors 

//color 
const { brand, darkLight, primary } = Colors;
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);




    return (
        <ScrollView>
            <StyledContainer>
                <StatusBar barStyle="dark" />
                <InnerContainer>
                    <PageLogo  />
                    <PageTitle>Wedo Consult </PageTitle>
                    <SubTitle> Account Login </SubTitle>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }} >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    placeholder="mayssatouti.55@gmail.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    icon="mail"
                                    keyboardType="email-address"
                                />
                                <MyTextInput
                                    label="Password"
                                    placeholder="* * * * * * * *"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    icon="lock"
                                    secureTextEntry={hidePassword}
                             isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox>..  </MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Login
                                    </ButtonText>
                                </StyledButton>
                                <Line />
                                <StyledButton onPress={handleSubmit} google={true}>
                                  
                                    <ButtonText>  Sign in with Google  </ButtonText>
                                </StyledButton>
                                <ExtraView>
                                   
                                </ExtraView>
                            </StyledFormArea>

                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </ScrollView>
    );
};


export default Login; 