import '../config/parseConfig';

import { StyleSheet, View, Text, Image } from "react-native"; 
import profile from '../../assets/images/profile.png'; 
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Unicap - Marcio - 11/03/2025</Text>
        <Image source={profile} style={styles.profileImage} /> 
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
  profileImage: {
    width: 80, 
    height: 100, 
    borderRadius: 50, 
    marginTop: 80, 
  }
});
