import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import entryData from './components/data.js';

export default function App() {
    const entryElements = entryData.map(entry => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
                // img={entry.img}
                // country={entry.country}
                // mapLink={entry.mapLink}
                // title={entry.title}
                // date={entry.date}
                // description={entry.description}
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