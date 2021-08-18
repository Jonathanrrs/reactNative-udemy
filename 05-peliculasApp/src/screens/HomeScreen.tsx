import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation}: Props) => {

    // const navigator = useNavigation();


    return (
        <View>
            <Text>Homescreen</Text>

            <Button 
                title="Ir detalle"
                // onPress={() => navigator.dispatch(CommonActions.navigate({name: 'Detail', }))}
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    )
}
