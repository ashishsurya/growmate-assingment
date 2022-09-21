import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function PreviewReactions({ imageURl, name, active, reaction }) {
  return (
    <View style={tw`flex flex-row mt-2`}>
      <Image
        source={{ uri: imageURl }}
        style={tw`rounded-full w-10 h-10 ${
          active ? 'border-[#E74BC8]' : 'border-gray-400'
        } border-2  `}
      />
      <Text numberOfLines={2} style={{marginHorizontal:10}}>
        <Text style={{ fontWeight: 'bold' }}>{name}</Text> {reaction}
      </Text>
    </View>
  );
}

// https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60
