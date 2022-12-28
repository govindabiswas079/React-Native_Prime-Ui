import React from 'react';
import { Pressable, Text, View, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentCard from '../ChaildComponent/AddNewPaymentCard/Component/PaymentCard';
import AddCard from '../ChaildComponent/AddNewPaymentCard/Component/AddCard';

const AddNewPaymentCardScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#202342" />
      <View style={{ flex: 1, backgroundColor: '#202342', paddingTop: 10, }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ display: 'flex', paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={25} color={'#ffffff'} />
            </Pressable>
            <View style={{ flexGrow: 1 }} />
            <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Light', fontWeight: '700' }}>Add Payment</Text>
            <View style={{ flexGrow: 1 }} />
            <Pressable onPress={() => { { } }} style={{ width: 25, height: 25 }}>

            </Pressable>
          </View>
          <View style={{paddingBottom: 10}}>
            <PaymentCard />
            <AddCard navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default AddNewPaymentCardScreen