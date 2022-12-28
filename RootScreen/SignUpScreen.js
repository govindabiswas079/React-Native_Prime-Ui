import React, { useContext } from 'react';
import { Image, Text, View, StatusBar, Pressable, ImageBackground } from "react-native";
import { Input, Center, Icon } from "native-base";
import ImageExport from '../constant/ImageExport';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../Context/context';

const SignUpScreen = ({ navigation }) => {

  const { toggleRoute } = useContext(AuthContext);

  const onSignUp = async () => {
    await AsyncStorage.setItem('userToken', '1234');
    toggleRoute();
  };

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#202342" />
      <View style={{ flex: 1, backgroundColor: '#202342', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 25 }}>
        <ImageBackground style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',  /* height: 200, */ }} source={ImageExport.backphoto} resizeMode="cover">
          <Center style={{ width: 200, height: 200, }}>
            <Image source={ImageExport.Prime_Sport} style={{ width: 100, height: 100 }} />
          </Center>
        </ImageBackground>

        <View style={{ width: '100%', paddingTop: 80 }}>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 10, height: 40 }}>
            <Input InputLeftElement={<Icon as={<Feather name={'user'} size={20} />} size={5} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="User name" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 10, height: 40 }}>
            <Input InputLeftElement={<Icon as={<MaterialCommunityIcons name={'email-open-outline'} size={20} />} size={5} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Email" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 10, height: 40, alignItems: 'center' }}>
            <Input InputLeftElement={<Icon as={<MaterialIcons name='lock-outline' size={30} />} size={5} ml="4" color="#ffffff" />} InputRightElement={<Icon as={<Ionicons name='eye-outline' /* eye-off-outline */ size={30} />} size={5} mr="4" color="#ffffff" />} variant={'unstyled'} placeholder="Password" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 10, height: 40, alignItems: 'center' }}>
            <Input InputLeftElement={<Icon as={<MaterialIcons name='lock-outline' size={30} />} size={5} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Confirm Password" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
        </View>

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#db23db', '#5e2a91', '#db23db']} style={{ width: '100%', borderRadius: 50, marginTop: 20, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Pressable onPress={() => onSignUp()} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#ffffff' }}>Sign Up</Text>
          </Pressable>
        </LinearGradient>

        <View style={{ width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
          <Text style={{ color: '#ffffff' }}>Already have an account ? </Text>
          <Pressable onPress={() => navigation.navigate('LogInScreen')} style={{ paddingBottom: 3, paddingLeft: 2, paddingRight: 2, borderBottomColor: 'blue', borderBottomWidth: 1 }}>
            <Text style={{ color: 'blue' }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default SignUpScreen ///already have an account