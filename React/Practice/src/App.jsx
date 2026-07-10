import Joke from './components/Joke.jsx';

export default function App() {
    return (
        <main className="container">
            <h1>Piadas 😂</h1>

            <Joke
                setup="Por que o JavaScript foi ao psicólogo?"
                punchline="Porque ele tinha muitos problemas de escopo."
            />

            <Joke
                setup="Por que o computador foi ao médico?"
                punchline="Porque ele estava com um vírus."
            />

            <Joke
                setup="O que o zero disse para o oito?"
                punchline="Belo cinto!"
            />

            <Joke
                setup="Por que o livro de matemática estava triste?"
                punchline="Porque tinha muitos problemas."
            />

            <Joke
                punchline="A vida é igual ao CSS: quando você acha que centralizou, descobre que era só sorte."
            />
        </main>
    )
}