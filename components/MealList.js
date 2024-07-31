import {FlatList, StyleSheet, View} from "react-native";

import MealItem from "./MealItem";

function MealList({items}) {
    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <MealItem {...mealItemProps} />;
    }

    return (
        <View>
            <FlatList
                data={item}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MealList