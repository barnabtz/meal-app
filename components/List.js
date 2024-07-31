import { Text, StyleSheet, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 2,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    //textAlign: 'center',
    fontFamily: 'product-sans-regular',
    fontSize: 16,
  }
});

export default List;
