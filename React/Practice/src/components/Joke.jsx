export default function Joke(props) {
    return (
        <article className="joke-card">
            {props.setup && ( // "Conditional rendering"
                <p className="setup">
                    <strong>Pergunta:</strong> {props.setup}
                </p>
            )}

            {
                props.setup
                    ? (
                    <p className="punchline">
                        <strong>Resposta:</strong> {props.punchline}
                    </p>
                    )
                    : (
                    <p className="punchline">
                        <strong>Piada:</strong> {props.punchline}
                    </p>
                    )
            }
        </article>
    )
}