import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import InstructionText from "../components/game/InstructionText";
import PrimaryButton from "../components/Button";

function GameOverScreen({ roundsNum, userNum, onPress }) {
  return (
    <View style={styles.container}>
      <Title>Game is Over</Title>
      <InstructionText>
        Your phone needed <Text style={styles.highlight}>{roundsNum}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNum}</Text>
      </InstructionText>
      <PrimaryButton onPress={onPress}>Start new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  highlight: {
    color: "maroon",
  },
});

export default GameOverScreen;
