import React from 'react';
import { Text, View, Pressable } from "react-native";
import { Input, Icon } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

const AddCard = ({ navigation }) => {
  return (
    <>
      <View style={{ width: '100%', top: -50, paddingHorizontal: 15 }}>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40, alignItems: 'center' }}>
          <Input InputLeftElement={<Icon as={<AntDesign name='idcard' size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Name Account" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
          <Input InputLeftElement={<Icon as={<MaterialIcons name={'account-balance'} size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Bank Name" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
          <Input InputLeftElement={<Icon as={<MaterialIcons name={'account-balance'} size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Swift Code" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
          <Input InputLeftElement={<Icon as={<MaterialIcons name={'account-balance'} size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Account Number" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>

      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#d523fe', '#a031f0', '#d523fe']} style={{ width: '100%', borderRadius: 50, marginTop: 15, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Pressable onPress={() => navigation.navigate('Root')} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#ffffff', fontWeight: '700', fontFamily: '' }}>Add Account</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </>
  )
}

export default AddCard