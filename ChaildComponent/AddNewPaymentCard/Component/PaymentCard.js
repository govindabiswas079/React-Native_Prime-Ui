import React from 'react'
import { Text, View } from 'react-native';
import { Shapes } from "react-native-background-shapes";
import Swiper from 'react-native-swiper';

const PaymentCard = () => {
  return (
    <>
      <Swiper
        style={{ height: 340, }}
        dot={
          <View
            style={{ backgroundColor: '#465a624f', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5, }}
          />
        }
        activeDot={
          <View
            style={{ backgroundColor: '#22c0ff', width: 10, height: 10, borderRadius: 5, marginLeft: 5, marginRight: 5 }}
          />
        }
        paginationStyle={{ bottom: 70 }}
        loop={false}
      >
        {[0, 1, 2].map((value, id) => (
          <View key={id} style={{ padding: 15 }}>
            <View style={{ height: 180, backgroundColor: '#3acad3', borderRadius: 10, marginTop: 20, paddingHorizontal: 25, justifyContent: 'center', overflow: 'hidden' }}>
              <Shapes
                primaryColor="#3acad300"
                secondaryColor="#3acfcb"
                height={3}
                borderRadius={20}
                figures={[
                  { name: 'circle', position: 'center', axis: 'right', size: 300 },
                ]}
                style={{ position: 'absolute', left: -30, top: -170 }}
              />
              <Shapes
                primaryColor="#3acad300"
                secondaryColor="#49bada"
                height={3}
                borderRadius={20}
                figures={[
                  { name: 'circle', position: 'center', axis: 'right', size: 200 },
                ]}
                style={{ position: 'absolute', left: -140, top: 70 }}
              />
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
          </View>
        ))}
      </Swiper>
    </>
  )
}

export default PaymentCard