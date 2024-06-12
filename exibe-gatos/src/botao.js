import { StyleSheet, Pressable, Text } from "react-native";

export default function Botao(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#2b3d9f" : "#3354fd" },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{props.texto}</Text>
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
