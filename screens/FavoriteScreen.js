import {Text, View} from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
// import {useContext} from "react";
// import {FavoriteContext} from "../store/context/favorite-context";
import {MEALS} from "../data/dummy-data";

function FavoriteScreen() {

    // const favoriteMealsCtx = useContext(FavoriteContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favorites = MEALS.filter(meal => favoriteMealIds.ids.includes(meal.id))

    if (favorites.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>No favorites added</Text>
            </View>
        );
    }

    return <MealList items={favorites}/>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontFamily: "product-bold",
        color: "white"
    }
})

export default FavoriteScreen