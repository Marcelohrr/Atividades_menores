import { useState } from 'react';
import IngredientsList from './IngredientsList.jsx';
import ClaudeRecipe from './ClaudeRecipe.jsx';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [recipeShown, setRecipeShown] = useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => (!prevRecipeShown));
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <label htmlFor="ingredient">Add ingredient:</label>
                <input type="text" name="ingredient" id="ingredient" required placeholder="e.g. oregano" />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

            {recipeShown === true && <ClaudeRecipe />}
        </main>
    );
}