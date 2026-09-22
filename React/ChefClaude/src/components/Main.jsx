import { useState } from 'react';
import IngredientsList from './IngredientsList.jsx';
import GastroRecipe from './GastroRecipe.jsx';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipe, setRecipe] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    async function toggleRecipeShown() {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/generate-recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ingredients: ingredients
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao gerar receita.');
            }

            setRecipe(data.recipe);
            setRecipeShown(true);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
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
                    isLoading={isLoading}
                />
            }

            {error && (
                <p role="alert">
                    {error}
                </p>
            )}

            {recipeShown === true &&
                <GastroRecipe recipe={recipe} />
            }
        </main>
    );
}