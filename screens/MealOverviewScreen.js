import { useLayoutEffect } from "react";
import { StyleSheet} from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerTitleStyle: { fontFamily: "product-sans-bold" },
    });
  }, [catId, navigation]);

  return <MealList items={displayMeal} />
}

export default MealOverviewScreen;
