import React from 'react'
import { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {


    const { authState, logout } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Album Screen</Text>
            {
                authState.isLoggedIn && (
                    <Button
                        title="Logout"
                        onPress={logout}
                    />
                )
            }
        </View>
    )
}
