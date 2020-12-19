import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import logoMain from "../../assets/logo-main.png";
import { FontAwesome } from "@expo/vector-icons";

export default function TopHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logoMain}></Image>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.TextInput} placeholder="Search.." />
        <View style={styles.searchIcon}>
          <FontAwesome name="search" size={24} color="#006db7" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 80,
    backgroundColor: "#ffcf00",
  },
  logo: { flex: 2, justifyContent: "center", alignItems: "center" },
  search: {
    flex: 8,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: "center",
    position: "relative",
  },
  TextInput: {
    fontWeight: "600",
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    top: 10,
  },
});
