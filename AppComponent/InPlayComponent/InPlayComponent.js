import { Divider } from 'native-base';
import React from 'react'
import { Text, View, Image } from 'react-native';
import ImageExport from '../../constant/ImageExport';

const InPlayComponent = () => {
  return (
    <>
      <View style={{ paddingTop: 20 }}>
        {/* <Text style={{ color: '#ffffff', fontSize: 20, fontFamily: 'Gilroy-Medium', fontWeight: '700' }}>International Matches</Text> */}
        <View style={{ paddingTop: 7 }}>
          {inplayArr.map((value, id) => (
            <View key={id} style={{ borderRadius: 10, backgroundColor: '#252a4a', margin: 5, paddingTop: 15, paddingBottom: 15, /* paddingHorizontal: 30 */ }}>
              <Text style={{ color: '#ffffff', paddingHorizontal: 30, }}>{value.header}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, paddingTop: 10/* paddingLeft: 16, paddingRight: 16, paddingTop: 2, paddingBottom: 2 */ }}>
                <View>
                  <Image source={value.imgPath1} style={{ width: 55, height: 55 }} />
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, paddingTop: 10, paddingBottom: 10 }}>{value.name1}</Text>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 14, borderWidth: 1, borderColor: 'gray', borderRadius: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2 }}>{2.42}</Text>
                </View>
                <View style={{ flexGrow: 1 }} />
                <View style={{ paddingLeft: 7, paddingRight: 7 }}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 15, paddingBottom: 10 }}>{value.status2}</Text>
                  <Text style={{ color: '#537ff0', textAlign: 'center', fontSize: 18, fontWeight: '600', paddingBottom: 10 }}>23:59:49</Text>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 12, paddingBottom: 10 }}>{value.status}</Text>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 14, borderWidth: 1, borderColor: 'gray', borderRadius: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2 }}>2.42</Text>
                </View>
                <View style={{ flexGrow: 1 }} />
                <View>
                  <Image source={value.imgPath2} style={{ width: 55, height: 55 }} />
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, paddingTop: 10, paddingBottom: 10 }}>{value.name2}</Text>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 14, borderWidth: 1, borderColor: 'gray', borderRadius: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 2, paddingBottom: 2 }}>{2.42}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}

export default InPlayComponent;


const inplayArr = [
  { id: 1, imgPath1: ImageExport.logo_1, imgPath2: ImageExport.logo_2, header: 'The International 2022', name1: 'Natus', name2: 'Flatiz', status2: 'Live', status: '21.16', data: '04/06 12:00 B03' },
  { id: 2, imgPath1: ImageExport.logo_6, imgPath2: ImageExport.logo_4, header: 'Premier Bets League', name1: 'Premier', name2: 'League', status2: 'Live', status: '21.16', data: '05/06 11:00 B03' },
  { id: 3, imgPath1: ImageExport.logo_6, imgPath2: ImageExport.logo_4, header: 'Premier Bets League', name1: 'Premier', name2: 'League', status2: 'Live', status: '21.16', data: '05/06 11:00 B03' },
  { id: 4, imgPath1: ImageExport.logo_6, imgPath2: ImageExport.logo_4, header: 'Premier Bets League', name1: 'Premier', name2: 'League', status2: 'Live', status: '21.16', data: '05/06 11:00 B03' },
]