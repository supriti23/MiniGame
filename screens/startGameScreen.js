import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/Button";
import { useState } from "react";
import Title from "../components/Title";

function StartGameScreen({ onUserNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height, width } = useWindowDimensions();

  function nmberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  function onConfirmHandler() {
    const chosenNumber = Number(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number should be anythig between 1 to 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
    }
    onUserNumber(chosenNumber);
  }

  const marginTop = height < 450 ? 70 : 150;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.inputContainer, { marginTop: marginTop }]}>
          <Title>Guess my Number</Title>
          <TextInput
            style={styles.numerInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={nmberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#72063c",
    elevation: 15, // adds shadow only to android
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 45 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  numerInput: {
    alignItems: "center",
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "#ddb527",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
