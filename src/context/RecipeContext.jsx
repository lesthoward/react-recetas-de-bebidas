import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();
const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [searchData, setSearchData] = useState({});

    useEffect(() => {
        const getRecipes = async () => {
            if(!Object.keys(searchData).length) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchData.category}${searchData.ingredient ? `&i=${searchData.ingredient}` : ''}`;
            const res = await axios.get(url);
            setRecipes(res.data.drinks)
        }

        getRecipes()
    }, [searchData])
    return (
        <RecipeContext.Provider value={{
            setSearchData,
            recipes
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;