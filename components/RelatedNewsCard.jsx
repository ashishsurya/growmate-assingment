import { View, Image } from 'react-native';
import { Text } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';

export default function RelatedNewsCard({ cardImageUrl, title }) {
  return (
    <View style={tw`flex flex-row border border-gray-300 my-2 h-25 rounded-xl items-center`}>
      <Image
        style={tw`h-25 w-25 rounded-l-xl`}
        source={{
          uri: cardImageUrl,
        }}
      />
      <Text style={{ fontSize: 20, flex: 1,marginLeft:10,color:"gray" }}>{title}</Text>
    </View>
  );
}
