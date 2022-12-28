import React from 'react'
import { Divider } from 'native-base'
import { View, Text, Pressable, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ImageExport from '../../constant/ImageExport';

const UserActionList = () => {
  return (
    <>
      <View style={{ backgroundColor: '#202342', borderRadius: 10, }}>
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <AntDesign name='filetext1' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>My Quest</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <MaterialCommunityIcons name='file-settings-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Statics</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <Ionicons name='wallet-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Wallet</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
      </View>



      <View style={{ backgroundColor: '#202342', borderRadius: 10, marginTop: 20, marginBottom: 20 }}>
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <AntDesign name='filetext1' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>My Prediction</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <MaterialCommunityIcons name='file-settings-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Exchange History</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <Ionicons name='wallet-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Message</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <Ionicons name='wallet-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>News</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <Ionicons name='wallet-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Setting Profile</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
        <Divider style={{ backgroundColor: '#31365a' }} />
        <Pressable style={{ paddingTop: 10, paddingBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <Ionicons name='wallet-outline' size={13} color={'#ffffff'} />
          <Text style={{ color: '#ffffff', paddingLeft: 10, fontSize: 12 }}>Participate</Text>
          <View style={{ flexGrow: 1 }} />
          <Fontisto name='angle-right' color={'#ffffff'} size={13} />
        </Pressable>
      </View>
    </>
  )
}

export default UserActionList