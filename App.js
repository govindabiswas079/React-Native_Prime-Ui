import React, { useState, useMemo, useEffect } from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import StackNavigation from './Navigation/StackNavigation'
import RootStackScreen from './Navigation/RootStackScreen'
import DemoStackNavigation from './Navigation/DemoStackNavigation'
import { AuthContext } from './Context/context';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [onBoard, setOnBoard] = useState(true);

  const authContext = useMemo(() => ({
    toggleRoute: async () => {
      setLogIn();
    },
    toggleOnBoarding: () => {
      setOnBoard(true)
    }
  }), []);


  const setLogIn = async () => {
    const test_data = await AsyncStorage.getItem('userToken');
    setIsLoggedIn(test_data)
    if (test_data === null) {
      setOnBoard(false);
    } else {
      setOnBoard(true);
    }
  }

  useEffect(() => {
    setLogIn();
  }, [isLoggedIn])

  return (
    <AuthContext.Provider value={authContext}>
      <NativeBaseProvider>
        <NavigationContainer>
          {onBoard === true ?
            isLoggedIn !== null ?
              < StackNavigation />
              :
              <RootStackScreen />
            :
            <DemoStackNavigation />
          }
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
};

export default App;