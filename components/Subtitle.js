import { StyleSheet, Text } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 25,
    fontFamily: "product-sans-bold",
    marginHorizontal: 24,
    marginVertical: 10,
    textAlign: 'center'
  },
});

export default Subtitle;
