import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { useMemo } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const theme = useMemo(() => ({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#f5f5f5",
      text:"#191919",
      border:'#D9D9D9',
      primary:'#191919'
    },
  }), []);

  return (
    <SafeAreaProvider style={{flex:1}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
