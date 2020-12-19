import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomepageJson } from "../homepageJson";
import ProductCarasoual from "../ProductCarasoul";

const { SECTION4 } = HomepageJson;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Set</Text>
      <ProductCarasoual products={Object.values(SECTION4.product_data)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 30,
  },
});
