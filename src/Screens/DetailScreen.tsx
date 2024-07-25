import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { RootStackScreenProps } from "../navigators/RootNavigator";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomButton from "../../components/Buttoncpo1";
import CustomButton1 from "../../components/Buttoncpo2";

{
  /**Fake dữ liệu kích thước sản phẩm  */
}
const SIZES = ["XS", "XXL", "X", "L", "M"];
const DeitalScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<"deltail">) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(SIZES[0]);
  return (
    <View style={{ flex: 1 }}>
      {/** Image Product Deital */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <StatusBar barStyle="default" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}></View>
          {/**Favorite add */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="favorite-outline" size={24} color={colors.text} />
          </TouchableOpacity>
          {/**Add to cart */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="shopping-bag" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/**Sử lí action sản phẩm */}
      <BottomSheet
        detached
        ref={bottomSheetRef}
        snapPoints={[64, 400]}
        index={0}
        style={{ marginHorizontal: 20 }}
        bottomInset={insets.bottom + 20}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background,
        }}
      >
        <View style={{ padding: 16, gap: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            Puma Everydat Hussle
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            {/**Rate here */}
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row" }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 3 ? "star" : "star-border"}
                    color="#facc15"
                    size={20}
                  />
                ))}
              </View>
              <Text style={{ fontSize: 14, color: colors.text, opacity: 0.5 }}>
                3.0 <Text>(250k review)</Text>
              </Text>
            </View>
            {/**Taăng giảm số lượng sản phẩm mong muốn */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: colors.primary,
                padding: 6,
                borderRadius: 100,
              }}
            >
              <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count - 1))}
                style={{
                  backgroundColor: colors.card,
                  width: 33,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 44,
                }}
              >
                <Icons name="remove" size={20} color={colors.text} />
              </TouchableOpacity>
              {/**Hiển thị số lượng khi nhấn */}
              <Text
                style={{
                  color: colors.background,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {count}
              </Text>
              {/**Tăng số lương */}
              <TouchableOpacity
                onPress={() => setCount((count) => count + 1)}
                style={{
                  backgroundColor: colors.card,
                  width: 33,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 44,
                }}
              >
                <Icons name="add" size={20} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>
          {/** Size*/}
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  textTransform: "uppercase",
                }}
              >
                Model it 6'1'',Size <Text>M</Text>
              </Text>
              <Text>Size Guide</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 6,
              }}
            >
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSize(s)}
                  style={{
                    width: 44,
                    height: 44,
                    aspectRatio: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: s === size ? colors.primary : colors.card,
                    borderRadius: 44,
                  }}
                >
                  <Text
                    style={{
                      color: s === size ? colors.background : colors.text,
                      fontWeight: "600",
                      fontSize: 16,
                    }}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {/**Content product */}
        <View style={{ paddingHorizontal: 24 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.text,
              marginBottom: 16,
            }}
          >
            Description
          </Text>
          <Text style={{opacity:0.5}} numberOfLines={3}>
            Computer-aided design is the use of computers to aid in the
            creation, modification, analysis, or optimization of a design. This
            software is used to increase the productivity of the designer,
            improve the quality of design, improve communications through
          </Text>
        </View>
        {/**Thanh toan */}
        <View style={{flexDirection:'row',alignItems:'center',gap:16}}>
              <View style={{flex:1,paddingLeft:10}}>
                <Text style={{color:colors.text,opacity:0.75,marginBottom:4}} >Total</Text>
                <Text style={{fontSize:18,color:colors.text,fontWeight:"600"}}>${(250000).toLocaleString()}</Text>
              </View>
              <CustomButton1  title="Add to cart" onPress={()=>{}}/>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DeitalScreen;
