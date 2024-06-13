import { StyleSheet, Pressable, Text } from "react-native";
import axios from "axios";
import { API_KEY } from "@env";

export default function Botao({ texto, setCats }) {
  return (
    <Pressable
      onPress={async () => {
        const res = (
          await axios.get(
            `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${API_KEY}`
          )
        ).data;
        setCats(res);
      }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#2b3d9f" : "#3354fd" },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: 10,
    outlineStyle: "none",
  },
  text: {
    fontSize: 21,
    color: "#fdf429",
    fontWeight: "bold",
  },
});
