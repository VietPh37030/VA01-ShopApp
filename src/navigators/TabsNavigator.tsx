// TabsNavigator.tsx
import { View, Text } from "react-native";
import React from "react";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigator";
import CustomBottomTab from "../../components/CustomBottomTab";

export type TabStackParamsList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamsList>();

export type TabsStackScreenProps<T extends keyof TabStackParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabStackParamsList, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TabsNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={(props) => <CustomBottomTab {...props}/>}
    >
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => {
            return <Icons name="home" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: (props) => {
            return <Icons name="shopping-bag" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarIcon: (props) => {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => {
            return <Icons name="person-2" {...props} />;
          },
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabsNavigator;