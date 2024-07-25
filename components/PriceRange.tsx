import { View, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const PriceRangeSelector = ({
  minPrice,
  maxPrice,
  startPrice,
  endPrice,
  onStartPriceChange,
  onEndPriceChange,
}: {
  minPrice: number;
  maxPrice: number;
  startPrice: number;
  endPrice: number;
  onStartPriceChange: (value: number) => void;
  onEndPriceChange: (value: number) => void;
}) => {
  const theme = useTheme();
  const leftHandlePos = useSharedValue(0);
  const rightHandlePos = useSharedValue(0);
  const [barWidth, setbarWidth] = useState(0);
  const startHandleGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      prevPos: number;
    }
  >({
    onStart(event, context) {
      context.prevPos = leftHandlePos.value;
    },
    onActive(event, context) {
      leftHandlePos.value = Math.min(
        rightHandlePos.value,
        Math.max(0, context.prevPos + event.translationX)
      );
      runOnJS(onStartPriceChange)(
        Math.round((maxPrice / barWidth) * leftHandlePos.value)
      );
    },
  });
  const rightHandleGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      prevPos: number;
    }
  >({
    onStart(event, context) {
      context.prevPos = rightHandlePos.value;
    },
    onActive(event, context) {
      rightHandlePos.value = Math.min(
        barWidth,
        Math.max(leftHandlePos.value, context.prevPos + event.translationX)
      );
      runOnJS(onEndPriceChange)(
        Math.round((maxPrice / barWidth) * rightHandlePos.value)
      );
    },
  });

  const leftHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: leftHandlePos.value,
      },
    ],
  }));
  const rightHandleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: rightHandlePos.value,
      },
    ],
  }));
  const barHighLightStyle = useAnimatedStyle(() => ({
    left: leftHandlePos.value,
    right: barWidth - rightHandlePos.value,
  }));
  const bars = useMemo(
    () => (
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {new Array(Math.round(maxPrice / 50)).fill("").map((_, i) =>{
            const ramdomValue = Math.random();
            return (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    height: Math.round(ramdomValue * 32) + 16,
                    backgroundColor: "#3b82f6",
                    opacity:ramdomValue
                  }}
                ></View>
              )
        } 

        )}
      </View>
    ),
    []
  );
  useEffect(() => {
    if (barWidth == 0) return;
    leftHandlePos.value = (startPrice * barWidth) / maxPrice;
    rightHandlePos.value = (endPrice * barWidth) / maxPrice;
  }, [barWidth]);

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={{ marginBottom: 24 }}>
        <Text>Price Range</Text>
      </View>
      {bars}
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: theme.colors.border,
          position: "relative",
        }}
        onLayout={(event) => {
          setbarWidth(event.nativeEvent.layout.width);
        }}
      >
        <Animated.View
          style={[
            barHighLightStyle,
            {
              position: "absolute",
              height: "100%",
              backgroundColor:"#3b82f6",
            },
          ]}
        />

        <PanGestureHandler onGestureEvent={startHandleGesture}>
          <Animated.View style={[leftHandleStyle, { position: "absolute" }]}>
            <View
              style={{
                backgroundColor: theme.colors.card,
                width: 1000,
                position: "absolute",
                right: 12,
                height: 48,
                bottom: 24,
              }}
            />
            <SilderHandle label={`$${startPrice}`} />
          </Animated.View>
        </PanGestureHandler>

        <PanGestureHandler onGestureEvent={rightHandleGesture}>
          <Animated.View style={[rightHandleStyle, { position: "absolute" }]}>
          <View
              style={{
                backgroundColor: theme.colors.card,
                width: 1000,
                position: "absolute",
                left: -12,
                height: 48,
                bottom: 24,
              }}
            />
            <SilderHandle label={`$${endPrice}`} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default PriceRangeSelector;
const SilderHandle = ({ label }: { label: string }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        position: "relative",
        transform: [
          {
            translateX: -12,
          },
          {
            translateY: -12,
          },
        ],
      }}
    >
      <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 10,
          backgroundColor: theme.colors.primary,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 24,
          width: 200,
          alignItems: "center",
          backgroundColor: theme.colors.card,
          zIndex: 10,
        }}
      >
        <Text numberOfLines={1}>{label}</Text>
      </View>
    </View>
  );
};
