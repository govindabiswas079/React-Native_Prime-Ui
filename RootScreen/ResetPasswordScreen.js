import React from 'react';
import { Image, Pressable, Text, View, StatusBar, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row } from 'react-native-responsive-grid-system';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Input, Center, Icon } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ImageExport from '../constant/ImageExport';



const ResetPasswordScreen = ({ navigation }) => {

  const onSubmit = () => {
    navigation.navigate('LogInScreen')
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#202342" />
      <View style={{ flex: 1, backgroundColor: '#202342', paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back-outline' size={25} color={'#ffffff'} />
          </Pressable>
          <View style={{ flexGrow: 1 }} />
          <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Light', }}>Reset Password</Text>
          <View style={{ flexGrow: 1 }} />
          <Pressable onPress={() => { { } }}>
            <Ionicons name='ios-settings-sharp' size={25} color={'#ffffff'} />
          </Pressable>
        </View>
        <View style={{ paddingTop: 35 }}>
          <Text style={{ color: '#ffffff', fontSize: 13, textAlign: 'center' }}>
            Check your email or phone number to retrieve your password.
          </Text>
        </View>
        <View style={{ width: '100%', paddingTop: 50 }}>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
            <Input InputLeftElement={<Icon as={<MaterialIcons name={'lock-outline'} size={20} />} size={5} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Email" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
          <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 25, height: 40, alignItems: 'center' }}>
            <Input InputLeftElement={<Icon as={<MaterialIcons name='lock-outline' size={30} />} size={5} ml="4" color="#ffffff" />} InputRightElement={<Icon as={<Ionicons name='eye-outline' /* eye-off-outline */ size={30} />} size={5} mr="4" color="#ffffff" />} variant={'unstyled'} placeholder="Password" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
          </View>
        </View>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#db23db', '#5e2a91', '#db23db']} style={{ width: '100%', borderRadius: 50, marginTop: 15, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Pressable onPress={() => onSubmit()} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#ffffff' }}>Reset Password</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </>
  )
}

export default ResetPasswordScreen