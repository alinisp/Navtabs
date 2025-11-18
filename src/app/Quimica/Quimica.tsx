import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Quimica() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Química – Conceitos Essenciais</Text>

      <Text style={styles.text}>
        A química estuda a matéria, suas transformações e como as substâncias 
        interagem no mundo físico.
      </Text>

      <Text style={styles.subtitle}>Ligações Químicas</Text>
      <Text style={styles.text}>
        Iônicas, covalentes e metálicas, além de suas propriedades.
      </Text>

      <Text style={styles.subtitle}>Reações Químicas</Text>
      <Text style={styles.text}>
        Identificação, balanceamento e tipos de reações.
      </Text>

      <Text style={styles.subtitle}>Estequiometria</Text>
      <Text style={styles.text}>
        Cálculos envolvendo massa, mol, volume e relações entre reagentes.
      </Text>
    </ScrollView>
  );
}
