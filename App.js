import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Banner from './components/Banner';
import TradingBlock from './components/TradingBlock';
import { NavigationContainer } from "@react-navigation/native"


const Tab = create

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={tw.style(['flex', 'flex-1'])}>
        <Banner />
        <TradingBlock/>
        <StatusBar style='auto' />
        <NavigationContainer>

        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
