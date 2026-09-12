// import { useState } from 'react';

export default function App() {
    function signUp(formData) { // "...when you're passing a function to your action, it doesn't receive an event, because we're not handling an event per se, but instead it's just automatically going to receive the form data. This is awesome!"
        // event.preventDefault(); — "Behind the scenes, the action function is going to prevent the default for us, so we can get rid of that."
        /*
        "These next two lines of code where us trying to get access to the form data, which it's already giving us, so we can get rid of both of those."

        const formElement = event.currentTarget;
        const formData = new FormData(formElement);
        */
    const email = formData.get('email');
       // formElement.reset(); — "And it's going to reset the form for us automatically, so I can get rid of that!"
        const password = formData.get('password');

        const employmentStatus = formData.get('employmentStatus');
        console.log(employmentStatus);

        const dietaryRestrictions = formData.getAll('dietaryRestrictions'); // To get an array with all of the checked values
        console.log(dietaryRestrictions);

        const favoriteColor = formData.get('favoriteColor');
        console.log(favoriteColor);
    }
    
        // "...we had [<form method="POST">], but if we're specifying a function in the action, then we don't need to do that manually." — Aqui action não é mais uma URL. Quando esse formulário for enviado, será executada a função signUp e o React trata o envio do formulário através dessa função.
    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder="joe@schmoe.com" defaultValue="joe@schmoe.com" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>

                <fieldset>
                    <legend>Employment Status</legend>

                    <input type="radio" name="employmentStatus" id="unemployed" value="unemployed" />
                    <label htmlFor="unemployed">Unemployed</label>

                    <input type="radio" name="employmentStatus" id="part-time" value="part-time" />
                    <label htmlFor="part-time">Part-time</label>

                    <input type="radio" name="employmentStatus" id="full-time" value="full-time" defaultChecked={true} />
                    <label htmlFor="full-time">Full-time</label>
                </fieldset>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>

                <fieldset>
                    <legend>Dietary restrictions</legend>

                    <input type="checkbox" name="dietaryRestrictions" id="kosher" value="kosher" defaultChecked={true} />
                    <label htmlFor="kosher">Kosher</label>

                    <input type="checkbox" name="dietaryRestrictions" id="vegan" value="vegan" />
                    <label htmlFor="vegan">Vegan</label>

                    <input type="checkbox" name="dietaryRestrictions" id="gluten-free" value="gluten-free" defaultChecked={true} />
                    <label htmlFor="gluten-free">Gluten-free</label>
                </fieldset>

                <label htmlFor="favoriteColor">What is your favorite color?</label>
                <select name="favoriteColor" id="favoriteColor" required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="Red"></option>
                    <option value="Green"></option>
                    <option value="Blue"></option>
                </select>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}