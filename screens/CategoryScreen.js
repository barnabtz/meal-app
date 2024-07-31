import { View, Text, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

function CategoryScreen({ navigation }) {

  function renderCatergoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatergoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
