import React from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const OFFERS_DATA = {
  1: {
    title: "Free standard delivery when you spend SAR 250",
    logo:
      "https://d2uggyutfsfn7b.cloudfront.net/pub/media/banners/default/LEGO_Delivery.png",
    url: "delivery-information",
    url_title: "Learn More",
  },
  2: {
    title: "10% off your first order - use code FIRST10",
    logo:
      "https://d2uggyutfsfn7b.cloudfront.net/pub/media/banners/default/new_blocks.jpeg",
    url: null,
    url_title: null,
  },
  3: {
    title: null,
    logo: null,
    url: null,
    url_title: "Learn More",
  },
  4: {
    title: null,
    logo: null,
    url: null,
    url_title: null,
  },
  5: {
    title: null,
    logo: null,
    url: null,
    url_title: null,
  },
};

export default function TopHeader() {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideImg}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.logo,
            }}
          />
        </View>
        <View style={styles.slideText}>
          <Text style={styles.title}>{item.title}</Text>
          <Pressable onPress={() => console.log("clicked")}>
            <Text style={styles.PressableText}>{item.url_title}</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={Object.values(OFFERS_DATA).filter((item) => item.title)}
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
    maxHeight: 70,
    backgroundColor: "#fff",
  },
  slide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  tinyLogo: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  slideText: {
    display: "flex",
    alignItems: "center",
  },
  PressableText: {
    color: "#006db7",
  },
});
