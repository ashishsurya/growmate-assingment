import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import PreviewReactions from '../PreviewReactions';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function Reactions() {
  const bottomSheetRef = useRef(null);

  const snappoints = useMemo(() => ['100%'], []);

  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <View style={tw`p-4`}>
      <View style={tw`p-4 flex flex-row items-center`}>
        <View style={tw`flex flex-row mr-4`}>
          <Feather name='users' size={24} color='gray' />
          <Text style={tw`ml-2 text-gray-500 text-lg`}>215</Text>
        </View>
        <View style={tw`flex flex-row mr-4`}>
          <Ionicons name='chatbubble-outline' size={24} color='gray' />
          <Text style={tw`ml-2 text-gray-500 text-lg`}>95K</Text>
        </View>
        {/* <Entypo name='select-arrows' size={18} color='gray'  /> */}
      </View>
      <TouchableOpacity onPress={() => handleSnapPress(0)}>
        <View style={tw`flex items-start`}>
          <PreviewReactions
            active
            imageURl={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            name='Linda'
            reaction={
              "If China does indeed attack Taiwan soon , October is the likely time since the Taiwan Strait waters will be calm , facilitating amphibious operations .The drills around Taiwan allowed China to build up forces in Fujian , which is part of what's needed before an invasion ."
            }
          />
          <PreviewReactions
            imageURl={
              'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            name='Linda'
            reaction={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium temporibus quas, quo dolores omnis eligendi inventore debitis eius dicta quisquam, reprehenderit tenetur. Quos nemo cupiditate, optio in eius provident?'
            }
          />
          <View style={{ paddingLeft: 40, marginTop: 20 }}>
            <TextInput placeholder='Add comment................ 😍 😭' />
          </View>
        </View>
      </TouchableOpacity>
      <BottomSheet
        index={0}
        ref={bottomSheetRef}
        snapPoints={snappoints}
        enablePanDownToClose
        onChange={handleSheetChange}
      >
        <BottomSheetView>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
