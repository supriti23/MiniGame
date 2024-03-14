import { View, Text, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
  },
});
