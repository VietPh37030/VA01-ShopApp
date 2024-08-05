import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SearchComponent = () => {
  const { colors } = useTheme();
  const [isSearching, setIsSearching] = useState(false);

  return (
    <View style={styles.container}>
      {isSearching ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={colors.text}
            autoFocus
          />
          <TouchableOpacity onPress={() => setIsSearching(false)} style={styles.iconButton}>
            <Icons name='close' size={30} color={colors.text} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.defaultView}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/image/logoap.png")}
          />
          <TouchableOpacity onPress={() => setIsSearching(true)} style={styles.iconButton}>
            <Icons name='search' size={30} color={colors.text} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultView: {
    marginTop: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
  },
  searchContainer: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 10,
  },
});

export default SearchComponent;
