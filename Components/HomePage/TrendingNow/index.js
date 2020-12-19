import { Fontisto } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomepageJson } from "../homepageJson";

const { SECTION3 } = HomepageJson;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.trendingTitle}>Trending Now</Text>

      {Object.values(SECTION3).map((item, index) => {
        if (item.heading)
          return (
            <View key={index} style={styles.offer}>
              <Image style={styles.offerImg} source={{ uri: item.image }} />
              <Text style={styles.offerTitle}>{item.heading}</Text>
              <Text style={styles.offerDesc}>{item.btndesc}</Text>
              <TouchableOpacity
                onPress={() => console.log("clicked")}
                style={styles.bannerButton}
              >
                <Text style={styles.offerDesc}>
                  {item.btntext}
                  &nbsp;
                  <Fontisto name="angle-right" size={15} />
                </Text>
              </TouchableOpacity>
            </View>
          );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  trendingTitle: {
    alignSelf: "flex-start",
    fontSize: 22,
    fontWeight: "bold",
  },
  offer: {
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  offerImg: {
    height: Dimensions.get("window").width - 40,
    width: Dimensions.get("window").width - 40,
    marginBottom: 10,
  },
  offerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bannerButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});
