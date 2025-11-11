import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function TelaInicio() {
  return (
    <ImageBackground
      source={require("../../../assets/baixados.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Adega Preferida</Text>
        <Text style={styles.subtitle}>
          Aqui você encontra os melhores e mais saborosos vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
