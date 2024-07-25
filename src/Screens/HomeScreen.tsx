import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import MasonryList from "reanimated-masonry-list";
import { BlurView } from "expo-blur";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";

import Filter from "../../components/Filter";
import CustomBackdrop from "../../components/CustomBackdrop";
import { TabsStackScreenProps } from "../navigators/TabsNavigator";

const CATEGORIES = ["Clothing", "Shoes", "Accessory", "Trousers", "Hat"];

const HomeScreen = ({navigation}:TabsStackScreenProps<"Home">) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef(null);

  const openFilterModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 2 }}>
        {/** Headder Section*/}
        <View style={styles.container}>
          <Image
            source={require("../../assets/image/avatar.jpg")}
            style={styles.imageContai}
          />
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text
              style={[styles.textContent, { color: colors.text }]}
              numberOfLines={1}
            >
              Hi,<Text style={styles.textName}>Jame</Text>👋
            </Text>
            <Text style={{ color: colors.text, opacity: 0.5 }}>
              Discover fashion that suit your style
            </Text>
          </View>
          <TouchableOpacity
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
            <Icons name="notifications" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/**Search Section */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 24,
            marginVertical: 12,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              gap: 12,
              flexDirection: "row",
              paddingHorizontal: 24,
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <TextInput
              placeholder="Search"
              style={{ fontSize: 16, color: colors.text, opacity: 0.5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openFilterModal}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              marginLeft: 10,
              backgroundColor: colors.primary,
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
        {/**Grid Collection View */}
        <View style={{ paddingHorizontal: 24, paddingBottom: 10 }}>
          {/**Title bar */}
          <View style={styles.titteBarContainer}>
            <Text style={{ fontSize: 22, fontWeight: "700" }}>
              New Collection
            </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200 }}>
            {/**Card  */}
            <Card onPress={()=>{
              navigation.navigate("deltail",{
                id:'123'
              })
            }}/>
            <View style={{ flex: 1, gap: 12, marginLeft: 10 }}>
            <Card onPress={()=>{
              navigation.navigate("deltail",{
                id:'13'
              })
            }}/>
             <Card onPress={()=>{
              navigation.navigate("deltail",{
                id:'12'
              })
            }}/>
            </View>
          </View>
        </View>
        {/**Category Section*/}
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 1 : 0,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: "800",
                    fontSize: 16,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/** List Product */}
        <MasonryList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item): string => item.toString()}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <View style={{ padding: 6 }}>
              <View
                style={{
                  aspectRatio: i === 0 ? 1 : 2 / 3,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "red",
                  borderRadius: 24,
                }}
              >
                <Image
                  source={{
                    uri: "https://i.pinimg.com/564x/dd/85/8f/dd858fb8c5140204d8fe76cebfd117b2.jpg",
                  }}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                />
                <View
                  style={[
                    StyleSheet.absoluteFill,
                    {
                      padding: 12,
                    },
                  ]}
                >
                  <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        fontWeight: "700",
                        color: colors.text,
                      }}
                    >
                      Adidas clothes everyday
                    </Text>
                    <View
                      style={{
                        backgroundColor: colors.background,
                        borderRadius: 100,
                        height: 32,
                        aspectRatio: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                      }}
                    >
                      <Icons
                        name="favorite-border"
                        size={20}
                        color={colors.text}
                      />
                    </View>
                  </View>
                  <View style={{ flex: 1 }}></View>
                  <BlurView
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      padding: 8,
                      borderRadius: 100,
                      overflow: "hidden",
                    }}
                    intensity={20}
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: "#fff",
                        marginLeft: 4,
                      }}
                      numberOfLines={1}
                    >
                      $160.0
                    </Text>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderRadius: 100,
                        backgroundColor: "#fff",
                      }}
                    >
                      <Icons
                        name="add-shopping-cart"
                        size={20}
                        color={"#000"}
                      />
                    </TouchableOpacity>
                  </BlurView>
                </View>
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
      {/**Filter section */}
      <BottomSheetModal
        snapPoints={["85%"]}
        index={0}
        ref={bottomSheetModalRef}
        backdropComponent={(props) => <CustomBackdrop {...props}/>
      }
      backgroundStyle={{
        borderRadius:24
      }}
      >
        <Filter/>
      </BottomSheetModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  imageContai: {
    width: 52,
    aspectRatio: 1,
    borderRadius: 52,
    resizeMode: "cover",
  },
  textContent: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  textName: {},
  titteBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

const Card = ({onPress} :{onPress:(()=>void)}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          paddingVertical: 8,
          backgroundColor: "rgba(0,0,0,0.15)", // Giảm độ mờ bằng cách thay đổi giá trị alpha
          borderRadius: 24, // Sử dụng giá trị phù hợp cho borderRadius
          paddingHorizontal: 16, // Thay đổi kích thước để phù hợp với nội dung
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
          $100
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreen;
