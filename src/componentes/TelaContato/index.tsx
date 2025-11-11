import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Feather, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function TelaContato() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      <View style={styles.card}>
        <Feather name="phone" size={30} color="#4A0000" />
        <Text style={styles.cardTitle}>Telefone:</Text>
        <Text style={styles.cardText}>+55 21 000000000</Text>
      </View>

      <View style={styles.card}>
        <Feather name="map-pin" size={30} color="#4A0000" />
        <Text style={styles.cardTitle}>Endereço:</Text>
        <Text style={styles.cardText}>Av. 123, 222 - Rio de Janeiro RJ</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome name="envelope" size={30} color="#4A0000" />
        <Text style={styles.cardTitle}>Email:</Text>
        <Text style={styles.cardText}>preferida@adega.com.br</Text>
      </View>

      <View style={styles.card}>
        <FontAwesome5 name="instagram" size={30} color="#4A0000" />
        <Text style={styles.cardTitle}>Instagram:</Text>
        <Text style={styles.cardText}>@adegapreferida</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 15,
    width: "85%",
    alignItems: "center",
    marginBottom: 15,
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#4A0000",
    fontSize: 16,
    marginTop: 5,
  },
  cardText: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
