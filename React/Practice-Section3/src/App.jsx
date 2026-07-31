import { useState } from 'react';

export default function App() {
    const [myFavoriteThings, setMyFavoriteThings] = useState([]);

    const allFavoriteThings = ['🎸', '🎮', '🐉', '🌻', '🍕'];
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>);

    function addFavoriteThing() {
        setMyFavoriteThings(prevFavThings => [...prevFavThings, allFavoriteThings[prevFavThings.length]]); // "...it accesses the previous version of myFavoriteThings array and it returns a brand new array, so it's not going to be modifying the existing myFavoriteThings array; it's returning a brand new array that includes all of the items that were previously there plus the new item that I want to add."
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live='polite'>
                {thingsElements}
            </section>
        </main>
    );
}