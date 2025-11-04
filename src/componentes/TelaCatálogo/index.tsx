import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaDescricao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nomes das telas</Text>
      <Text style={styles.text}>
        Perceba que cada aba representa uma tela do aplicativo.
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