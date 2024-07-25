import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";



const CustomBottomTab = (props: BottomTabBarProps) => {
  const {colors} =useTheme()
  return (
    <View
      style={{
        flexDirection: "row",
       
        backgroundColor: colors.background,
      }}
    >
      {props.state.routes.map((route, index) => {
        const isActive = props.state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => props.navigation.navigate(route.name)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              padding: 8,
            }}
          >
            <View
              style={{
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isActive ? colors.primary : "transparent",
                borderRadius: 32,
              }}
            >
              <Icons
                name={
                  route.name === "Home"
                    ? "home"
                    : route.name === "Cart"
                    ? "shopping-cart"
                    : route.name === "Payment"
                    ? "account-balance-wallet"
                    : route.name === "Profile"
                    ? "person"
                    : "home"
                }
                size={24}
                color={isActive ? colors.background : colors.primary}
                style={{ opacity: isActive ? 1 : 0.5 }}
              />
            </View>
            {isActive && (
              <Text
                style={{
                  marginLeft: 4,
                  fontSize: 14,
                  fontWeight: "600",
                  color: colors.primary,
                }}
              >
                {route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;
