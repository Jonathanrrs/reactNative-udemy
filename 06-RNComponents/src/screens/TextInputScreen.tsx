import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {isSubscribed, form, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            /* aqui debemos indicarle el campo porque no hay etiqueta name en rn */
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            /* aqui debemos indicarle el campo porque no hay etiqueta name en rn */
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
          />

          <CustomSwitch
            isOn={isSubscribed}
            onChange={value => onChange(value, 'isSubscribed')}
          />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su telefono"
            /* aqui debemos indicarle el campo porque no hay etiqueta name en rn */
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="numeric"
          />
        </View>
        <View style={stylesScreen.heightView} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
    color: 'black',
  },
  heightView: {
    height: 100,
  },
});
