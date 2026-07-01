// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

function Page() {
  return (
    <div>
      <header>
        <img src="src/assets/react.svg" alt="React logo" />
      </header>

      <main>
        <h1>Reasons I'm excited to learn React</h1>

        <ol>
          <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
          <li>I am more likely to get a job as a front end developer if I know React.</li>
        </ol>
      </main>

      <footer>
        <p>© 2026 Marcelo Henrique Rosa Reis development. All rights reserved.</p>
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Page />
);
