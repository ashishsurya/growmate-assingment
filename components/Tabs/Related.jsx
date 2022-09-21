import { View, Text } from 'react-native';
import React from 'react';
import RelatedNewsCard from '../RelatedNewsCard';
import tw from "twrnc"
export default function Related() {
  return (
    <View style={tw`flex p-4`}>
      <RelatedNewsCard
        cardImageUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkK3uRW156Zzsu4L1_SjcC1iAqTvhaMgyDg&usqp=CAU'
        }
        title="Liz Truss will be UK's next Prime Minister ?"
      />
      <RelatedNewsCard
        cardImageUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjkK3uRW156Zzsu4L1_SjcC1iAqTvhaMgyDg&usqp=CAU'
        }
        title="Liz Truss will be UK's next Prime Minister ?"
      />
      <Text style={tw`self-end`}>More..</Text>
    </View>
  );
}
