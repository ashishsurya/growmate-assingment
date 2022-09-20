import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
      <View style={tw`flex flex-1 `}>
        <View style={tw`h-1/2 w-full relative`}>
          <Image
            style={tw`w-full h-full`}
            source={{
              uri: 'https://www.telegraph.co.uk/content/dam/news/2021/04/24/230421_ADB_FORIEGN-lead_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg',
            }}
        />
        
        </View>
      </View>
  );
}
