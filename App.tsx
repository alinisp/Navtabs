import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import TelaHome from "./src/componentes/TelaHome";
import TelaDescricao from "./src/componentes/TelaDescricao";
import TelaRotas from "./src/componentes/TelaRotas";
import TelaBiblioteca from "./src/componentes/TelaBiblioteca";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="Home"
          component={TelaHome}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="Telas"
          component={TelaDescricao}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="monitor" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="Rotas"
          component={TelaRotas}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="map" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="Biblioteca"
          component={TelaBiblioteca}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="book" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
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

