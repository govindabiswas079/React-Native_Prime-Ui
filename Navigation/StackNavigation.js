import React, { lazy } from 'react';
import Loadable from '../Suspense_Component/Loadable';
import BottomTabNavigation from './BottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';

const WalletScreen = Loadable(lazy(() => import('../ChaildScreen/WalletScreen')));
const AddNewPaymentCardScreen = Loadable(lazy(() => import('../ChaildScreen/AddNewPaymentCardScreen')));
const AddNewPaymentAccountScreen = Loadable(lazy(() => import('../ChaildScreen/AddNewPaymentAccountScreen')));
const BetingSportScreen = Loadable(lazy(() => import('../ChaildScreen/BetingSportScreen')));

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Root' component={BottomTabNavigation} />
        <Stack.Screen options={{ headerShown: false }} name='WalletScreen' component={WalletScreen} />
        <Stack.Screen options={{ headerShown: false }} name='AddNewPaymentCardScreen' component={AddNewPaymentCardScreen} />
        <Stack.Screen options={{ headerShown: false }} name='AddNewPaymentAccountScreen' component={AddNewPaymentAccountScreen} />
        <Stack.Screen options={{ headerShown: false }} name='BetingSportScreen' component={BetingSportScreen} />
      </Stack.Navigator>
    </>
  )
}

export default StackNavigation