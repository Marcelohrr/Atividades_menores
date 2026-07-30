import { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function handleMinus() {
        setCount(count - 1);
    }

    function handlePlus() {
        setCount(count + 1);
    }

    return (
        <main>
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className='counter'>
                <button onClick={handleMinus} className='minus' aria-label='Decrease count'>-</button>
                <h2 className='count'>{count}</h2>
                <button onClick={handlePlus} className='plus' aria-label='Increase count'>+</button>
            </div>
        </main>
    );
}