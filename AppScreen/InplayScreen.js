import React from 'react';
import { Image, Text, View, ScrollView, StatusBar, Pressable, } from "react-native";
import ImageExport from '../constant/ImageExport';

import InPlayComponent from '../AppComponent/InPlayComponent/InPlayComponent';

const InplayScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#202342" />
      <View style={{ flex: 1, backgroundColor: '#202342', paddingHorizontal: 15, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ flexGrow: 1 }} />
            <Pressable onPress={() => navigation.navigate('WalletScreen')} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c028f7', borderRadius: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }}>
              <Image source={ImageExport.uil_wallet} style={{ width: 15, height: 15 }} />
              <Text style={{ color: '#ffffff', paddingLeft: 5 }}>500$</Text>
            </Pressable>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>My Bets</Text>
          </View>

          <InPlayComponent />
        </ScrollView>
      </View>
    </>
  )
}

export default InplayScreen