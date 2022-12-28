import React, { lazy } from 'react';
import Loadable from '../Suspense_Component/Loadable';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

const OnBoarding = Loadable(lazy(() => import('../DemoScreen/OnBoarding')))


const DemoStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen options={{ headerShown: false }} name="OnBoarding" component={OnBoarding} />
    </RootStack.Navigator>
  )
}

export default DemoStackNavigation