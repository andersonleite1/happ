import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SalonsMap from './pages/SalonsMap';
import SalonsDetails from './pages/SalonsDetails';

export default function Routers(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="SalonsMap" component={SalonsMap}/>
                <Screen name="SalonsDetails" component={SalonsDetails}/>
            </Navigator>
        </NavigationContainer>
    );
}
