import { StyleSheet, View, Text } from "react-native";

function MealDetails({duration, complexity, affordability, style}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItems, style]}>{duration}m</Text>
      <Text style={[styles.detailItems, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItems, style]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 16,
    fontFamily: "product-sans-regular",
  },
});

export default MealDetails;
