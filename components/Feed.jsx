import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

export default function Feed({data, title, title2, title3, title4, icon, car}) {

    const tools = [
        {
          id: '123',
          icon: 'bell',
          title: 'Price Alerts',
          type: 'font-awesome-5'
        },
        {
          id: '456',
          icon: 'plane-arrival',
          title: 'Flight Tracker',
          type: 'font-awesome-5'
        },
        {
          id: '789',
          icon: 'bag-carry-on',
          title: 'Measure your bag',
          type: 'material-community'
        },
    
      ]

  return (
    <View>
      <View className="mt-10 ml-2 ">
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row items-center">
          <Text className="text-gray-800">{title2}</Text>
          {!icon ? null : <Icon type="entypo" name="dot-single" />}
          <Text>{title3}</Text>
          {title4 && <Text className="font-semibold flex-1 text-right mr-4 ">{title4}</Text>}
        </View>
      </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="gap-1 mt-5">
          {data?.map((hotel) => (
            <TouchableOpacity key={hotel?.id} className="gap-2 mx-3">
              <Image className={`${car && "bg-gray-200/50"}`} source={{uri: hotel?.image}} style={{width:  290, height: 230, borderRadius: 10}} resizeMode={car && "contain"} />
              <Text className="font-bold w-[290px] text-[16px]">{hotel?.title}</Text>
              <Text className="text-gray-900 w-[290px] text-[12px]">{hotel?.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="mb-8 mt-9 w-full">
          <Text className="font-bold text-lg mb-2 ml-4">Popular tools</Text>
          <Text className="mb-3 ml-4">Make your next trip a breeze</Text>
          {tools?.map((tool) => (
            <TouchableOpacity key={tool?.id} className="flex-row items-center p-4 w-full hover:bg-gray-200">
              <View className="bg-[#FAB606] w-[50px] h-[50px] rounded-[10px] items-center justify-center">
                <Icon solid={true} name={tool?.icon} type={tool?.type} color="gold" size={35}/>
              </View>
              <Text className="font-bold ml-3">{tool?.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  )
}