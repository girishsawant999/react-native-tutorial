import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageBanner from "./HomepageBanner";
import ExclusiveOffer from "./ExclusiveOffer";
import TrendingNow from "./TrendingNow";
import FeaturedSet from "./FeaturedSet";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePageBanner />
      <ExclusiveOffer />
      <TrendingNow />
      <FeaturedSet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
