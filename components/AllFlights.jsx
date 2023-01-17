import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { UseFlights } from '../hooks/UseFlights'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/flightSlice'

export default function AllFlights() {
    const navigation = useNavigation()
    const { isLoading, data } = UseFlights()
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

  return (
    <View className="h-full ">
      <View className=" flex-row justify-between p-3 mb-5 items-center ">
        <Icon name='chevron-back-outline' type='ionicon' size={30} onPress={() => navigation.navigate("Main")} />
        <View className="flex-row gap-2 items-center">
            <Text className="font-bold">{origin?.iata}</Text>
            <Icon name="dash" type='octicon' />
            <Text className="font-bold">{destination?.iata}</Text>
        </View>

        <View className="flex-row gap-7 items-center">
        <Icon name="bell" type="font-awesome-5" />

        <Icon name="dots-three-horizontal" type="entypo" />
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}} 
        className="bg-gray-200 gap-3">
        
        {isLoading ? 
            <Text>Loading</Text>
        
        :
            
        data?.map((flight, index) => (       
        <TouchableOpacity key={flight?.id + "" + index}
            className="bg-white w-fit h-fit pb-3 shadow-lg rounded-[20px] px-2 justify-between">
            <View className="flex-row gap-3 mt-4 ">
                <View className="my-5 items-center justify-between">
                    {flight?.legs?.map((image, index) => (
                           
                        <Image
                            key={image?.segments[0]?.id + "" + index} 
                            source={{
                                uri: `https://daisycon.io/images/airline/?width=300&height=150&iata=${image?.segments[0]?.operatingCarrier?.alternate_di}`
                            }} 
                            style={{width: 80, height: 40}}     
                        />

                    ))}
                </View>
                <View className="">
                    {flight?.legs?.map((leg, index) => (
                        <View key={leg?.id + "" + index} >
                            <View className="flex-row items-center justify-center">
                                <Text className="font-semibold">{moment(leg?.departure).format('LT')}</Text>
                                <View className="w-[100px] h-[2.8px] bg-gray-200" />
                                <Text className="font-semibold">{moment(leg?.arrival).format('LT')}</Text>
                            </View>
                            <View className="flex-row justify-around my-4 ">
                                <Text>{leg.origin?.displayCode}</Text>
                                <Text className="text-gray-500">{Math.floor(leg?.durationInMinutes / 60 ) + 'h'} { leg?.durationInMinutes % 60 + 'min'}</Text>
                                <Text>{leg.destination?.displayCode}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                
                </View>
                <Text className="font-bold text-xl ml-auto">${Math.trunc(flight?.pricing_options[0]?.price?.amount)}</Text>
            <View className="flex-row justify-between items-center border-t-2 border-gray-200">

                <View  className="flex-row justify-center items-center gap-x-1">


                    {flight?.pricing_options?.map((carrier) => {

                        const names = carrier?.agents?.map((item) => item?.name )
                        return carrier?.agents?.filter(({name}, index) => !names?.includes(name, index + 1))?.map((word) => {
                                return <Text className="text-gray-600 px-2 mt-2" key={word?.name + "" + index}>{word?.name}</Text>

                            })
                    })}
                </View>
                <Icon className=" px-2 mt-2" name='hearto' type='antdesign' />
            </View>
            
        </TouchableOpacity> 

        ))}
        



      </ScrollView>
    </View>
  )
}