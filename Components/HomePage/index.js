import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageBanner from "./HomepageBanner";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePageBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
