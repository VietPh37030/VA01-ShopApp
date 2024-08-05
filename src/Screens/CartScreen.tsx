import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { TabsStackScreenProps } from '../navigators/TabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import CustomButton from '../../components/Buttoncpo1';
import { Swipeable } from 'react-native-gesture-handler';

const CartScreen = ({ navigation }: TabsStackScreenProps<"Cart">) => {
  const theme = useTheme();
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Áo thun basic',
      price: '300,000 VND',
      color: 'Trắng',
      size: 'L',
      image: 'https://i.pinimg.com/564x/40/47/59/40475901948b258f7ece7029455326d7.jpg',
    },
    {
      id: 2,
      name: 'Quần jeans',
      price: '500,000 VND',
      color: 'Xanh đậm',
      size: 'M',
      image: 'https://i.pinimg.com/564x/82/42/ef/8242efe6f283e85e5d431617e713ef03.jpg',
    },
    {
      id: 3,
      name: 'Áo khoác bomber',
      price: '800,000 VND',
      color: 'Đen',
      size: 'XL',
      image: 'https://i.pinimg.com/564x/82/42/ef/8242efe6f283e85e5d431617e713ef03.jpg',
    },
  ]);

  const handleDelete = (id) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc muốn xóa sản phẩm này?",
      [
        { text: "Hủy", style: "cancel" },
        { text: "Xóa", onPress: () => setProducts(products.filter(item => item.id !== id)) }
      ],
      { cancelable: true }
    );
  };

  const renderRightActions = (id) => {
    return (
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => {}} style={[styles.similarProductButton]}>
          <Text style={styles.similarProductButtonText}>Similar{"\n"}Product</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(id)} style={[styles.deleteButton]}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item.id)}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productColor}>Màu sắc: {item.color}</Text>
          <Text style={styles.productSize}>Kích cỡ: {item.size}</Text>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <SafeAreaView style={{ paddingHorizontal: 24, gap: 2, flex: 1, marginTop: 10 }}>
      <ScrollView style={{ backgroundColor: theme.colors.background }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={{ backgroundColor: theme.colors.background }}
        />
      </ScrollView>
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.productPrice}>Total:</Text>
          <Text style={styles.productName}>$190</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.productPrice}>Shipping:</Text>
          <Text style={styles.productName}>$0</Text>
        </View>
        <View style={{ height: 1, backgroundColor: "#000" }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.productPrice}>Grand Total:</Text>
          <Text style={styles.productName}>$190</Text>
        </View>
        <CustomButton title='Check out' onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  productColor: {
    fontSize: 12,
    color: '#666',
  },
  productSize: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    height: '100%',
  },
  similarProductButton: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '80%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  similarProductButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:"center"
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;
