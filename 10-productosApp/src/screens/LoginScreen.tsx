import React, {useContext, useEffect} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';
import {StyleSheet} from 'react-native';
import {useForm} from '../hooks/useForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';

interface Props extends NativeStackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {singIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('Login incorrecto', errorMessage, [
      {text: 'Ok', onPress: removeError},
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const onLogin = () => {
    singIn({correo: email, password});
    /* se oculte el teclado */
    Keyboard.dismiss();
  };

  return (
    <>
      {/* background */}
      <Background />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          {/* keyboard avoid view */}
          <WhiteLogo />

          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            /* para cuando seleccionas el texto cambia el background */
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            /* es cuando le das enter al teclado del movil */
            onSubmitEditing={onLogin}
          />
          <Text style={loginStyles.label}>Contraseña:</Text>
          <TextInput
            placeholder="******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            /* para cuando seleccionas el texto cambia el background */
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            /* es cuando le das enter al teclado del movil */
            onSubmitEditing={onLogin}
            secureTextEntry
          />
          {/* boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* crear nueva cuenta */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              /* replace destruye la pantalla anterior */
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.buttonText}>Nueva cuenta </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
});
