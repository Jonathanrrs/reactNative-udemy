import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Página1Screen</Text>
            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'Jonathan'
                    })}

                >
                    <Text style={styles.botonGrandeTexto}>Jonathan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        name: 'iliana'
                    })}

                >
                    <Text style={styles.botonGrandeTexto}>Iliana</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
