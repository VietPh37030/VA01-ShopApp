import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import styles from "../styles/styleone"; // Import styles

const ItemUsage = ({ iconName, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icons name={iconName} size={24} color="#181725" />
        <Text style={styles.textFeature}>{title}</Text>
        <View style={{ flex: 1 }} />
        <Icons name="chevron-right" size={30} color="#181725" />
      </View>
    </TouchableOpacity>
  );
};

export default ItemUsage;
