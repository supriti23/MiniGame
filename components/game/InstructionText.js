import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
