import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Text } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';

export default function ResearchTiles({ title, date, content }) {
  return (
    <View style={tw`flex m-5 p-3   border-2 w-52 border-gray-200  rounded-2xl`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
        <Text style={{}}>{date}</Text>
      </View>
      <Text numberOfLines={3} style={{ color: 'gray' }}>
        {content}
      </Text>
      <Ionicons
        name='ios-return-up-forward'
        size={24}
        color='gray'
        style={{ alignSelf: 'flex-end' }}
      />
    </View>
  );
}
