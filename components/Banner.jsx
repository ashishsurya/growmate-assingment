import { Ionicons, Octicons } from '@expo/vector-icons';
import { Text } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import tw from 'twrnc';

export default function Banner() {
  return (
    <View style={tw`h-2/5 w-full`}>
      <ImageBackground
        style={tw`w-full h-full `}
        resizeMode='cover'
        source={{
          uri: 'https://www.telegraph.co.uk/content/dam/news/2021/04/24/230421_ADB_FORIEGN-lead_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg',
        }}
      >
        <LinearGradient
          colors={['transparent', 'black']}
          style={{ height: '100%', width: '100%' }}
        >
          <View style={tw`flex flex-1 justify-between z-2`}>
            <Ionicons
              name='arrow-redo'
              size={24}
              color='white'
              style={tw`self-end mt-2 mr-2`}
            />
            <View
              style={tw`flex flex-row items-center justify-between bottom-5 px-4 w-full`}
            >
              <Text h4 style={tw`w-4/5 text-white `}>
                Will China invade Taiwan before end september?
              </Text>
              <Octicons name='filter' size={24} color='white' />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
