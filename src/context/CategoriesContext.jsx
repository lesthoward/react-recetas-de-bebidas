import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Primero se crea el contexto
export const CategoriesContext = createContext()

// Para las funciones y el state
const CategoriesContextProvider = ({ children }) => {
	const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const res = await axios.get(url);
            setCategories(res.data.drinks);
        }

        getCategories()
    }, [])

	return (
        <CategoriesContext.Provider value={{
            categories,
            setCategories
        }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesContextProvider;