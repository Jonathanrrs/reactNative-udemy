import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl'; /* ? para que sea opcional */
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
    return (
        <View
            style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
            ]}
        >
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
