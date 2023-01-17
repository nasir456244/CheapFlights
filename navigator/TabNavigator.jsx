import React, { Fragment } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FlightsScreen from '../screens/FlightsScreen'
import HotelsScreen from '../screens/HotelsScreen'
import CarsScreen from '../screens/CarsScreens'
import { Icon } from 'react-native-elements';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {

  return (
    <Fragment>
        <Header />
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused }) => {
                    if(route.name === "Flights") {
                        return <Icon style={{width: 55, height: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#ffd633' : '#090a0a', borderRadius: 10}} size={25} color={focused ? 'black' : 'white'} name='plane-departure'  type="font-awesome-5" />
                    }
                    else if(route.name === "Hotels") {
                        return <Icon style={{width: 55, height: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#ffd633' : '#090a0a', borderRadius: 10}} size={25} color={focused ? 'black' : 'white'} name="bed" type="ionicon" />
                        
                    }
                    else if(route.name === "Cars") {
                        return <Icon style={{width: 55, height: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: focused? '#ffd633' : '#090a0a', borderRadius: 10}} size={25} color={focused ? 'black' : 'white'} name="car" type="font-awesome-5" />
                    }
                },
                tabBarShowLabel: false,
                swipeEnabled: true,
                tabBarIconStyle : {width: '100%', height: '100%', },
                tabBarContentContainerStyle: {paddingTop: 20, border: 0 },          
            })}
            >
            <Tab.Screen name="Flights" component={FlightsScreen} />
            <Tab.Screen name="Hotels" component={HotelsScreen} />
            <Tab.Screen name="Cars" component={CarsScreen} />
        </Tab.Navigator>
    </Fragment>
  )
}