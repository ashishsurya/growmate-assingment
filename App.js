import { View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Banner from './components/Banner';
import TradingBlock from './components/TradingBlock';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Research from './components/Tabs/Research';
import { NavigationContainer } from '@react-navigation/native';
import Reactions from './components/Tabs/Reactions';
import Related from './components/Tabs/Related';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={tw.style(['flex', 'flex-1'])}>
        <Banner />
        <TradingBlock />
        <StatusBar style='auto' />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12, textTransform: 'none' },
              tabBarActiveTintColor: '#E431C1',
              tabBarStyle: { borderColor: '#E431C1' },
            }}
            
          >
            <Tab.Screen name='Research & News' component={Research} />
            <Tab.Screen name='Reactions' component={Reactions} />
            <Tab.Screen name='Related' component={Related} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
