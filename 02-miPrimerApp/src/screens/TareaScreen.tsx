import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.containter}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
        </View>
    )
}

/* Ejercicio 1 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6'
//     },
//     cajaNaranja: {
//         width: 100,
//         // height: 600,
//         flex: 1,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B'
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9'
//     },
// });

/* Ejercicio 2 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'center',
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6'
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B'
//     },
//     cajaAzul: {
//         width: '100%',
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9'
//     },
// });

/* Ejercicio 3 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'center',
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         alignSelf: 'flex-end'
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B'
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         alignSelf: 'center'
//     },
// });

/* Ejercicio 4 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'space-between'
        
//     },
//     cajaMorada: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         alignSelf: 'flex-end'
//     },
//     cajaNaranja: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         alignSelf: 'center'
//     },
//     cajaAzul: {
//         width: 100,
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
        
//     },
// })

/* Ejercicio 5 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
        
//     },
//     cajaMorada: {
//         width: 100,
//         height: '100%',
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//     },
//     cajaNaranja: {
//         width: 100,
//         height: '100%',
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//     },
//     cajaAzul: {
//         width: 100,
//         height: '100%',
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
        
//     },
// })

/* Ejercicio 6 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//     },
//     cajaMorada: {
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         flex: 2
//     },
//     cajaNaranja: {
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         flex: 2
//     },
//     cajaAzul: {
//         height: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//         flex: 4
        
//     },
// })

/* Ejercicio 7 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
       
//     },
//     cajaNaranja: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
       
//     },
//     cajaAzul: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//     },
// })

/* Ejercicio 8 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
       
//     },
//     cajaNaranja: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         left: 100
//     },
//     cajaAzul: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//     },
// })

/* Ejercicio 9 */

// const styles = StyleSheet.create({
//     containter: {
//         backgroundColor: '#28425B',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cajaMorada: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#5856D6',
//         bottom: -100
//     },
//     cajaNaranja: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#F0A23B',
//         left: 100
//     },
//     cajaAzul: {
//         height: 100,
//         width: 100,
//         borderWidth: 10,
//         borderColor: 'white',
//         backgroundColor: '#28C4D9',
//     },
// })

/* Ejercicio 10 */

const styles = StyleSheet.create({
    containter: {
        backgroundColor: '#28425B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    cajaMorada: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        
    },
    cajaNaranja: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50
    },
    cajaAzul: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
})