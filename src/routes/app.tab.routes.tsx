import React from 'react'

import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Scanner } from '../screens/Scanner'
import { QRList } from '../screens/QRList'
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor:'black',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >
            <Screen name="scanner" component={Scanner} options={{tabBarIcon: ({ color }) => <MaterialIcon name="qr-code-scanner" size={24} color={color} />}} />
            <Screen name="qrlist" component={QRList} options={{tabBarIcon: ({ color }) => <MaterialIcon name="list" size={24} color={color} />}}/>
        </Navigator>
    )
}