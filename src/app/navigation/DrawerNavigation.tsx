import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Matematica from '../Matematica/Matematica';
import Portugues from '../Portugues/Portugues';
import Mobile from '../Mobile/Mobile';
import Quimica from '../Quimica/Quimica';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Matematica"
      screenOptions={{
        headerStyle: { backgroundColor: '#8B0000' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#8B0000',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen 
        name="Matematica" 
        component={Matematica}
        options={{ title: 'Matemática' }}
      />

      <Drawer.Screen 
        name="Portugues" 
        component={Portugues}
        options={{ title: 'Português' }}
      />

      <Drawer.Screen 
        name="Mobile" 
        component={Mobile}
        options={{ title: 'Desenvolvimento Mobile' }}
      />

      <Drawer.Screen 
        name="Quimica" 
        component={Quimica}
        options={{ title: 'Química' }}
      />
      
    </Drawer.Navigator>
  );
}
