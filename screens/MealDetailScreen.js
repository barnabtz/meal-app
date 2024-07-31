import {useLayoutEffect} from "react";
import {StyleSheet, Button, Text, Image, ScrollView} from "react-native";

import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitleContainer from "../components/SubTitleContainer";
import List from "../components/List";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";

// import {FavoriteContext} from "../store/context/favorite-context";
import { addFavorite, deleteFavorite } from "../store/redux/favorite";

function MealDetailScreen({route, navigation}) {
    // const favoriteMealsCtx = useContext(FavoriteContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.ids.includes(mealId);

    function headerButtonPressHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.deleteFavorite(mealId)
            dispatch(deleteFavorite({ id: mealId }))
        } else {
            // favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    color="black"
                    icon={mealIsFavorite ? "star" : "bookmark"}
                    onPress={headerButtonPressHandler}
                />
            }
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
            />
            <Subtitle style={styles.detailTitle}>Ingredients</Subtitle>
            <SubTitleContainer>
                <List data={selectedMeal.ingredients}/>
            </SubTitleContainer>
            <Subtitle style={styles.detailTitle}>Steps</Subtitle>
            <SubTitleContainer style={styles.subtitleContainer}>
                <List data={selectedMeal.steps}/>
            </SubTitleContainer>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {marginBottom: 16},
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    buttonPressed: {
        opacity: 0.25,
        // color: color
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        margin: 10,
        fontFamily: "product-sans-bold",
    },
    detailTitle: {
        fontSize: 25,
        fontFamily: "product-sans-bold",
        textAlign: "center",
        margin: 16,
        paddingBottom: 16,
    },
});

export default MealDetailScreen;
