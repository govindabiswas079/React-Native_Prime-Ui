import React from 'react';
import { Image, Text, View, StatusBar, Pressable, ScrollView, } from "react-native";
import ImageExport from '../constant/ImageExport';
import UserHeader from '../AppComponent/UserComponent/UserHeader'
import UserActionList from '../AppComponent/UserComponent/UserActionList'

const UserScreen = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#181a31" />
      <View style={{ flex: 1, backgroundColor: '#2d325a', }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: '#202342', paddingHorizontal: 10, paddingTop: 5 }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
              <Pressable style={{ width: 25, height: 25 }}>
                {/*  <Ionicons name='arrow-back-outline' size={25} color={'#ffffff'} /> */}
              </Pressable>
              <View style={{ flexGrow: 1 }} />
              <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Light', }}>Profile</Text>
              <View style={{ flexGrow: 1 }} />
              <Pressable onPress={() => { { } }}>
                <Image source={ImageExport.message} style={{ width: 25, height: 25 }} />
              </Pressable>
            </View>
            <View style={{ paddingTop: 20 }}>
              <UserHeader />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#2d325a', paddingHorizontal: 15, paddingTop: 15 }}>
            <UserActionList />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default UserScreen