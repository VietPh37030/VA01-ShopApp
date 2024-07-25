import { View, Text, ScrollView } from "react-native";
import React, { ReactNode, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import CustomButton from "./Buttoncpo1";
import {
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import PriceRangeSelector from "./PriceRange";

const MIN_PRICE = 0;
const MAX_PRICE = 500;
const COLOR = [
  {
    color: "red",
    label: "Red",
    itemCount: 4,
  },
  {
    color: "blue",
    label: "Blue",
    itemCount: 2,
  },
  {
    color: "green",
    label: "Green",
    itemCount: 1,
  },
  {
    color: "yellow",
    label: "Yellow",
    itemCount: 3,
  },
  {
    color: "white",
    label: "White",
    itemCount: 5,
  },
];
const SLEEVES = [
  {
    id: "sortsle",
    label: "Sort Sleeve",
    itemCount: 29,
  },
  {
    id: "sortsle",
    label: "Sort Sleeve",
    itemCount: 28,
  },
  {
    id: "lengthsl",
    label: "Sort Length",
    itemCount: 16,
  },
  {
    id: "fit",
    label: "Sort Fit",
    itemCount: 10,
  },
];

const Filter = () => {
  const [startPrice, setStartPrice] = useState(50);
  const [endPrice, setEndPrice] = useState(250);
  const theme = useTheme();
  const insert = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 24 }}
      >
        <View style={{ gap: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>
              Filter
            </Text>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
          {/**Range Section */}
          <PriceRangeSelector
            minPrice={0}
            maxPrice={MAX_PRICE}
            startPrice={startPrice}
            endPrice={endPrice}
            onStartPriceChange={setStartPrice}
            onEndPriceChange={setEndPrice}

          />

          {/**Sport category */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Sport
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {new Array(10).fill("").map((_, i) => {
                const isSelected = i === 0;
                return (
                  <Chip
                    key={i}
                    itemCount={i}
                    label="Item"
                    isSelected={i === 0}
                  />
                );
              })}
            </View>
          </View>
          {/**Color category */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Color
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {COLOR.map((item, i) => {
                const isSelected = i === 0;
                return (
                  <Chip
                    key={i}
                    itemCount={item.itemCount}
                    label={item.label}
                    left={
                      <View
                        style={{
                          backgroundColor: item.color,
                          width: 12,
                          height: 12,
                          borderRadius: 8,
                        }}
                      ></View>
                    }
                    isSelected={i === 0}
                  />
                );
              })}
            </View>
          </View>
          {/**Selevees category */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Selevees
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {SLEEVES.map((item, i) => {
                const isSelected = i === 0;
                return (
                  <Chip
                    key={i}
                    itemCount={item.itemCount}
                    label={item.label}
                    left={
                      <View
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 8,
                        }}
                      ></View>
                    }
                    isSelected={i === 0}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      {/**Button */}
      <View style={{ paddingBottom: 24 + insert.bottom }}>
        <CustomButton title="Apply Filter" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Filter;

const Chip = ({
  isSelected,
  label,
  itemCount,
  left,
}: {
  isSelected: boolean;
  label: string;
  itemCount: number;
  left?: ReactNode;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: isSelected
          ? theme.colors.primary // Thay đổi màu nền khi được chọn
          : theme.colors.background, // Màu nền khi không được chọn
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!!left && <View style={{ marginRight: 8 }}>{left}</View>}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: isSelected ? theme.colors.background : theme.colors.text,
        }}
      >
        {label} [{itemCount}]
      </Text>
    </View>
  );
};
