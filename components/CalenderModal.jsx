import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch } from 'react-redux';
import { setFromDate, setToDate } from '../slices/flightSlice';

export default function CalenderModal() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const navigation = useNavigation()
    const dispatch = useDispatch();


    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
          setSelectedEndDate(date);
        } else {
          setSelectedEndDate(null);
          setSelectedStartDate(date);
        }
      };

  return (
    <ScrollView className="px-2">
        <Icon className="items-start p-2" name='close' type='antdesign' size={30} onPress={() => navigation.navigate("FlightDetailsScreen")} />
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date()}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#ffd633"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />

          <View className=" flex-row mt-10 justify-around border-t-2 border-gray-300">

          <Text className="my-auto font-bold ">
            {selectedStartDate ? new Date(selectedStartDate).toLocaleDateString('en',{weekday: 'short', day: 'numeric', month: 'short'}) : ''}
          </Text>
          <View className="h-[80px] w-[2px] my-2 bg-gray-200" />

          <Text className="my-auto font-bold">
          {selectedEndDate ? new Date(selectedEndDate).toLocaleDateString('en',{weekday: 'short', day: 'numeric', month: 'short'}) : ''}
          </Text>
        </View>


        <TouchableOpacity onPress={() => { dispatch(setFromDate(selectedStartDate)); dispatch(setToDate(selectedEndDate));  navigation.navigate("FlightDetailsScreen")}} disabled={!selectedEndDate} className={`mt-20 w-[80%] ${!selectedEndDate ? 'bg-gray-300' : 'bg-[#FFD700]'} p-5 rounded-[10px] items-center justify-center mx-auto mb-10`}>
            <Text className="font-bold">Select these dates</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

