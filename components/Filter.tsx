import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const MIN_PRICE = 0;
const MAX_PRICE = 500;
const Filter = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);
  const theme = useTheme();
  return (
    <View style={{ paddingVertical: 24, gap: 24 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>Filter</Text>
        <TouchableOpacity>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      {/**Range Section */}
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 16 }}>
          <Text>Price Range</Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: theme.colors.border,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: `${(100 * minPrice) / MAX_PRICE}%`,
              width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
              height: "100%",
              backgroundColor: theme.colors.primary,
            }}
          />
          <View
            style={{
              position: "absolute",
              left: "10%",
              height: 24,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              borderColor: theme.colors.primary,
              backgroundColor:theme.colors.background,
              borderWidth: 1,
              transform : [
                {
                    translateX:-12
                },
                {
                    translateY:-12
                }
              ]
            }}
          >
            <View
              style={{
                width: 3,
                height: 3,
                borderRadius:10,
                backgroundColor: theme.colors.primary,
              }}
            ></View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${MIN_PRICE}
          </Text>
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${MAX_PRICE}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Filter;
