import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";
import aleatorio from './atividadeNumAleatorio';
import cartao from './visitas';
import tarefa from './marcioBack4app'


const Drawer = createDrawerNavigator();

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#214cce" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#214cce",
      }}
    >
      <Drawer.Screen name="AT -> Número aleatório" component={aleatorio} />
      <Drawer.Screen name="AT -> Cartão de visitas" component={cartao} />
      <Drawer.Screen name="AT -> Tarefas" component={tarefa} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
