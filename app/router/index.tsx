import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import {DadosPessoais} from '../view/DadosPessoais/';
import {AtencaoBasica} from '../view/AtencaoBasica/';

const Stack = createStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="DadosPessoais">
            <Stack.Screen name="DadosPessoais" component={DadosPessoais}/>
            <Stack.Screen name="AtencaoBasica" component={AtencaoBasica} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
