import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { Icon } from 'react-native-elements'
import Feed from '../components/Feed'

export default function FlightsScreen() {

  const flights = [
    {
      id: '123',
      title: 'Sydney, NSW, Australia',
      image: 'https://www.cheapflights.com.au/rimg/dimg/43/4b/72c43e11-city-2258-17a3a42c3ab.jpg?crop=true&height=734',
      price: 'Round-trip from $252+'
    },
    {
      id: '456',
      title: 'Melbourne, VIC, Australia',
      image: 'https://www.cheapflights.com.au/rimg/dimg/2e/4d/e27e04f5-city-13998-166a6398190.jpg?crop=true&height=734',
      price: 'Round-trip from $1,109+'
    },
    {
      id: '789',
      title: 'London, England, United Kingdom',
      image: 'https://www.cheapflights.com.au/rimg/dimg/8a/d8/29dcb2f0-city-28501-177cf94e1e5.jpg?crop=true&height=734',
      price: 'Round-trip from $4,765+'
    },
    {
      id: '101112',
      title: 'Brisbane, QLD, Australia',
      image: 'https://www.cheapflights.com.au/rimg/dimg/01/19/74023283-city-27249-17e9cea91c3.jpg?crop=true&height=734',
      price: ''
    },
    {
      id: '131415',
      title: 'New Delhi, National Capital Territory of India, India',
      image: 'https://www.cheapflights.com.au/rimg/dimg/6d/77/0cc45283-city-32821-176ddb032b7.jpg?crop=true&height=734',
      price: 'Round-trip from $2,051+'
    },
    {
      id: '161718',
      title: 'Bangkok, Thailand',
      image: 'https://www.cheapflights.com.au/rimg/dimg/21/e1/c054fc24-city-26166-176726042eb.jpg?crop=true&height=734',
      price: 'Round-trip from $2,850+'
    },
  ]


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Input text="Find a flight" screen="FlightDetailsScreen"  />
      <Feed data={flights} title="Top 6 popular cities" title2="See what's popular with other travellers" />
    </ScrollView>
  )
}