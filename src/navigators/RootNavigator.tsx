import { View, Text } from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import DeitalScreen from "../Screens/DetailScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabStackParamsList } from "./TabsNavigator";
export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabStackParamsList>;
  deltail: {
    id:string
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{headerShown:false}}/>
      <RootStack.Screen name="deltail" component={DeitalScreen} options={{headerShown:false}} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
