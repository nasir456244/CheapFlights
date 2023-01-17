import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { hotels } from '../data/hotels'
import { useNavigation } from '@react-navigation/native'
export default function AllHotels() {

    const navigation = useNavigation()
    
  return (
    <View>
      <View className=" flex-row justify-between p-3 mb-5 items-center ">
        <Icon name='chevron-back-outline' type='ionicon' size={30} onPress={() => navigation.navigate("HotelDetailsScreen")} />
        <View className="flex-row gap-2 items-center">
            <Text className="font-bold">ADL</Text>
            <Icon name="edit" type='entypo' size={18} />
        </View>

        <View className="flex-row gap-7 items-center">
        <Icon name="bell" type="font-awesome-5" />

        <Icon name="dots-three-horizontal" type="entypo" />
        </View>
      </View>

      <ScrollView
    contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}} 
    className="bg-gray-200 gap-3">

        {hotels?.map((hotel, index) => (

            <TouchableOpacity key={hotel?.name + "" + index} className="bg-white w-[90vw] flex-row h-[200px] shadow-xl rounded-[20px] ">
                {hotel?.photo ?
                    <View>
                        <Image 
                        className="rounded-tl-[20px] rounded-bl-[20px] w-[150px] h-[200px]"
                            source={{
                                uri: hotel?.photo?.images?.small?.url
                            }}

                        />

                    </View>
                :
                    <View style={{height: '100%', width: 150}} className="bg-gray-200 w-[150px] h-[200px]" />
                }
                <View className="flex-1 px-1 pb-1">
                    <View className="flex-1 justify-around">
                        <Text className="text-white bg-[#000] font-semibold">{hotel?.subcategory_type_label ? hotel?.subcategory_type_label : hotel?.autobroaden_label}</Text>
                        <Text className="font-bold">{hotel?.name}</Text>
                        {hotel?.rating ? 

                            <View className="flex-row items-center">
                                <Icon name='star' type='entypo' />
                                <Text>{hotel?.rating}</Text>
                            </View>
                        :
                            <View>
                                <Text>Ranking: {hotel?.ranking}</Text>
                            </View>}
                    </View>

                    <View className="flex-1 justify-between items-end flex-row">
                        <Text className="font-bold text-purple-900">{hotel?.price}</Text>
                        <View className="bg-[#FFD700] p-5 rounded-[10px]">
                            <Text className="font-semibold">View deal</Text>
                        </View>
                    </View>



                </View>

            </TouchableOpacity>


        ))}





      </ScrollView>
    </View>
  )
}