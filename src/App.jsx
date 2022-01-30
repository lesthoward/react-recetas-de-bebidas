import Form from "./components/Form";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import CategoriesContextProvider from "./context/CategoriesContext";
import ModalContextProvider from "./context/ModalContext";
import RecipeContextProvider from "./context/RecipeContext";

const App = () => {
    return ( 
        <>
            <CategoriesContextProvider>
                <RecipeContextProvider>
                    <ModalContextProvider>

                    <Header/>

                    <div className="container mt-5">
                        <div className="row">
                            <Form/>
                        </div>

                        <div className="row mt-4">
                            <RecipeList/>
                        </div>
                    </div>
                    </ModalContextProvider>
                </RecipeContextProvider>
            </CategoriesContextProvider>
        </>
    );
}
 
export default App;