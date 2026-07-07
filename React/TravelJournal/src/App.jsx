import mountFuji from "./assets/mount-fuji.jpeg";
import sydneyOperaHouse from "./assets/sydney-opera-house.jpg";
import geirangerfjord from "./assets/geirangerfjord.jpg";

export default function App() {
    return (
        <>
            <header>
                <h1>🌎 my travel journal.</h1>
            </header>

            <main>
                <section className="cartao">
                    <img className="imagem-cartao" src={mountFuji} alt="Mount Fuji" />

                    <div className="conteudo-cartao">
                        <p>📌 JAPAN <span className="link-map">View on Google Maps</span></p>
                        <h1>Mount Fuji</h1>
                        <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </section>

                <section className="cartao">
                    <img className="imagem-cartao" src={sydneyOperaHouse} alt="Sydney Opera House" />

                    <div className="conteudo-cartao">
                        <p>📌 AUSTRALIA <span className="link-map">View on Google Maps</span></p>
                        <h1>Sydney Opera House</h1>
                        <p className="date">27 May, 2021 - 8 Jun, 2021</p>
                        <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
                    </div>
                </section>

                <section className="cartao">
                    <img className="imagem-cartao" src={geirangerfjord} alt="Geirangerfjord" />

                    <div className="conteudo-cartao">
                        <p>📌 NORWAY <span className="link-map">View on Google Maps</span></p>
                        <h1>Geirangerfjord</h1>
                        <p className="date">1 Oct, 2021 - 18 Nov, 2021</p>
                        <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
                    </div>
                </section>
            </main>
        </>
    );
}