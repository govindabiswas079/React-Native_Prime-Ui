import React from 'react'
import { View, Image, StatusBar, Dimensions, Text } from 'react-native'
import Swiper from 'react-native-swiper';
import { Row, Col } from 'react-native-responsive-grid-system';
import ImageExport from '../../constant/ImageExport';

const SportCardSwiper = () => {

  return (
    <>
      <View>
        <Swiper
          style={{ height: 430, }}
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
          <View style={{ height: 350, padding: 10 }}>
            <Row>
              {inplayArr1.map((value, id) => (
                <Col key={id} xs={4} sm={4} md={4} lg={4}>
                  <View style={{ backgroundColor: '#252a4a', borderRadius: 10, height: 100, width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                      <View style={{ borderRadius: 50, borderWidth: 1, borderColor: 'gray', padding: 5 }}>
                        <Image source={value.imgPath} style={{ width: 25, height: 25 }} />
                      </View>
                    </View>
                    <Text style={{ textAlign: 'center', color: '#ffffff', paddingTop: 8, fontSize: 9 }}>{value.name}</Text>
                  </View>
                </Col>
              ))}
            </Row>
          </View>
          <View style={{ height: 350, padding: 10 }}>
            <Row>
              {inplayArr2.map((value, id) => (
                <Col key={id} xs={4} sm={4} md={4} lg={4}>
                  <View style={{ backgroundColor: '#252a4a', borderRadius: 10, height: 100, width: '100%', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                      <View style={{ borderRadius: 50, borderWidth: 1, borderColor: 'gray', padding: 5 }}>
                        <Image source={value.imgPath} style={{ width: 25, height: 25 }} />
                      </View>
                    </View>
                    <Text style={{ textAlign: 'center', color: '#ffffff', paddingTop: 8, fontSize: 9 }}>{value.name}</Text>
                  </View>
                </Col>
              ))}
            </Row>
          </View>
        </Swiper>
      </View>
    </>
  )
}

export default SportCardSwiper;

const inplayArr1 = [
  { id: 1, imgPath: ImageExport.football2, name: 'Football' },
  { id: 2, imgPath: ImageExport.house_racing, name: 'House Racing' },
  { id: 3, imgPath: ImageExport.golf, name: 'Golf' },
  { id: 4, imgPath: ImageExport.tennis, name: 'Tennis' },
  { id: 5, imgPath: ImageExport.boxing, name: 'Boxing' },
  { id: 6, imgPath: ImageExport.basket_ball, name: 'Basket Ball' },
  { id: 7, imgPath: ImageExport.cricket, name: 'Cricket' },
  { id: 8, imgPath: ImageExport.ice_hockey, name: 'Ice Hockey' },
  { id: 9, imgPath: ImageExport.volleyball, name: 'Volleyball' },
]
const inplayArr2 = [
  { id: 10, imgPath: ImageExport.badminton, name: 'Badminton' },
  { id: 11, imgPath: ImageExport.darts, name: 'Darts' },
  { id: 12, imgPath: ImageExport.handball, name: 'Handball' },
  { id: 13, imgPath: ImageExport.cycling, name: 'Cycling' },
  { id: 14, imgPath: ImageExport.water_polo, name: 'Water Polo' },
  { id: 15, imgPath: ImageExport.mma, name: 'MMA' },
  { id: 16, imgPath: ImageExport.snooker, name: 'Snooker' },
  { id: 17, imgPath: ImageExport.rugby, name: 'Rugby' },
  { id: 18, imgPath: ImageExport.futsal, name: 'Futsal' },
]
