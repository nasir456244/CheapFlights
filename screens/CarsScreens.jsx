import { ScrollView } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Feed from '../components/Feed'

export default function CarsScreens() {

  const cars = [
    {
      id: '123',
      title: 'Small',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?height=116',
      price: '$39+'
    },
    {
      id: '456',
      title: 'Medium',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/03_standard_black.png?height=116',
      price: '$46+'
    },
    {
      id: '789',
      title: 'Large',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116',
      price: '$94+'
    },
    {
      id: '101112',
      title: 'SUV',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/06_suv-medium_white.png?height=116',
      price: '$42+'
    },
    {
      id: '131415',
      title: 'Van',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?height=116',
      price: '$53+'
    },
    {
      id: '161718',
      title: 'Luxury',
      image: 'https://content.r9cdn.net/rimg/carimages/generic/08_convertible_orange.png?height=116',
      price: '$94+'
    },
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Input text="Find a car hire" screen="CarDetailsScreen" />
      <Feed data={cars} title="Drive around in Frankfurt am Main, Germany" title3="Sun, 1 jan, - Sun, 8 jan" title4="See all" car={true} />
    </ScrollView>
  )
}