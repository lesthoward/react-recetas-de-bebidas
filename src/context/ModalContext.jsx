import { createContext, useState, useEffect } from "react";
import axios from "axios";



export const ModalContext = createContext();
const ModalContextProvider = ({ children }) => {
	const [recipeId, setRecipeId] = useState(null);
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		const getRecipe = async () => {
			if (!recipeId) return;
			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
			const res = await axios.get(url);
			setRecipe(res.data.drinks[0]);
		};

		getRecipe();
	}, [recipeId]);

	return (
		<ModalContext.Provider
			value={{
				setRecipeId,
				recipe,
                setRecipe
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
