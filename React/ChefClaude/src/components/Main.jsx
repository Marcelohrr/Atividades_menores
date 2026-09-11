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

            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    );
}