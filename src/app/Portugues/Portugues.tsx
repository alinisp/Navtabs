import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Portugues() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Português – Interpretação e Gramática</Text>

      <Text style={styles.text}>
        A disciplina trabalha leitura crítica, compreensão de textos e 
        análise da estrutura da língua.
      </Text>

      <Text style={styles.subtitle}>Interpretação de Texto</Text>
      <Text style={styles.text}>
        Habilidades essenciais para provas como ENEM: dedução, inferência, 
        identificação de ideias e tons.
      </Text>

      <Text style={styles.subtitle}>Gramática</Text>
      <Text style={styles.text}>
        Uso correto de pronomes, concordância, regência e classes gramaticais.
      </Text>

      <Text style={styles.subtitle}>Produção Textual</Text>
      <Text style={styles.text}>
        Desenvolvimento da escrita, coesão e coerência, argumentação e 
        estrutura de redação.
      </Text>
    </ScrollView>
  );
}
