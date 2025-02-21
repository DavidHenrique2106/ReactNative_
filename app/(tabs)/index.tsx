import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Unicap - Marcio - 21/02/2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff", 
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000", 
  },
});
