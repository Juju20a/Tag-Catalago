import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Importando as telas
import CatalogoScreen from './screens/CatalogoScreen';
import DetalhesDoceScreen from './screens/DetalhesDoceScreen';
import LojaDeDocesScreen from './screens/LojaDeDocesScreen';  

// Navegadores
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tela Home
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem vindo à loja algodão doce 🏠</Text>
    </View>
  );
}

// Tabs principais do app
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Doces') {
            iconName = 'storefront';
          } else if (route.name === 'Catálogo') {
            iconName = 'cafe';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Doces" component={LojaDeDocesScreen} />
      <Tab.Screen name="Catálogo" component={CatalogoScreen} />
    </Tab.Navigator>
  );
}

// App principal com Stack para Detalhes
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="DetalhesDoce"
          component={DetalhesDoceScreen}
          options={{ title: 'Detalhes do Doce' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
