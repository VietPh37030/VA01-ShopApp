import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Header from "../../../components/HeaderBar";
import styles from '../../../styles/styleone'; // Import your styles
import ItemUsage from "../../../components/ItemUsegae";

const AboutScreen = ({ navigation }: RootStackScreenProps<"about">) => {
  const theme = useTheme();
  const handlePress = () => {
    // Define the action for pressing the item
   
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} title={"About"} />
      <View style={styles.contentContainer}>
      <ItemUsage
          iconName="contacts"
          title="Community Guidelines"
          onPress={()=>( navigation.navigate("RootAboutStack",{screen:'community'}))}
        />
        <ItemUsage
          iconName="book"
          title="Terms of service"
          onPress={()=>( navigation.navigate("RootAboutStack",{screen:'terms'}))}
        />
        <ItemUsage
          iconName="description"
          title="Policy and privacy"
          onPress={()=>( navigation.navigate("RootAboutStack",{screen:'policy'}))}
        />
        <ItemUsage
          iconName="language"
          title="Policy and intellectual property rights"
          onPress={()=>( navigation.navigate("RootAboutStack",{screen:'intellencer'}))}
        />
        <ItemUsage
          iconName="code"
          title="Notice of open source software"
          onPress={()=>( navigation.navigate("RootAboutStack",{screen:'notices'}))}
        />
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
