import React, { useContext } from 'react';
import { Image, Text, View, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradient from 'react-native-linear-gradient';

import { AuthContext } from '../Context/context';

const OnBoarding = () => {

  const { toggleOnBoarding } = useContext(AuthContext);

  const onDone = () => {
    toggleOnBoarding();
  };
  const onSkip = () => {
    toggleOnBoarding();
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#202342" />
      <AppIntroSlider
        keyExtractor={(item) => item.key}
        renderItem={RenderItem}
        data={slides}
        activeDotStyle={{ backgroundColor: "#13e8cf", width: 25, height: 9, position: 'relative', top: -50 }}
        dotStyle={{ backgroundColor: 'gray', position: 'relative', top: -50 }}
        renderDoneButton={DoneButton}
        renderNextButton={NextButton}
        renderSkipButton={SkipButton}
        showNextButton={true}
        showDoneButton={true}
        showSkipButton={true}
        onDone={() => onDone()}
        onSkip={() => onSkip()}
      />
    </>
  )
}

export default OnBoarding;




const slides = [
  {
    key: 1,
    title: "Your World of bets",
    text:
      "Bet on matches, compete with your friends and win money!",
    image: require("../assets/image/onbonding1.png"),
    backgroundColor: '#202342',
  },
  {
    key: 2,
    title: "It's time to Win",
    text:
      "With all the inforamtion you need, you can start playing and winning. Good Luck",
    image: require("../assets/image/onbonding2.png"),
    backgroundColor: '#202342',
  },
  {
    key: 3,
    title: "Win Glorious prizes!",
    text:
      "Ready to challenge players from all over the world in the ultimate betting contest?Bet for FREE on sport and eSports and compete for 12 MILLION Bether in prizes!",
    image: require("../assets/image/onbonding3.png"),
    backgroundColor: '#202342',
  },
];

const RenderItem = ({ item }) => {
  return (
    <>
      <View style={{ flex: 1, }}>
        <LinearGradient colors={[item.backgroundColor, item.backgroundColor, '#000000']} style={{ flex: 1 }}>
          <View>
            <Image
              source={item.image}
              style={{
                resizeMode: "cover",
                height: "73%",
                width: "100%",
              }}
            />
            <Text
              style={{
                paddingTop: 25,
                paddingBottom: 10,
                fontSize: 26,
                fontWeight: "bold",
                color: "#ffffff",
                alignSelf: "center",
              }}
            >
              {item.title}
            </Text>

            <Text style={{
              textAlign: "center",
              color: "#ffffff",
              fontSize: 10,
              paddingHorizontal: 30
            }}>
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};


const DoneButton = () => {
  return (
    <>
      <View style={{ backgroundColor: 'purple', width: 70, borderRadius: 50, paddingTop: 2, paddingBottom: 2, }}>
        <Text style={{ color: '#ffffff', textAlign: 'center' }}>Start</Text>
      </View>
    </>
  )
}
const NextButton = () => {
  return (
    <>
      <View style={{ backgroundColor: 'purple', width: 70, borderRadius: 50, paddingTop: 2, paddingBottom: 2, }}>
        <Text style={{ color: '#ffffff', textAlign: 'center' }}>Next</Text>
      </View>
    </>
  )
}
const SkipButton = () => {
  return (
    <>
      <View>
        <Text style={{ color: '#ffffff' }}>Skip this</Text>
      </View>
    </>
  )
}