export default function Entry(props) {
    return (
        <>
            <section className="cartao">
                <img className="imagem-cartao" src={props.imgSrc} alt={props.imgAlt} />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 {props.country}</span>
                        <a href={props.mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>{props.title}</h2>
                    <p className="date">{props.date}</p>
                    <p>{props.description}</p>
                </div>
            </section>
        </>
    );
}