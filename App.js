import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import TopHeader from "./Components/TopHeader";
import SecondHeader from "./Components/SecondHeader";
import OffersSlider from "./Components/OffersSlider";
import HomePage from "./Components/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <TopHeader />
      <SecondHeader />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <OffersSlider />
          <HomePage />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});
