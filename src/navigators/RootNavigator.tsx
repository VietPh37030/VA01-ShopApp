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
import OnBroading from "../Screens/auth/OnBroading";
import LoginScreen from "../Screens/auth/LoginScreen";
import SignUpScreen from "../Screens/auth/SignUpScreen";
import AboutScreen from "../Screens/about/AboutScreen";
import RootAboutNavigation, { RootAboutStackParamList } from "./RootAboutNavigation";
export type RootStackParamList = {
  onBroad:undefined;
  login:undefined;
  signup:undefined;
  about:undefined;
  TabsStack: NavigatorScreenParams<TabStackParamsList>;
  RootAboutStack:NavigatorScreenParams<RootAboutStackParamList>
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
       <RootStack.Screen name="onBroad" component={OnBroading} options={{headerShown:false}}/>
      <RootStack.Screen name="TabsStack" component={TabsNavigator} options={{headerShown:false}}/>
      <RootStack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
      <RootStack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}}/>
      <RootStack.Screen name="deltail" component={DeitalScreen} options={{headerShown:false}} />
      <RootStack.Screen name="about" component={AboutScreen} options={{headerShown:false}} />
      <RootStack.Screen name="RootAboutStack" component={RootAboutNavigation} options={{headerShown:false}}/>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
