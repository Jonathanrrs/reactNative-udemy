import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCal } from '../components/BotonCal'
import { styles } from '../theme/appTheme'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {

        /* No aceptar doble punto */
        if(numero.includes('.') &&  numeroTexto === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')) {

            /* punto decimal */
            if(numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                /* Evaluar si es otro cero, y hay un punto */
            } else if(numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero+numeroTexto);

                /* evaluar si es diferente de 0 y no tiene un punto */
            } else if(numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                /* evitar 0.00000 */
            } else if(numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero+numeroTexto);
            }

        } else {
            setNumero(numero+numeroTexto);
        }

    }

    
    const positivoNegativo = () => {
        if(numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {
       let negativo = '';
       let numeroTemp = numero;
       if(numero.includes('-')) {
           negativo = '-';
           numeroTemp = numero.substr(1);
       }
       if(numeroTemp.length > 1) {
           setNumero(negativo + numeroTemp.slice(0, -1));
       } else {
           setNumero('0');
       }
    }

    const cambiarNumPorAnterior = () => {
        if(numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

                {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="C" color="#9B9B9B" action={limpiar}/>
                <BotonCal texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
                <BotonCal texto="del" color="#9B9B9B" action={btnDelete}/>
                <BotonCal texto="/" color="#FF9427" action={btnDividir}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="7" action={armarNumero}/>
                <BotonCal texto="8" action={armarNumero}/>
                <BotonCal texto="9" action={armarNumero}/>
                <BotonCal texto="X" color="#FF9427" action={btnMultiplicar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="4" action={armarNumero}/>
                <BotonCal texto="5" action={armarNumero}/>
                <BotonCal texto="6" action={armarNumero}/>
                <BotonCal texto="-" color="#FF9427" action={btnRestar}/>
            </View>
             {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCal texto="1" action={armarNumero}/>
                <BotonCal texto="2" action={armarNumero}/>
                <BotonCal texto="3" action={armarNumero}/>
                <BotonCal texto="+" color="#FF9427" action={btnSumar}/>
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
