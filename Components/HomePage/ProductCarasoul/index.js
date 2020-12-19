import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import heart from "../../../assets/heart.png";

export default function TopHeader({ products }) {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideImg}>
          <TouchableOpacity
            onPress={() => console.log("clicked")}
            style={styles.wishlistIcon}
          >
            <Image style={styles.wishlistIconImg} source={heart} />
          </TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.imageUrl,
            }}
          />
        </View>
        <View style={styles.slideText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.sku}>{item.lego_id}</Text>
          <Text style={styles.price}>
            {item.currency}&nbsp;{item.product_price}
          </Text>
          <TouchableOpacity
            style={styles.addToBagButton}
            onPress={() => console.log("clicked")}
          >
            <Text style={styles.PressableText}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={products}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width}
        loop={true}
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
    backgroundColor: "#fff",
    marginBottom: 50,
  },
  slide: {
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  slideImg: {
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: "relative",
    width: Dimensions.get("window").width - 100,
  },
  wishlistIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: "#f8f8f8",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  wishlistIconImg: {
    height: 30,
    width: 30,
  },
  tinyLogo: {
    height: Dimensions.get("window").width - 140,
    width: Dimensions.get("window").width - 140,
    marginRight: 10,
    resizeMode: "stretch",
  },
  slideText: {
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  sku: {
    fontSize: 16,
    marginVertical: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 10,
  },
  addToBagButton: {
    width: Dimensions.get("window").width - 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fd8024",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "center",
  },
  PressableText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
