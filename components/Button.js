import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.PressableContainer}
        onPress={onPress}
        android_ripple={{ color: "pale yellow" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    elevation: 2,
    backgroundColor: "grey",
    borderRadius: 28,
    overflow: "hidden",
  },
  PressableContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
