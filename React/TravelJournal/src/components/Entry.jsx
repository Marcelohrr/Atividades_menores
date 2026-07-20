export default function Entry(props) {
    return (
        <>
            <section className="cartao">
                <img className="imagem-cartao" src={props.entry.img.src} alt={props.entry.img.alt} />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 {props.entry.country}</span>
                        <a href={props.entry.mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>{props.entry.title}</h2>
                    <p className="date">{props.entry.date}</p>
                    <p>{props.entry.description}</p>
                </div>
            </section>
        </>
    );
}