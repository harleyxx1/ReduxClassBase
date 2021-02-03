import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Authentication } from '../../auth';
import { Posts } from '../../posts';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Authentication" component={Authentication} />
                <Stack.Screen name="Posts" component={Posts} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
