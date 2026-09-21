export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(i => <li key={i}>{i}</li>); // "...our IngredientsList should probably be the component in charge of creating this ingredients list items."
    
    return (
        (
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredients-list' aria-live='polite'>
                    {ingredientsListItems}
                </ul>
                {props.ingredients.length >= 4 && (<div className='get-recipe-container'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipeShown} type="button">Get a recipe</button>
                </div>)}
            </section>
        )
    );
}