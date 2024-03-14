import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/Button";
import InstructionText from "../components/game/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    generateRandomBetween(max, min, exclude);
  } else {
    return randNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNum, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  function nextGuessHandler(direction) {
    // lower or higher
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "greater" && currentGuess > userNum)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
      generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    } else {
      minBoundary = currentGuess + 1;
      generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    }
    const newRandNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandNum);
    setGuessRounds((prevGuessRounds) => [newRandNum, ...prevGuessRounds]);
  }

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNum, onGameOver]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  return (
    <View styles={styles.screen}>
      <View style={styles.title}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View>
        <InstructionText style={{ marginBottom: 20 }}>
          Higher or lower?
        </InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color={"whilte"} />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color={"whilte"} />
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              key={itemData.index}
              guessNum={itemData.item}
              roundNum={Number(guessRounds.length) - itemData.index}
            />
          )}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },
  listContainer: {
    // flex: 1,
    padding: 16,
  },
});
