import {createContext} from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    deleteFavorite: (id) => {
    }
});

function FavoriteContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentMealIds) => [...currentMealIds, id])
    }

    function deleteFavorite(id) {
        setFavoriteMealIds((currentMealIds) => currentMealIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favariteMealIds,
        addFavorite: addFavorite,
        deleteFavorite: deleteFavorite
    }

    return <FavoriteContextProvider value={value}>{children}</FavoriteContextProvider>
}

export default FavoriteContextProvider
