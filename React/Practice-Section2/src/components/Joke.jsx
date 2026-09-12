import React from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false);

    function toggleShown() {
        setIsShown(prevShown => !prevShown);
    }

    return (
        <article className="joke-card">
            {props.setup && ( // "Conditional rendering"
                <p className="setup">
                    <strong>Pergunta:</strong> {props.setup}
                </p>
            )}

            {isShown && (
                <p className="punchline">
                    <strong>
                        {props.setup ? "Resposta: " : "Piada: "}
                    </strong>
                    {props.punchline}
                </p>
            )}

            <button onClick={toggleShown}>{isShown ? "Hide punchline" : "Show punchline"}</button>
        </article>
    );
}