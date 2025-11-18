import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Matematica() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Matemática – 3º Ano do Ensino Médio</Text>

      <Text style={styles.text}>
        No 3º ano, a Matemática prepara para vestibulares, ENEM e para 
        situações cotidianas que exigem raciocínio lógico e interpretação.
      </Text>

      <Text style={styles.subtitle}>Funções</Text>
      <Text style={styles.text}>
        Estudamos funções afim, quadrática e exponencial, seus gráficos e 
        aplicações no dia a dia.
      </Text>

      <Text style={styles.subtitle}>Probabilidade e Combinatória</Text>
      <Text style={styles.text}>
        Permutações, arranjos e combinações, além de cálculo da chance 
        de eventos ocorrerem.
      </Text>

      <Text style={styles.subtitle}>Geometria Espacial</Text>
      <Text style={styles.text}>
        Volume, área e análise de formas tridimensionais como prismas, 
        pirâmides e esferas.
      </Text>
    </ScrollView>
  );
}
