import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
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
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          <Icons name="arrow-forward" size={24} color={theme.colors.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;
