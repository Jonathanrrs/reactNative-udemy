import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCal } from '../components/BotonCal'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        setNumero(numero+numeroTexto)
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

                {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="C" color="#9B9B9B" action={limpiar}/>
                <BotonCal texto="+/-" color="#9B9B9B" action={limpiar}/>
                <BotonCal texto="del" color="#9B9B9B" action={limpiar}/>
                <BotonCal texto="/" color="#FF9427" action={limpiar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="7" action={armarNumero}/>
                <BotonCal texto="8" action={armarNumero}/>
                <BotonCal texto="9" action={armarNumero}/>
                <BotonCal texto="X" color="#FF9427" action={limpiar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="4" action={armarNumero}/>
                <BotonCal texto="5" action={armarNumero}/>
                <BotonCal texto="6" action={armarNumero}/>
                <BotonCal texto="-" color="#FF9427" action={limpiar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="1" action={armarNumero}/>
                <BotonCal texto="2" action={armarNumero}/>
                <BotonCal texto="3" action={armarNumero}/>
                <BotonCal texto="+" color="#FF9427" action={limpiar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="0" ancho action={armarNumero}/>
                <BotonCal texto="." action={armarNumero}/>
                <BotonCal texto="=" color="#FF9427" action={limpiar}/>
            </View>
        </View>
    )
}
