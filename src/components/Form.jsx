import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipeContext } from "../context/RecipeContext";

const Form = () => {
	const { categories } = useContext(CategoriesContext);
	const { setSearchData } = useContext(RecipeContext);

	const [formValues, setFormValues] = useState({
		ingredient: "",
		category: "",
	});

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchData(formValues);
    }

    // When data is loaded, set the select value to the respective value of the form
    useEffect(() => {
        const updateSelectValue = () => {
            const select = document.getElementById("category");
            handleChange({ target: select});
        }

        updateSelectValue();
    }, [categories]);

	return (
		<form className="col-12" onSubmit={handleSubmit}>
			<fieldset className="text-center">
				<legend>Realice una búsqueda por categorías o ingredientes en inglés</legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						type="text"
						name="ingredient"
						placeholder="Ingrediente"
						className="form-control"
						onChange={handleChange}
					/>
				</div>
				<div className="col-md-4">
					<select
						name="category"
						placeholder="Categoría"
						className="form-control"
                        onChange={handleChange}
                        id="category"
					>
						{categories.map((category) => (
							<option
								key={category.strCategory}
								value={category.strCategory}
							>
								{category.strCategory}
							</option>
						))}
					</select>
				</div>

				<div className="col-md-4">
					<input
						type="submit"
						className="btn btn-block btn-danger"
						value="Buscar bebidas"
					/>
				</div>
			</div>
		</form>
	);
};

export default Form;
