import React from 'react';
import { Text, View, Pressable } from "react-native";
import { Input, Icon } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row } from 'react-native-responsive-grid-system';

const AddCard = ({ navigation }) => {
  return (
    <>
      <View style={{ width: '100%', top: -50, paddingHorizontal: 15 }}>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
          <Input InputLeftElement={<Icon as={<Octicons name={'credit-card'} size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="1234-5678-9012-3456" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>
        <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40, alignItems: 'center' }}>
          <Input InputLeftElement={<Icon as={<AntDesign name='idcard' size={25} />} ml="4" color="#ffffff" />} variant={'unstyled'} placeholder="Mohamed Salah" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
        </View>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
              <Input variant={'unstyled'} placeholder="12" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
            </View>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
              <Input variant={'unstyled'} placeholder="12" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
            </View>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <View style={{ backgroundColor: '#2d325a', borderRadius: 50, marginTop: 15, height: 40 }}>
              <Input variant={'unstyled'} placeholder="123" w="100%" style={{ height: 40, alignItems: 'center', color: '#ffffff' }} />
            </View>
          </Col>
        </Row>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#d523fe', '#a031f0', '#d523fe']} style={{ width: '100%', borderRadius: 50, marginTop: 15, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Pressable onPress={() => navigation.navigate('AddNewPaymentAccountScreen')} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#ffffff', fontWeight: '700', fontFamily: '' }}>Add Card</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </>
  )
}

export default AddCard