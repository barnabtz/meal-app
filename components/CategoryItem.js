import { Pressable, StyleSheet, View, Platform, Text } from "react-native";

function CategoryItem({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={onPress} android_ripple={{color: '#ccc'}} style={ ({pressed}) => [styles.button, pressed ? [styles.buttonPressed, { color: color}] : null]}>
        <View style={[styles.innerContainer, {backgroundColor: color,}]}>
          <Text style={styles.catText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.25,
    // color: color
  },
  catText: {
    fontFamily: "product-sans-bold",
    fontSize: 20,
  },
  button: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default CategoryItem;
