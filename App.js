import { View, StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Banner from './components/Banner';
import TradingBlock from './components/TradingBlock';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Research from './components/Tabs/Research';
import { NavigationContainer } from '@react-navigation/native';
import Reactions from './components/Tabs/Reactions';
import Related from './components/Tabs/Related';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import BottomSheetComments from './components/BottomSheetComments';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const bottomSheetRef = useRef(null);

  const snappoints = useMemo(() => ['60%'], []);

  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={tw.style(['flex', 'flex-1', 'bg-[#FCFCFC]'])}>
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
              <Tab.Screen
                name='Reactions'
                children={() => <Reactions handleSnapPress={handleSnapPress} />}
              />
              <Tab.Screen name='Related' component={Related} />
            </Tab.Navigator>
            <BottomSheet
              index={0}
              ref={bottomSheetRef}
              snapPoints={snappoints}
              enablePanDownToClose
              onChange={handleSheetChange}
            >
              <BottomSheetScrollView>
                <BottomSheetComments />
              </BottomSheetScrollView>
            </BottomSheet>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
