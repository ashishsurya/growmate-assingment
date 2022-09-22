import { View, Text, Image } from 'react-native'
import React from 'react'

export default function FullComment({image, name , time,replies, content}) {
  return (
    <View>
      <Image source={{ uri: image }} style={{ width: 10, height: 10, borderRadius: 10 }} />
      <Text>{name}</Text>
    </View>
  )
}