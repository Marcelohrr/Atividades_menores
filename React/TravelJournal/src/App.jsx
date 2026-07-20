import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import entryData from './components/data.js';

export default function App() {
    const entryElements = entryData.map(entry => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        );
    });

    return (
        <>
            <Header />

            <main>
                <div id="cartoes">
                    {entryElements}
                </div>
            </main>
        </>
    );
}