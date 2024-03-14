import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ roundNum, guessNum }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNum}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guessNum}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "grey",
  },
  itemText: {
    font: 15,
    color: "white",
  },
});
