import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';

import mountFuji from './assets/mount-fuji.jpeg';
import sydneyOperaHouse from './assets/sydney-opera-house.jpg';
import geirangerfjord from './assets/geirangerfjord.jpg';

export default function App() {
    return (
        <>
            <Header />

            <main>
                <div id="cartoes">
                    <Entry
                        imgSrc={mountFuji}
                        imgAlt="Mount Fuji"
                        country="JAPAN"
                        mapLink="https://www.google.com/maps/place/Mount+Fuji/"
                        title="Mount Fuji"
                        date="12 Jan, 2021 - 24 Jan, 2021"
                        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                    />

                    <Entry
                        imgSrc={sydneyOperaHouse}
                        imgAlt="Sydney Opera House"
                        country="AUSTRALIA"
                        mapLink="https://www.google.com/maps/place/Sydney+Opera+House/"
                        title="Sydney Opera House"
                        date="27 May, 2021 - 8 Jun, 2021"
                        description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
                    />

                    <Entry
                        imgSrc={geirangerfjord}
                        imgAlt="Geirangerfjord"
                        country="NORWAY"
                        mapLink="https://www.google.com/maps/place/Geirangerfjord/"
                        title="Geirangerfjord"
                        date="1 Oct, 2021 - 18 Nov, 2021"
                        description="The Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
                    />
                </div>
            </main>
        </>
    );
}