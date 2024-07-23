import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolation,
  useAnimatedProps
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    ],
    [style]
  );
 const blurViewProps = useAnimatedProps(()=>{
    return{
        intensity:interpolate(
            animatedIndex.value,
            [-1, 0],
            [0, 20],
            Extrapolation.CLAMP
          ),
    }
 })
 

  return <AnimatedBlurView animatedProps={blurViewProps} style={containerStyle} />;
};

export default CustomBackdrop;
