import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import TelaInicio from "./src/Componentes/TelaInicio";
import TelaCatalogo from "./src/Componentes/TelaCatalogo";
import TelaContato from "./src/Componentes/TelaContato";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4A0000", 
          },
          headerTintColor: "#fff", 
          headerTitleAlign: "center", 
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
          tabBarStyle: {
            backgroundColor: "#4A0000",
            borderTopColor: "#4A0000",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#C9AFAF",
        }}
      >
        <Tab.Screen
          name="Início"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-bottle" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="address-book" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather } from "@expo/vector-icons";

// import TelaBiblioteca from "./src/componentes/TelaBiblioteca";
// import TelaDescricao from "./src/componentes/TelaDescricao";
// import TelaHome from "./src/componentes/TelaHome";
// import TelaRotas from "./src/componentes/TelaHome";
// import TelaInicial from "./Componentes/TelaInicial";
// import TelaPerfil from "./Componentes/TelaPerfil";


// const Tabs = createBottomTabNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tabs.Navigator>
//                 <Tabs.Screen name="Inicio" component={TelaInicial} />
//                 <Tabs.Screen name="Perfil" component={TelaPerfil} />
//             </Tabs.Navigator>
//         </NavigationContainer>
//     )
// };

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tabs.Navigator screenOptions={{ headerShown: false }}>
//                 <Tabs.Screen name="Home" component={TelaHome}
//                     options={{
//                         tabBarIcon: () => <Feather name="home" color={'blue'} size={30} />,
//                     }}
//                 />
//                 <Tabs.Screen name="Telas" component={TelaDescricao}
//                     options={{
//                         tabBarIcon: () => <Feather name="monitor" color={'blue'} size={30} />,
//                     }}
//                 />
//                 <Tabs.Screen name="Rotas" component={TelaRotas}
//                     options={{
//                         tabBarIcon: () => <Feather name="compras" color={'blue'} size={30} />,
//                     }}
//                 />
//                 <Tabs.Screen name="Biblioteca" component={TelaBiblioteca}
//                     options={{
//                         tabBarIcon: () => <Feather name="compras" color={'blue'} size={30} />,
//                     }}
//                 />
//             </Tabs.Navigator>
//         </NavigationContainer>
//     )
// };

