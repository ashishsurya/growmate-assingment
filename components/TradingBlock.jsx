import { View } from 'react-native';
import { Text, Button } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TradingBlock() {
  return (
    <LinearGradient
      colors={[
        '#3023DC',
        '#3F24D9',
        '#5025D7',
        '#6827D3',
        '#8F2BCE',
        '#B22EC8',
      ]}
      style={tw`h-fit w-full px-4 py-2 flex flex-row items-center justify-around rounded-b-3xl`}
    >
      <View>
        <Text style={tw`text-white`}>CHANCE</Text>
        <Text style={tw`text-white`}>11%</Text>
      </View>
      <View>
        <FontAwesome name='long-arrow-up' size={24} color='#20FFAA' />
      </View>
      <View style={tw`flex`}>
        <Text style={tw`text-white self-end`}>24H</Text>
        <Text style={tw`text-white`}>+25495$</Text>
      </View>
      <OptionChip title={'$09'} color='#20FFAA' btnText={'Yes'} />
      <OptionChip title={'$89'} color='#E431C1' btnText={'No'} />
    </LinearGradient>
  );
}

const OptionChip = ({ title, color, btnText }) => {
  return (
    <View style={tw`flex justify-center h-fit`}>
      <Text h4 style={tw`text-white`}>
        {title}
      </Text>
      <Button color={color} >
        {btnText}
      </Button>
    </View>
  );
};
