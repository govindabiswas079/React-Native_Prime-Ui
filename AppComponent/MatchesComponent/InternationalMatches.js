import { Divider } from 'native-base';
import React from 'react'
import { Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImageExport from '../../constant/ImageExport';

const InternationalMatches = () => {
  return (
    <>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>International Matches</Text>
        <View style={{ paddingTop: 7 }}>
          {inplayArr.map((value, id) => (
            <View key={id} style={{ borderRadius: 10, backgroundColor: '#252a4a', margin: 5, paddingTop: 15, paddingBottom: 15, /* paddingHorizontal: 30 */ }}>
              <Text style={{ color: '#ffffff', paddingHorizontal: 30, }}>{value.header}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, paddingTop: 10/* paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2 */ }}>
                <View>
                  <Image source={value.imgPath1} style={{ width: 55, height: 55 }} />
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, paddingTop: 10 }}>{value.name1}</Text>
                </View>
                <View style={{ flexGrow: 1 }} />
                <View style={{ paddingLeft: 7, paddingRight: 7 }}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 20, fontWeight: '700' }}>7 - 0</Text>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#db23db', '#5e2a91', '#db23db']} style={{ marginTop: 18, borderRadius: 50, paddingLeft: 15, paddingRight: 15 }}>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16 }}>{value.status}</Text>
                  </LinearGradient>
                </View>
                <View style={{ flexGrow: 1 }} />
                <View>
                  <Image source={value.imgPath2} style={{ width: 55, height: 55 }} />
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, paddingTop: 10 }}>{value.name2}</Text>
                </View>
              </View>
              <Divider style={{ marginTop: 10, backgroundColor: '#2d3355' }} />
              <View style={{ paddingTop: 15, }}>
                <Text style={{ color: '#ffffff', textAlign: 'center' }}>{value.data}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}

export default InternationalMatches;


const inplayArr = [
  { id: 1, imgPath1: ImageExport.logo_1, imgPath2: ImageExport.logo_2, header: 'The International 2022', name1: 'Natus', name2: 'Flatiz', status: 'Live', data: '04/06 12:00 B03' },
  { id: 2, imgPath1: ImageExport.logo_6, imgPath2: ImageExport.logo_4, header: 'Premier Bets League', name1: 'Premier', name2: 'League', status: 'Live', data: '05/06 11:00 B03' },
]