import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";

export default function TopHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.MenuButtonView}>
        <View style={styles.Line}></View>
        <View style={styles.Line}></View>
        <Text>MENU</Text>
      </View>
      <View style={styles.LogoText}>
        <Text style={styles.LogoTextMain}>LEGO® Certified Store</Text>
      </View>
      <View style={styles.HeaderIcons}>
        <View style={styles.IconsView}>
          <Text>العربية</Text>
        </View>
        <View style={styles.IconsView}>
          <Image style={styles.tinyLogo} source={logo} />
        </View>
        <View style={styles.IconsView}>
          <Image style={styles.tinyLogo} source={heart} />
          <View style={styles.badge}>
            <Text>0</Text>
          </View>
        </View>
        <View style={styles.IconsView}>
          <Image style={styles.tinyLogo} source={cart} />
          <View style={styles.badge}>
            <Text>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
  },
  MenuButtonView: {
    marginHorizontal: 10,
  },
  Line: {
    backgroundColor: "#000",
    height: 3,
    marginVertical: 1.5,
  },
  LogoText: {
    flex: 4,
  },
  LogoTextMain: {
    fontWeight: "700",
  },
  HeaderIcons: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  IconsView: {
    marginHorizontal: 5,
    position: "relative",
  },
  tinyLogo: {
    height: 30,
    width: 30,
  },
  badge: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 18,
    width: 18,
    borderRadius: 20,
    backgroundColor: "#ffcf00",
    bottom: -4,
    right: -2,
  },
});
