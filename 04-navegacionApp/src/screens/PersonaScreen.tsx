import { StackScreenProps } from '@react-navigation/stack'
import React, {useEffect} from 'react'
import { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'


// interface RouterParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    const {changeUsername} = useContext(AuthContext)
    
    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
       changeUsername(params.name)
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params,null,3)
                }
            </Text>
        </View>
    )
}
