import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function Mobile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Desenvolvimento Mobile</Text>

      <Text style={styles.text}>
        Estuda a criação de aplicativos para celulares usando tecnologias 
        como React Native e Expo.
      </Text>

      <Text style={styles.subtitle}>O que aprendemos</Text>
      <Text style={styles.text}>
        • Componentes{"\n"}
        • Estilos{"\n"}
        • Navegação{"\n"}
        • Hooks{"\n"}
        • APIs
      </Text>
    </ScrollView>
  );
}
