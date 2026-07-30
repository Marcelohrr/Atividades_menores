import { useState } from 'react';

export default function App() {
    const [isGoingOut, setIsGoingOut] = useState(false);

    function handleClick() {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    return (
        <main>
            <h1 className='title'>Do I feel like going out tonight?</h1>
            <button
                onClick={handleClick}
                className='value'
                aria-label={`Current answer is: ${isGoingOut ? 'Yes' : 'No'}. Click to change it.`}
            >{isGoingOut ? 'Yes' : 'No'}</button>
        </main>
    );
}