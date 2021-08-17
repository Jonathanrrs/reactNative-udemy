import React, {useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

    useEffect(() => {
       console.log('tab1screen effect');
        
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>

            <Text>
            <TouchableIcon iconName="airplane-outline"/>
            <TouchableIcon iconName="battery-full-outline"/>
            <TouchableIcon iconName="archive-outline"/>
            <TouchableIcon iconName="chatbubble-ellipses-outline"/>
            </Text>
        </View>
    )
}
