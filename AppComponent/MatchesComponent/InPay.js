import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native';
import ImageExport from '../../constant/ImageExport';

const InPay = () => {
  return (
    <>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>In-Play</Text>
        <View style={{ paddingTop: 7 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {inplayArr.map((value, id) => (
              <View key={id} style={{ margin: 5, borderRadius: 50, borderColor: '#ffffff', borderWidth: 1, padding: 5 }}>
                <Image source={value.imgPath} style={{ width: 22, height: 22 }} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default InPay;


const inplayArr = [
  { id: 1, imgPath: ImageExport.football2 },
  { id: 2, imgPath: ImageExport.house_racing },
  { id: 3, imgPath: ImageExport.futsal },
  { id: 4, imgPath: ImageExport.tennis },
  { id: 5, imgPath: ImageExport.boxing },
  { id: 6, imgPath: ImageExport.basket_ball },
  { id: 7, imgPath: ImageExport.cricket },
  { id: 8, imgPath: ImageExport.ice_hockey },
  { id: 9, imgPath: ImageExport.volleyball },
  { id: 10, imgPath: ImageExport.badminton },
  { id: 11, imgPath: ImageExport.darts },
  { id: 12, imgPath: ImageExport.handball },
  { id: 13, imgPath: ImageExport.cycling },
  { id: 14, imgPath: ImageExport.water_polo },
  { id: 15, imgPath: ImageExport.mma },
  { id: 16, imgPath: ImageExport.snooker },
  { id: 17, imgPath: ImageExport.rugby },
  { id: 18, imgPath: ImageExport.futsal },
]