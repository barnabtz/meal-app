import { StyleSheet, View } from "react-native";

function SubTitleContainer({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "gray",
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
});

export default SubTitleContainer;
