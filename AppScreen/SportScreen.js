import React from 'react';
import { Image, Text, View, ScrollView, StatusBar, Pressable, } from "react-native";
import ImageExport from '../constant/ImageExport';
import { Row, Col } from 'react-native-responsive-grid-system';

import SportCardSwiper from '../AppComponent/SportComponent/SportCardSwiper';

const SportScreen = ({ navigation }) => {
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
            <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>Sports</Text>
          </View>


          <View style={{ marginTop: 20, height: 130, borderRadius: 15, backgroundColor: '#252a4a', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8}>
                <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>Bets is the activity</Text>
                <Text style={{ color: '#ffffff', fontSize: 14, fontFamily: 'Gilroy-Medium', fontWeight: '600', paddingTop: 15 }}>Cash Out betting lets the User of a betting take profit</Text>
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={ImageExport.football} style={{ width: 90, height: 90 }} />
                </View>
              </Col>
            </Row>
          </View>
          <SportCardSwiper />
        </ScrollView>
      </View>
    </>
  )
}

export default SportScreen