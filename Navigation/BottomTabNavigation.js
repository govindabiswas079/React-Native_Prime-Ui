import React, { lazy, Fragment } from 'react';
import Loadable from '../Suspense_Component/Loadable';
import ImageExport from '../constant/ImageExport';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const MatchesScreen = Loadable(lazy(() => import('../AppScreen/MatchesScreen')));
const SportScreen = Loadable(lazy(() => import('../AppScreen/SportScreen')));
const InplayScreen = Loadable(lazy(() => import('../AppScreen/InplayScreen')));
const UserScreen = Loadable(lazy(() => import('../AppScreen/UserScreen')));

const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
  return (
    <Fragment>
      <Tab.Navigator
        tabBarHideOnKeyboard={true}
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#fc03e3',
          tabBarStyle: { backgroundColor: '#202342', borderTopColor: '#202342' },
        }}
      >
        <Tab.Screen
          name="MatchesScreen"
          component={MatchesScreen}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Matches',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image source={ImageExport.matches} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen
          name="SportScreen"
          component={SportScreen}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Sport',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image source={ImageExport.sports} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen
          name="InplayScreen"
          component={InplayScreen}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Inplay',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image source={ImageExport.inplay} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'User',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image source={ImageExport.icon_profile} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  )
}

export default BottomTabNavigation