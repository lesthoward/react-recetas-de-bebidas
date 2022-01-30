import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
    const { recipes } = useContext(RecipeContext);
    return (  
        <>
            {
                recipes.map((recipe) => (
                    <RecipeItem
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                ))
            }
        </>
    );
}
 
export default RecipeList;