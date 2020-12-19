import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { HomepageJson } from "../homepageJson";

const { SECTION2 } = HomepageJson;

export default function App() {
  return (
    <View style={styles.container}>
      {Object.values(SECTION2).map((item, index) => {
        if (item.heading)
          return (
            <View key={index} style={styles.offer}>
              <Image style={styles.offerImg} source={{ uri: item.image }} />
              <Text style={styles.offerText}>{item.heading}</Text>
            </View>
          );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  offer: {
    height: 80,
    width: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  offerImg: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
});
