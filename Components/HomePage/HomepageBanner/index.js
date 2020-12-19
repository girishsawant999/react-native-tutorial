import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { HomepageJson } from "../homepageJson";
import { Fontisto } from "@expo/vector-icons";

const { SECTION1 } = HomepageJson;
console.log("SECTION1 :>> ", SECTION1);

export default function TopHeader() {
  const _renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <View style={styles.slide}>
        <View style={styles.slideImg}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.imgmobile,
            }}
          />
        </View>
        <View style={[styles.slideText, { backgroundColor: item.bgmobile }]}>
          <Text style={[styles.title, { color: item.desccolor }]}>
            {item.title}
          </Text>
          <Text style={[styles.desc, { color: item.desccolor }]}>
            {item.content}
          </Text>
          <TouchableOpacity
            onPress={() => console.log("clicked")}
            style={[styles.bannerButton, { backgroundColor: item.btncolor }]}
          >
            <Text style={{ color: item.btntextcolor, fontSize: 16 }}>
              {item.btntext}
              &nbsp;
              <Fontisto name="angle-right" size={15} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={Object.values(SECTION1).filter((item) => item.title)}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        loop={true}
        autoplay={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height - 200,
    backgroundColor: "#fff",
  },
  slide: {
    height: Dimensions.get("window").height - 200,
    width: Dimensions.get("window").width,
  },
  tinyLogo: {
    height: Dimensions.get("window").height - 400,
    width: Dimensions.get("window").width,
    marginRight: 10,
  },
  slideText: {
    height: 200,
    width: Dimensions.get("window").width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },
  bannerButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 4,
  },
});
