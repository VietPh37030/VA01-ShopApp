import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../navigators/TabsNavigator";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import CustomButton from "../../components/Buttoncpo1";
import TrackOderComponet from "../../components/TrackOderComponet";
const ProfileScreen = ({ navigation }:TabsStackScreenProps<"Profile">) => {
  const theme = useTheme();
  const handLogout = ()=>{
      navigation.navigate("login")
  }
  return (
    <SafeAreaView style={{ paddingVertical: 24, gap: 2, flex: 1 }}>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        {/** User information handling */}
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 16 }}
        >
          <Image
            style={styles.imageAvatar}
            source={require("../../assets/image/avatar.jpg")}
            resizeMode="cover"
          />
          <View style={styles.TextNameContainer}>
            <Text style={{ fontWeight: "600", fontSize: 22 }}>
              Pham Viet Anh
            </Text>
            <Text
              style={{
                fontWeight: "200",
                fontSize: 12,
                color: theme.colors.text,
              }}
            >
              phamvietanh19218@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor: theme.colors.text,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons name="edit" size={20} color={theme.colors.background} />
          </TouchableOpacity>
        </View>
        {/**Cac chuc nang cua man hinh nay */}
        <View style={{ height: 1, backgroundColor: "#E2E2E2" }}> 
        </View>
        {/**Track oder su li o day */}
        <TrackOderComponet/>
        {/**Cac chu nang lien quan */}
        <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
        <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="shopping-bag" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Order"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
        <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="shopping-bag" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"My Details"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
        <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="pin-drop" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Delivery Address"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
        <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="payment" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Payment Methods"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
          <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="local-activity" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Coupon"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/> 
        <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="notifications" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Notification"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/>
          <TouchableOpacity>
            <View style={styles.container}>
            <Icons name="help" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"Help"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/>
          <TouchableOpacity onPress={()=>(navigation.navigate("about"))}>
            <View style={styles.container}>
            <Icons name="error" size={24} color={theme.colors.text}/>
            <Text style={styles.textFeature}>{"About"}</Text>
            <View style={{flex:1}}/>
            <Icons name="chevron-right" size={30} color={theme.colors.text}/>
            </View>
          </TouchableOpacity>
          <View style={{ height: 1, backgroundColor: "#E2E2E2" }}/>
      </ScrollView>
      <CustomButton title="Log-out" onPress={handLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  TextNameContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 12,
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:16,
    marginVertical:16
  },
  textFeature:{
    color:"#181725",
    fontWeight:'bold',
    fontSize:18,
    paddingLeft:10
  }
});

export default ProfileScreen;
