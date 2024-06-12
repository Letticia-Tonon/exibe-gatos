import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";

export default function Lista() {
  const cats = [
    {
      id: "6",
      url: "https://28.media.tumblr.com/tumblr_ks1a707b1b1qa9hjso1_1280.png",
      width: 507,
      height: 375,
    },
    {
      id: "35u",
      url: "https://cdn2.thecatapi.com/images/35u.jpg",
      width: 1024,
      height: 680,
    },
    {
      id: "7sk",
      url: "https://cdn2.thecatapi.com/images/7sk.gif",
      width: 256,
      height: 192,
    },
    {
      id: "b4u",
      url: "https://cdn2.thecatapi.com/images/b4u.gif",
      width: 500,
      height: 333,
    },
    {
      id: "b81",
      url: "https://cdn2.thecatapi.com/images/b81.jpg",
      width: 500,
      height: 327,
    },
  ];

  return (
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.id}
      data={cats}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image
            style={{ flex: 1, aspectRatio: item.width / item.height }}
            source={{
              uri: item.url,
            }}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
