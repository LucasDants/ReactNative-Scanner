import React from 'react'

import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Scanner } from '../screens/Scanner'
import { QRList } from '../screens/QRList'
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'styled-components'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    const { colors } = useTheme()

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.red[800],
                tabBarInactiveTintColor: colors.white,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: colors.gray[600]
                },
                unmountOnBlur: true
            }}
        >
            <Screen name="scanner" component={Scanner} options={{tabBarIcon: ({ color }) => <MaterialIcon name="qr-code-scanner" size={24} color={color} />}} />
            <Screen name="qrlist" component={QRList} options={{tabBarIcon: ({ color }) => <MaterialIcon name="list" size={24} color={color} />}}/>
        </Navigator>
    )
}