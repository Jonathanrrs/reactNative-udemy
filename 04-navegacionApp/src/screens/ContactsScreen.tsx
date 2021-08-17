import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {


    const { signIn, authState } = useContext(AuthContext)


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {
                authState.isLoggedIn == false && (
                    <Button
                        title="SignIn"
                        onPress={signIn}
                    />
                )
            }

        </View>
    )
}
