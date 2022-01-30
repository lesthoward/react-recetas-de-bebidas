import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 600,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
        overflow: "auto",
        maxHeight: "80vh"
	},
}));

const RecipeItem = ({ recipe }) => {
    const { recipe: recipeData ,setRecipeId, setRecipe } = useContext(ModalContext);

    // Modal material-ui
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
    const classes = useStyles()
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const listingIngredients = (recipeData) => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (recipeData[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {recipeData[`strIngredient${i}`]} - {recipeData[`strMeasure${i}`]}
                    </li>
                );
            }
        }
        return ingredients;
    }

	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header">{recipe.strDrink}</h2>
				<img
					className="card-img-top"
					src={recipe.strDrinkThumb}
					alt={`Imagen de ${recipe.strDrink}`}
				/>
				<div className="card-body">
					<button
						className="btn btn-block btn-danger"
						onClick={() => {
							setRecipeId(recipe.idDrink);
							handleOpen();
						}}
					>
						Ver receta
					</button>

					<Modal
						open={open}
						onClose={() => {
							setRecipeId(null);
							setRecipe({});
							handleClose();
						}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h2>{recipeData.strDrink}</h2>
							<h3 className="mt-4">Instrucciones</h3>
							<p>{recipeData.strInstructions}</p>
							<img
								className="img-fluid my-4"
								src={recipeData.strDrinkThumb}
								alt={`Imagen de ${recipeData.strDrink}`}
							/>
							<h3>Ingredientes</h3>
							<ul>{listingIngredients(recipeData)}</ul>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
