import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/startGameScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function userNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function onStartNewHandler(){
    setGameOver(true)
    setUserNumber()
    setGuessRounds(0)
  }

  function gameOverHandler(roundNumber) {
    setGameOver(true);
    setGuessRounds(roundNumber)
  }
  let screen;
  if(!userNumber && gameOver){  screen = <StartGameScreen onUserNumber={userNumberHandler} />;}
  
  if (userNumber) {
    screen = <GameScreen userNum={userNumber} onGameOver={gameOverHandler} />;
  }

  if ((gameOver && userNumber)) {
    screen = <GameOverScreen userNum={userNumber} roundsNum={guessRounds} onPress={onStartNewHandler}/>;
  }

  return (
    <LinearGradient colors={["#DEB887", "#CD5C5C"]} style={styles.screen}>
      <ImageBackground
        source={require("./assets/pexels-photo-998679.jpeg")}
        resizeMode="cover"
        style={styles.screen}
        imageStyle={styles.imageType}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  imageType: {
    opacity: 0.25,
  },
});
