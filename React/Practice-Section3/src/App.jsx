// import { useState } from 'react';

export default function App() {
    return (
        <section>
            <h1>Signup form</h1>
            <form method="POST">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder="joe@schmoe.com" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}