import { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(i => <li key={i}>{i}</li>);

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <label htmlFor="ingredient">Add ingredient:</label>
                <input type="text" name="ingredient" id="ingredient" required placeholder="e.g. oregano" />
                <button type="submit">Add ingredient</button>
            </form>

            {
                ingredients.length === 0 ? null :
                    <section>
                        <h2>Ingredients on hand:</h2>
                        <ul className='ingredients-list' aria-live='polite'>
                            {ingredientsListItems}
                        </ul>
                        <div className='get-recipe-container'>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    </section>
            }
        </main>
    );
}