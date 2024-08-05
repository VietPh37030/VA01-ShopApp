import { View, Text } from 'react-native'
import React from 'react'
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
  } from "@react-navigation/native-stack";
import Community_GuidelinesScreen from '../Screens/about/about_functionscreen/Community_GuidelinesScreen';
import Terms_of_service from '../Screens/about/about_functionscreen/Terms_of_service';
import Policy_and_privacy from '../Screens/about/about_functionscreen/Policy_and_privacy';
import PolicyandIntellectual from '../Screens/about/about_functionscreen/Policy and intellectual';
import Notice from '../Screens/about/about_functionscreen/Notice';

export type RootAboutStackParamList = {
    community: undefined,
    terms:undefined,
    policy: undefined,
    intellencer: undefined,
    notices:undefined,
  };
  const RootAboutStack = createNativeStackNavigator<RootAboutStackParamList>(); 
  export type RootAboutStackScreenProps<T extends keyof RootAboutStackParamList> =
  NativeStackScreenProps<RootAboutStackParamList, T>;
const RootAboutNavigation = () => {
  return (
    <RootAboutStack.Navigator>
       <RootAboutStack.Screen name="community" component={Community_GuidelinesScreen} options={{headerShown:false}}/>
      <RootAboutStack.Screen name="terms" component={Terms_of_service} options={{headerShown:false}}/>
      <RootAboutStack.Screen name="policy" component={Policy_and_privacy} options={{headerShown:false}}/>
      <RootAboutStack.Screen name="intellencer" component={PolicyandIntellectual} options={{headerShown:false}}/>
      <RootAboutStack.Screen name="notices" component={Notice} options={{headerShown:false}} />
    </RootAboutStack.Navigator>
  )
}

export default RootAboutNavigation