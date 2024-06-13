import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";

export default function Lista({ cats }) {
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
