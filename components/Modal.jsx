import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import useAirports from '../hooks/useAirports'
import { SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/flightSlice'

export default function Modal() {
    const navigation = useNavigation()
    const handleChange = useCallback((newFrom) => setFrom(newFrom), []);
    const handleChange2 = useCallback((newTo) => setTo(newTo), []);
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [debouncedFrom , setDebouncedFrom] = useState('')
    const [debouncedTo , setdebouncedTo] = useState('')
    const { data, error, isLoading } = useAirports({debouncedFrom, debouncedTo});
    const dispatch = useDispatch();

    useEffect(() => {
        let timeout = setTimeout(() => setDebouncedFrom(from),500)
        return () => clearTimeout(timeout)
    },[from])

    useEffect(() => {
        let timeout = setTimeout(() => setdebouncedTo(to),500)
        return () => clearTimeout(timeout)
    },[to])

    const handleClick = (airport, type) => {
        if(type === 'from'){
            setFrom(airport?.name)
            setDebouncedFrom('');
            dispatch(setOrigin({name: airport?.name, iata: airport?.iata}))
        }
        else if(type === 'to'){
            setTo(airport?.name)
            setdebouncedTo('');
            dispatch(setDestination({name: airport?.name, iata: airport?.iata}));
        }
    }



  return (
    <SafeAreaView className="relative h-[100%]" contentContainerStyle={{ justifyContent: 'center'}}>
        <Icon className="items-start p-2 " name='close' type='antdesign' size={30} onPress={() => navigation.navigate("FlightDetailsScreen")} />
        <View className="justify-start p-2 gap-1 mt-7 mx-auto items-center">

            <View className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
            <Icon name='plane-departure' type='font-awesome-5' />
                <TextInput value={from} onChangeText={handleChange} placeholder='Brisbane (BNE), QLD, Australia' className="ml-4 text-[14px] flex-1" />
            </View>

            <View className="bg-gray-200 absolute right-0 top-10 z-20 right-3 border-2 border-white rounded-[10px] p-2 w-11 items-center">
                <Icon name='arrows-alt-v' type='font-awesome-5' size={22} />
            </View>

            <View className="bg-gray-200 w-[90%]  p-4 flex-row items-center rounded-[7px] justify-center z-0">
                <Icon type='font-awesome-5' name='plane-arrival' />
                <TextInput value={to} onChangeText={handleChange2} placeholder='Frankfurt am Main (FRA), Germany' className="ml-4 text-[14px] flex-1 z-0" />
            </View>
        </View>

         <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}>
            {data && data?.debouncedFrom && data?.debouncedFrom?.map((airport) => (
                    <TouchableOpacity disabled={airport?.name === to} onPress={() => handleClick(airport, 'from')} key={airport?.iata} className={`p-3 border-b-2 border-gray-200 flex flex-row justify-between w-[88%] mx-auto ${airport?.name === to && "bg-gray-300"}`}>
                    <Icon className="rotate-45" name="plane" type="fontisto" color="#707070" solid={true}/>
                    <Text className="font-semibold w-[80%] text-center">{airport?.name}</Text>
                    <Text className="font-semibold">{airport?.iata}</Text>
                </TouchableOpacity>
            ))}

            {data && data?.debouncedTo && data?.debouncedTo?.map((airport) => (
                    <TouchableOpacity disabled={airport?.name === from} onPress={() => handleClick(airport, 'to')} key={airport?.iata} className={`p-3 border-b-2 border-gray-200 flex flex-row justify-between w-[88%] mx-auto ${airport?.name === to && "bg-gray-300"}`}>
                    <Icon className="rotate-45" name="plane" type="fontisto" color="#707070" solid={true}/>
                    <Text className="font-semibold w-[80%] text-center">{airport?.name}</Text>
                    <Text className="font-semibold">{airport?.iata}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView> 


        <TouchableOpacity onPress={() => {navigation.navigate("FlightDetailsScreen"); setFrom(''); setTo('')}} disabled={!from || !to} className={` w-[80%] ${!from || !to ? 'bg-gray-300' : 'bg-[#FFD700]'} p-5 rounded-[10px] items-center justify-center mx-auto mb-10`}>
            <Text className="font-bold">Select these airports</Text>
        </TouchableOpacity>        
    </SafeAreaView>
  )
}