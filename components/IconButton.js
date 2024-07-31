import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      style={[styles.embedded, ({ pressed }) => pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.25 },
  embedded: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default IconButton;
