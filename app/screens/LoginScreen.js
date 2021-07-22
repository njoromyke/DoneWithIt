import React, {  useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/Auth';
import Screen from '../components/Screen';
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from '../components/forms';
import useAuth from '../auth/useAuth';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const auth = useAuth();
  const [loginFail, setLoginFail] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFail(true);
    setLoginFail(false);
    auth.login(result.data);
  };
  return (
    <Screen style={styles.continer}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <ErrorMessage
          error='Invalid email and/or password.'
          visible={loginFail}
        />
        <AppFormField
          name='email'
          icon='email'
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalise='none'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          name='password'
          autoCapitalise='none'
          autoCorrect={false}
          icon='lock'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  continer: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
