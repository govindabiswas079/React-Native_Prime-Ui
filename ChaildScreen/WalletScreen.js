import React from 'react';
import { Image, Pressable, Text, View, StatusBar, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row } from 'react-native-responsive-grid-system';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImageExport from '../constant/ImageExport';

const WalletScreem = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#181a31" />
      <View style={{ flex: 1, backgroundColor: '#2d325a', }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: '#202342', paddingHorizontal: 15, paddingTop: 5 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back-outline' size={25} color={'#ffffff'} />
              </Pressable>
              <View style={{ flexGrow: 1 }} />
              <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Light', fontWeight: '700' }}>Wallet</Text>
              <View style={{ flexGrow: 1 }} />
              <Pressable onPress={() => { { } }}>
                <Image source={ImageExport.icon_add} style={{ width: 25, height: 25 }} />
              </Pressable>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ color: '#ffffff', fontSize: 15, fontFamily: 'Gilroy-Medium', fontWeight: '700', paddingTop: 10 }}>+$4,689.00</Text>
              <Text style={{ color: 'gray', fontSize: 11, fontFamily: 'Gilroy-Medium', paddingTop: 10, paddingBottom: 15 }}>Balance</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ flexGrow: 1 }} />
              <Pressable onPress={() => navigation.navigate('AddNewPaymentCardScreen')}>
                <Text style={{ color: 'gray', fontSize: 10, fontFamily: 'Gilroy-Light' }}>ADD NEW +</Text>
              </Pressable>
            </View>
            <View style={{ height: 180, backgroundColor: '#3acad3', borderRadius: 10, marginTop: 20, paddingHorizontal: 25, justifyContent: 'center' }}>
              <View>
                <Text style={{ color: '#ffffff', fontSize: 15, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>Current Balance</Text>
                <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700', paddingTop: 10 }}>20,33 $</Text>
              </View>
              <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', paddingTop: 50 }}>
                <Text style={{ color: '#ffffff', fontSize: 13, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>Last Top Up: 28 June 2022</Text>
                <View style={{ flexGrow: 1 }} />
                <Text style={{ color: '#ffffff', fontSize: 13, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>PrimeSport</Text>
              </View>
            </View>


            <View style={{ paddingTop: 200, paddingBottom: 10 }}>
              <Row>
                <Col xs={6}>
                  <View>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fa3e5c', '#fc5458', '#ff7452']} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                      <Pressable style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff', padding: 15, fontWeight: '700' }}>Deposit</Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                </Col>
                <Col xs={6}>
                  <View>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#56c7e0', '#91dd97', '#b6e968']} style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
                      <Pressable style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff', padding: 15, fontWeight: '700' }}>Withdraw</Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                </Col>
              </Row>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default WalletScreem;




/* 

<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#db23db', '#5e2a91', '#db23db']} style={{width: '100%'}}>
                <Pressable style={{ width: '100%' }}>
                  <Text>Deposit</Text>
                </Pressable>
              </LinearGradient>
              <View style={{ flexGrow: .5 }} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#db23db', '#5e2a91', '#db23db']} style={{width: '100%'}}>
                <Pressable style={{ width: '100%' }}>
                  <Text>Withdraw</Text>
                </Pressable>
              </LinearGradient>
            </View>

*/