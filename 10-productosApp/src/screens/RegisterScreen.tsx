import React, {useContext, useEffect} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../theme/loginTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';

interface Props extends NativeStackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {singUp, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, name, onChange} = useForm({
    email: '',
    password: '',
    name: '',
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

  const onRegister = () => {
    singUp({correo: email, password, nombre: name});
    /* se oculte el teclado */
    Keyboard.dismiss();
  };
  return (
    <>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          {/* keyboard avoid view */}
          <WhiteLogo />

          <Text style={loginStyles.title}>Register</Text>
          <Text style={loginStyles.label}>Nombre:</Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            /* para cuando seleccionas el texto cambia el background */
            selectionColor="white"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'name')}
            value={name}
            /* es cuando le das enter al teclado del movil */
            onSubmitEditing={onRegister}
          />
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
            onSubmitEditing={onRegister}
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
            onSubmitEditing={onRegister}
            secureTextEntry
          />
          {/* boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}>
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
          {/* crear nueva cuenta */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnBack}
            /* replace destruye la pantalla anterior */
            onPress={() => navigation.replace('LoginScreen')}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#5856d6',
  },
  btnBack: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
