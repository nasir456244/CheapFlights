import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Feed from '../components/Feed'

export default function HotelsScreen() {
  const hotels = [
    {
      id: '123',
      title: 'The Haven Bali Seminyak',
      image: 'https://www.cheapflights.com.au/rimg/himg/0e/8c/5c/arbisoftimages-308139-Haven-Suite-One-Bedroom02-image.jpg?xhint=962&yhint=866',
      price: 'from $102'
    },
    {
      id: '456',
      title: 'Intercontinental Bali Resort',
      image: 'https://www.cheapflights.com.au/rimg/himg/4f/2d/0e/leonardo-2672017-DPSHA_4636182078_O-333430.jpg?xhint=1620&yhint=821',
      price: 'from $324'
    },
    {
      id: '789',
      title: 'The Patra Bali Resort & Villas',
      image: 'https://www.cheapflights.com.au/rimg/himg/2c/0c/de/expediav2-133262-925532241-887246.jpg?xhint=540&yhint=333',
      price: 'from $131'
    },
    {
      id: '101112',
      title: 'Away Bali Legian Camakila',
      image: 'https://www.cheapflights.com.au/rimg/himg/83/38/40/ice-174216752-photo.aspx_did=2692_brochureid=120474_publicid=51183405_instanceid=2_resizing=4K-636008.jpg?xhint=691&yhint=426',
      price: 'from $106'
    },
    {
      id: '131415',
      title: 'Bali Mandira Beach Resort & Spa',
      image: 'https://www.cheapflights.com.au/rimg/himg/3f/1f/92/revato-8193-472545-131231.jpg?xhint=1350&yhint=833',
      price: 'from $297'
    },
    {
      id: '161718',
      title: 'U Paasha Seminyak Bali',
      image: 'https://www.cheapflights.com.au/rimg/himg/3f/e0/ac/revato-12803-13313495-125892.jpg?xhint=1105&yhint=682',
      price: 'from $125'
    },
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Input text="Find a place to stay" screen="HotelDetailsScreen" />
      <Feed data={hotels} title="Need a place to stay in Indonesia ?" title2="Indonesia" title3="Sun, 1 jan, - Sun, 8 jan" title4="See all" icon={true} />
    </ScrollView>
  )
}