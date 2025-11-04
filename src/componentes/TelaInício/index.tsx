import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como navegar?</Text>
      <Text style={styles.text}>
        Toque nas abas abaixo para navegar entre as telas.
      </Text>
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