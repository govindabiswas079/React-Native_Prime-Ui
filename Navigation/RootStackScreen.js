import React, { lazy } from 'react';
import Loadable from '../Suspense_Component/Loadable';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

const LogInScreen = Loadable(lazy(() => import('../RootScreen/LogInScreen')))
const SignUpScreen = Loadable(lazy(() => import('../RootScreen/SignUpScreen')))
const ForgotPasseordScreen = Loadable(lazy(() => import('../RootScreen/ForgotPasseordScreen')))
const ResetPasswordScreen = Loadable(lazy(() => import('../RootScreen/ResetPasswordScreen')))

const RootStackScreen = ({ navigationn }) => {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen options={{ headerShown: false }} name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen options={{ headerShown: false }} name="ForgotPasseordScreen" component={ForgotPasseordScreen} />
        <RootStack.Screen options={{ headerShown: false }} name="ResetPasswordScreen" component={ResetPasswordScreen} />
      </RootStack.Navigator>
    </>
  )
}

export default RootStackScreen