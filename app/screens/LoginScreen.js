import React from 'react';
import { Image, StyleSheet } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.continer}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
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
