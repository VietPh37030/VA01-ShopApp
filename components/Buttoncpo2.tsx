import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

interface CustomButtonProps1 {
  title: string;
  onPress: () => void;
}

const CustomButton1: React.FC<CustomButtonProps1> = ({ title, onPress }) => {
  const theme = useTheme();

  return (
    <View style={{ padding: 24 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: theme.colors.primary,
          height: 64,
          borderRadius: 64,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: 12,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: theme.colors.background,
            
          }}
        >
          {title}
        </Text>
        <View
          style={{
            backgroundColor: theme.colors.card,
            width: 40,
            aspectRatio: 1,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Icons name="shopping-cart-checkout" size={24} color={theme.colors.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomButton1;
