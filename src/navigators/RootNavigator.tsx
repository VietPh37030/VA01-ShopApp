import { View, Text } from 'react-native'
import React from 'react'
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from '../Screens/HomeScreen'
import DeitalScreen from '../Screens/DetailScreen'
import {NavigatorScreenParams} from "@react-navigation/native"
import TabsNavigator, { TabStackParamsList } from './TabsNavigator'
export type RootStackParamList ={
    TabsStack :NavigatorScreenParams<TabStackParamsList>,
    DetailScreen:undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()
const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown:false}}>
      <RootStack.Screen name='TabsStack' component={TabsNavigator} />
      <RootStack.Screen name='DetailScreen' component={DeitalScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator