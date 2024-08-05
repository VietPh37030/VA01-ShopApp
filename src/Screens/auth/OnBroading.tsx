import { View, Text,Image } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import Onboarding from 'react-native-onboarding-swiper';
const OnBroading = ({navigation}:RootStackScreenProps<"onBroad">) => {
    const handleDone = () => {
        navigation.replace('signup'); // Thay đổi 'Login' thành tên màn hình đăng nhập của bạn
      };
  return (
    <Onboarding
    onSkip={handleDone}
    onDone={handleDone}
    pages={[
      {
        backgroundColor: '#EFE6E6',
        image: <Image source={require('../../../assets/image/on2.png')} />,
        title: 'Discover New Fashion Trends',
        subtitle: 'Browse through the latest fashion collections and find styles that suit you',
      },
      {
        backgroundColor: '#f3950d',
        image: <Image source={require('../../../assets/image/on3.png')} />,
        title: 'Create Your Unique Look',
        subtitle: 'Mix and match fashion items from your favorite brands to create your own unique outfits',
      },
      {
        backgroundColor: '#000000',
        image: <Image source={require('../../../assets/image/logoap.png')} />,
        title: 'Shop with trendify',
        subtitle: 'Enjoy seamless shopping with flexible payment options and quick checkout.',
      },
    ]}
  />
  )
}

export default OnBroading