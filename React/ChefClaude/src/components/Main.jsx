export default function Main() {
    const ingredients = ['Chicken', 'Oregano', 'Tomatoes'];
    const ingredientsListItems = ingredients.map(i => <li key={i}>{i}</li>);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted!");
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get('ingredient');
        ingredients.push(newIngredient);
        console.log(ingredients);
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