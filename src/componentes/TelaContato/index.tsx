import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaBiblioteca() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual biblioteca usamos?</Text>
      <Text style={styles.text}>
        Das bibliotecas que utilizamos podemos destacar duas:
      </Text>
      <Text style={styles.text}>@react-navigation/native</Text>
      <Text style={styles.text}>@react-navigation/bottom-tabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});