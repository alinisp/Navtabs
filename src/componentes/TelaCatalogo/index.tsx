import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function TelaCatalogo() {
  const vinhos = [
    {
      nome: "Chatigny Chardonnay",
      descricao:
        "Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
      imagem: require("../../../assets/vinho-branco.jpg"),
    },
    {
      nome: "Concha y Toro Exportacion",
      descricao:
        "Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.",
      imagem: require("../../../assets/vinho-rose.jpg"),
    },
    {
      nome: "Portada Winemaker's",
      descricao:
        "Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijos e carnes assadas ou grelhadas.",
      imagem: require("../../../assets/vinho-tinto.jpg"),
    },
    {
      nome: "Elvio Cogno Ravera Barolo",
      descricao:
        "Vinho estruturado, com sabor de cereja vermelha madura, framboesa e notas de trufas. Sua cor é rubi intensa.",
      imagem: require("../../../assets/vinho-seco.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nossos vinhos</Text>
      <Text style={styles.subtitle}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho
        rosé, vinho tinto e vinho seco.
      </Text>

      {vinhos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.imagem} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: "#333",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f4e7e7",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 150,
    resizeMode: "contain",
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
  },
});
