import { View } from 'native-base'
import React from 'react'
import { Image, Pressable, Text, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row } from 'react-native-responsive-grid-system';
import ImageExport from '../../constant/ImageExport';

const UserHeader = () => {
  return (
    <>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
        <Image source={ImageExport.profile} style={{ width: 90, height: 90 }} />
        <View>
          <Text style={{ color: '#ffffff', fontSize: 18, fontFamily: '', fontWeight: '700' }}>Dylan Dybala</Text>
          <Text style={{ color: '#ffffff', fontSize: 14, fontFamily: '', fontWeight: '600', paddingTop: 8 }}>$123,456.00</Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fa3e5c', '#fc5458', '#ff7452']} style={{ width: 110, justifyContent: 'center', alignItems: 'center', borderRadius: 50, paddingTop: 8, paddingBottom: 8 }}>
              <Pressable>
                <Text style={{ color: '#ffffff' }}>Deposit</Text>
              </Pressable>
            </LinearGradient>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#56c7e0', '#91dd97', '#b6e968']} style={{ width: 110, justifyContent: 'center', alignItems: 'center', borderRadius: 50, paddingTop: 8, paddingBottom: 8, marginLeft: 4 }}>
              <Pressable>
                <Text style={{ color: '#ffffff' }}>Withdraw</Text>
              </Pressable>
            </LinearGradient>
          </View>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 15 }}>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center', paddingBottom: 10, fontFamily: '', fontWeight: '600', fontSize: 14 }}>Prediction</Text>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e17fde', '#e17fde', '#8286ea', '#8286ea']} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 65, width: 65, borderRadius: 50 }}>
                <View style={{ height: 62, width: 62, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202342' }}>
                  <Text style={{ color: "#ffffff", fontFamily: '', fontWeight: '700', fontSize: 17 }}>3.45</Text>
                </View>
              </LinearGradient>
            </View>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center', paddingBottom: 10, fontFamily: '', fontWeight: '600', fontSize: 14 }}>Wins</Text>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e17fde', '#e17fde', '#8286ea', '#8286ea']} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 65, width: 65, borderRadius: 50 }}>
                <View style={{ height: 62, width: 62, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202342' }}>
                  <Text style={{ color: "#ffffff", fontFamily: '', fontWeight: '700', fontSize: 17 }}>129</Text>
                </View>
              </LinearGradient>
            </View>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center', paddingBottom: 10, fontFamily: '', fontWeight: '600', fontSize: 14 }}>Winrate</Text>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e17fde', '#e17fde', '#8286ea', '#8286ea']} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 65, width: 65, borderRadius: 50 }}>
                <View style={{ height: 62, width: 62, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202342' }}>
                  <Text style={{ color: "#ffffff", fontFamily: '', fontWeight: '700', fontSize: 17 }}>32%</Text>
                </View>
              </LinearGradient>
            </View>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center', paddingBottom: 10, fontFamily: '', fontWeight: '600', fontSize: 14 }}>Profit</Text>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e17fde', '#e17fde', '#8286ea', '#8286ea']} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 65, width: 65, borderRadius: 50 }}>
                <View style={{ height: 62, width: 62, backgroundColor: 'blue', borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202342' }}>
                  <Text style={{ color: "#ffffff", fontFamily: '', fontWeight: '700', fontSize: 17 }}>$78</Text>
                </View>
              </LinearGradient>
            </View>
          </Col>
        </Row>
      </View>
    </>
  )
}

export default UserHeader