import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import FlightDetailsScreen from '../screens/FlightDetailsScreen'
import ModalScreen from '../screens/ModalScreen'
import CalenderScreen from '../screens/CalenderScreen'
import AllFlightsScreen from '../screens/AllFlightsScreen'
import HotelDetailsScreen from '../screens/HotelDetailsScreen'
import CarDetailsScreen from '../screens/CarDetailsScreen'
import AllHotelsScreen from '../screens/AllHotelsScreen'

export default function RootNavigator() {

    const RootStack = createNativeStackNavigator()
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Group>
            <RootStack.Screen name='Main' component={TabNavigator} />
            <RootStack.Screen name="FlightDetailsScreen" component={FlightDetailsScreen} />
            <RootStack.Screen name="HotelDetailsScreen" component={HotelDetailsScreen} />
            <RootStack.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal'}} >
            <RootStack.Screen name="ModalScreen" component={ModalScreen} />
            <RootStack.Screen name="CalenderScreen" component={CalenderScreen} />
        </RootStack.Group>
        <RootStack.Group >
        <RootStack.Screen name="AllHotelsScreen" component={AllHotelsScreen} />
            <RootStack.Screen name="AllFlightsScreen" component={AllFlightsScreen} /> 
        </RootStack.Group>
    </RootStack.Navigator>
  )
}