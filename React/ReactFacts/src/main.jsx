// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
*/

function Header() {
  return (
    <header className="header-maneiro">
      <img src="src/assets/react.svg" alt="React logo" />

      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className="main-show-de-bola">
      <h1 className="titulo-chique">Reasons I'm excited to learn React</h1>

      <ol className="ol-brilhante">
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React.</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer-irado">
      <p>© 2026 Marcelo Henrique Rosa Reis development. All rights reserved.</p>
    </footer>
  )
}

function Page() {
  return (
    <>
      <Header />

      <MainContent />

      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Page />
);
