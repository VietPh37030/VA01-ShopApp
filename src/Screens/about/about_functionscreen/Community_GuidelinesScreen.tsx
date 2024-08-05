import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/HeaderBar";
import Icons from "@expo/vector-icons/MaterialIcons";
import { RootAboutStackScreenProps } from "../../../navigators/RootAboutNavigation";
import { useTheme } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../../../styles/styleone"; // Import your styles
const Community_GuidelinesScreen = ({
  navigation,
}: RootAboutStackScreenProps<"community">) => {
  const { colors } = useTheme();
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.safeArea}>
        <Header navigation={navigation} title={"Community Guidelines"} />
        <KeyboardAwareScrollView
          style={styles.contentContainer}
          contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
        >
          {isSearching ? (
            <View style={style.searchContainer}>
              <TextInput
                style={style.searchInput}
                placeholder="Search..."
                placeholderTextColor={colors.text}
                autoFocus
              />
              <TouchableOpacity
                onPress={() => setIsSearching(false)}
                style={style.iconButton}
              >
                <Icons name="close" size={30} color={colors.text} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={style.defaultView}>
              <Image
                style={style.logo}
                source={require("../../../../assets/image/logoap.png")}
              />
              <TouchableOpacity
                onPress={() => setIsSearching(true)}
                style={style.iconButton}
              >
                <Icons name="search" size={30} color={colors.text} />
              </TouchableOpacity>
            </View>
          )}
          <View style={{ height: 2, backgroundColor: "#000",marginTop:10 }} />
          <View style={{ flex: 1 }}>
            <Text>Hello</Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  defaultView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 10,
  },
});

export default Community_GuidelinesScreen;
