import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
const TrackOderComponet = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <View style={{ justifyContent: "center" }}>
        {/**Title Header */}
        <View style={styles.containerhead}>
          <Text style={styles.titleHead}>Order</Text>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Text style={styles.titleHead}>purchase history</Text>
            <Icons name="chevron-right" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/**Các chức năng hiển thị tại đây */}
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Icons name="wallet" size={40} color={colors.text} />
            <Text style={{ fontSize: 12, fontWeight: "300" }}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Icons name="local-mall" size={40} color={colors.text} />
            <Text style={{ fontSize: 12, fontWeight: "300" }}>
              Pending pickup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Icons name="local-shipping" size={40} color={colors.text} />
            <Text style={{ fontSize: 12, fontWeight: "300" }}>
              Pending delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Icons name="stars" size={40} color={colors.text} />
            <Text style={{ fontSize: 12, fontWeight: "300" }}>Rating</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerhead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  titleHead: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },
});
export default TrackOderComponet;
