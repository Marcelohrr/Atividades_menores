import Markdown from 'react-markdown';

export default function GastroRecipe(props) {
    return (
        <section>
            <h2>Chef Gastrô recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    );
}