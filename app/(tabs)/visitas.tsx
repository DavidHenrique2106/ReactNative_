import React from "react";
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import profile from "../../assets/images/profile.png";

export default function BusinessCard() {
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profileImage} />

      <Text style={styles.name}>David Henrique Lima</Text>
      <Text style={styles.role}>Desenvolvedor Front-end JR</Text>
      <Text style={styles.techs}>React | TypeScript | Next.js | Spring Boot</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openURL("https://github.com/DavidHenrique2106")}>
          <Icon name="github" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("https://www.linkedin.com/in/david-henrique-893b6724b/")}>
          <Icon name="linkedin" size={30} color="#0e76a8" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openURL("mailto:dh210605@gmail.com")}>
          <Icon name="envelope" size={30} color="#c71610" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.desc}>
          Sou um desenvolvedor web com forte expertise em Next.js e FastAPI com Python,{"\n"}
          criando aplicações escaláveis e performáticas. Possuo domínio em JavaScript/TypeScript{"\n"}
          e experiência sólida com React e Angular no front-end. No back-end, além de FastAPI,{"\n"}
          tenho conhecimentos em Node.js e Spring Boot, desenvolvendo APIs robustas e seguras.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A020F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  role: {
    fontSize: 16,
    color: "#ddd",
  },
  techs: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  descContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  desc: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});
