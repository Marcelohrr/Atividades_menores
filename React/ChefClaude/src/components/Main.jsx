import { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map(i => <li key={i}>{i}</li>);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        e.currentTarget.reset();
    }

    return (
        <main>
            <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
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