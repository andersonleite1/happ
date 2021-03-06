import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SalonsMap from './pages/SalonsMap';
import SalonsDetails from './pages/SalonsDetails';

import SelectMapPosition from './pages/createSalon/SelectMapPosition';
import SalonData from './pages/createSalon/SalonData';

import Header from './components/Header'

export default function Routers(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }}>
                <Screen 
                    name="SalonsMap"         
                    component={SalonsMap}
                />

                <Screen 
                    name="SalonsDetails"     
                    component={SalonsDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Salão" />
                    }}
                />

                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                />

                <Screen 
                    name="SalonData"         
                    component={SalonData}
                />
            </Navigator>
        </NavigationContainer>
    );
}
