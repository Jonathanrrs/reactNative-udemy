import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible}>
        <View style={stylesScreen.modalStyle}>
          <View style={stylesScreen.contentModal}>
            <HeaderTitle title="Modal" />
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5  )',
    // width: 100,
    // height: 100,
  },
  contentModal: {
    backgroundColor: 'white',
  },
});
