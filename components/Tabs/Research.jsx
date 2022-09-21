import { FlatList, ScrollView, View } from 'react-native';
import { Text, LinearProgress } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';
import { resTiles } from '../../data';
import ResearchTiles from '../ResearchTiles';

export default function Research() {
  return (
    <View>
      <Text h4 style={tw`pl-4 pt-2 text-gray-600`}>
        215 Expert Opinion
      </Text>
      <View style={tw`px-4 flex flex-row mt-3`}>
        <View
          style={tw` bg-[#F3D6F2] rounded-full flex items-center justify-center border-[5px] border-[#F7E8F7]`}
        >
          <Text h4 style={tw`text-[#E431C1] p-3`}>
            12%
          </Text>
        </View>
        <View style={tw`flex flex-1 `}>
          <PercentageMeter percentage={0.12} active label={'12% Buy Yes'} />
          <PercentageMeter percentage={0.88} label={'88% Buy No'} />
          <PercentageMeter percentage={0.01} label={'1% No Resolve'} />
        </View>
      </View>
        <FlatList
          scrollEnabled
          horizontal
          data={resTiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ResearchTiles
              content={item.content}
              date='1 Sep'
              title={item.title}
            />
          )}
        />
    </View>
  );
}

const PercentageMeter = ({ percentage, label, active }) => {
  return (
    <View style={tw`flex flex-row items-center`}>
      <LinearProgress
        style={tw`h-2 rounded-xl flex-1 mx-2`}
        value={percentage}
        variant='determinate'
        trackColor='#D9D9D9'
        color={active ? '#E431C1' : '#687684'}
      />
      <Text style={tw`${active ? 'text-[#E431C1]' : 'text-gray-500'}`}>
        {label}
      </Text>
    </View>
  );
};
