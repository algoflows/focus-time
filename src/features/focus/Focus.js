import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../components/RoundedButton";

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput />
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

export default Focus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    padding: 20,
    flexDirection: "row",
  },
});
