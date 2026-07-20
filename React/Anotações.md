# The course
> "...focus on projects and challenges"

**Section 1: Static pages**
*Project: ReactFacts site*
- Intro to React
- Why React?: composable & declarative
- React elements
- JSX
- Creating custom components
- Fragments
- Styling with classes

**Section 2: Data-driven React**
*Project: Travel Journal*
- Reusable components
- Props
- Evaluating JS inside JSX
- Handling static assets
- Mapping data to components

**Section 3: React state**
*Project: Chef Claude*
- Event listeners
- Props vs. State
- Creating & changing state
- Complex state
- Forms & form actions
- Conditional rendering
- Setting state from children
- Dynamic styles

**Section 4: Side effects**
*Project: Meme Generator*
- Controlled components/forms
- Functional programming in React
- Fetching data
- Handling side effects
- Side effect dependencies
- Cleaning up side effects
- Refs

**Capstone project 1**
*Tenzies game*
- Series of challenges to build the capstone project
- Lazy state initialization
- Accessibility improvements

**Capstone project 2**
*Assembly: Endgame*
- Series of challenges to build the capstone project

**How to avoid tutorial hell**
> "...do the work. Every challenge, every quiz, every project... The easiest way to learn somehting new is the hard way."

---

# Section 1: Static pages

## Lessons 2–3
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactFacts</title>
  </head>
  <body>
    <!-- instead of "<h1>ReactFacts</h1>": -->
    <div id="root"></div> <!-- Since in React we render all markup using React inside of JavaScript files, we need one central location where React can insert all of that content -->

    <script src="index.jsx" type="module"></script> <!-- Instead of adding anything manually to our markup, React will be in charge of taking our JavaScript and adding the associated markup to our HTML document -->
  </body>
</html>
```

```jsx
import { createRoot } from 'react-dom/client'; // "You might sometimes see this importing the entire ReactDOM library and calling ReactDOM.createRoot"

// 1. Create a root:
const root = createRoot(document.getElementById('root'));
// 2. Render some markup to the root:
root.render(<h1>ReactFacts</h1>);
```

**Challenge:** Re-write the first lines of React code we just had.

```jsx
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<h1>ReactFacts</h1>);
```

**Challenge:** Set up a React app from scratch again. This time, try rendering an unordered list with 2-3 list items inside with why you're excited to be learning React.

```jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render( // O React substitui o conteúdo renderizado anteriormente (<h1>) pelo novo (<ul>)
    <ul>
        <li>Estou animado para aprender React porque já ouvi falar bem dessa ferramenta,</li>
        <li>será importante profissionalmente e</li>
        <li>este é o último passo dos fundamentos de frontend do meu roadmap!</li>
    </ul>
);
```

## Lesson 4: Local setup with Vite
No terminal:
1. nvm install lts → instala a versão LTS (Long Term Support) do Node.js, com o npm embutido
2. npm create vite@latest → cria um novo projeto usando o Vite (build tool) — estrutura inicial de pastas e arquivos (src, index.html, package.json, etc.)
3. npm install → instala todas as dependências listadas no package.json dentro da pasta do projeto (geralmente React, ReactDOM, Vite plugins)
4. npm run dev → inicia o servidor de desenvolvimento local usando Vite, com hot reload ativo (atualização automática ao salvar arquivos)

## Lesson 5: Libraries/Frameworks

**Libraries:**
- Collection of reusable code
- Reduces need to write repetitive/complex things from scratch
- You control how/when it's used. No/few boundaries

**Frameworks:**
- Predetermined architecture — you follow a specified pattern of development
- You work within the boundaries set by the framework

> "...React homepage, it specifically calls itself a library. [...] React has been built out as a whole ecosystem these days to a point where one of the most common ways to use React is to [use] a framework like Next.js."

### Why choose React?
- Highest job demand
- Largest ecosystem/community
- Less "magic"
- Composable/Declarative (*vide* "Lesson 8: Why React? It's Composable!" e "Lesson 9: Why React? It's Declarative!")
- Active development

### When you might NOT want a framework
- Small projects
- Network load concerns
- Learning curve
- Maintenance concerns
- Incompatibility with existing codebase

## Lesson 7: JSX
> "Using createElement is not the greatest developer experience. [...] So pretty shortly after React was initially released, the same team that created React also created the syntax for JSX, which allows developers to write what they're already very familiar with in writing HTML."

Exemplo de createElement aninhado:
```js
const reactElement = createElement('h1', null, createElement('span', null, 'Hello!'));
```

> "...under the hood, React is going to take this set of JSX elements [...] and it's going to turn them into those createElement calls that we saw before."

O mesmo efeito, mas com JSX:
```jsx
const reactElement = <h1><span>Hello!</span></h1>;
```

> "...JSX is simply what we call 'syntactic sugar' on top of the createElement call."

## Lesson 8: Why React? It's composable!
Can create easily reusable and interchangeable "pieces of the web" that can be combined in various ways to create complex systems.

**LEGO:**
> "...in web development, it's a very powerful tool for us to be able to take little pieces and combine them together in complex ways"

> "...what we get with React, which is custom components."
Exemplo:
```html
<body>
    <MyAwesomeNavbar />
    <MainContent />
    <MyAwesomeFooter />
</body>
```

**Challenge:** Create your very first custom React component! Call it "MainContent", and have it return a simple h1 element that says "React is great!".

```jsx
import { createRoot } from 'react-dom/client';

function MainContent() { // "...to create a new component we just have to create a new function [that returns] JSX."
    return <h1>React is great!</h1>;
}

const root = createRoot(document.getElementById('root'));

const reactElement = (
    <div>
        <MainContent />
    </div>
);

root.render(reactElement);
```

## Lesson 9: Why React? It's declarative!
Can lean on the library to handle the manual, tedious tasks that we otherwise would have to worry about ourselves.

> "With something declarative, we can tell the program what should be done [...]. Whereas with the opposite, imperative, we need to describe how things should be done."

**Challenge:** Recreate the line of code below in vanilla JS by creating and appending an <h1> to our div#root (without using innerHTML). Create a new <h1> element (createElement); give it some textContent; give it a class name of "header"; append it as a child (appendChild) of the div#root.

```jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const jsxElement = <h1 class="header">This is declarative coding!</h1>;

root.render(jsxElement);
```

```js
const jsElement = document.createElement('h1');
jsElement.textContent = 'This is imperative coding!';
jsElement.className = 'header';
document.getElementById('root').appendChild(jsElement);
```

**Challenge:** Set up a new React app from scratch! For now, just render an <h1> element that says anything you want.

```jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(<h1>ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ</h1>);
```

## Lesson 10: Housekeeping
### 1.
> In the HTML, "...we're using this .jsx extension instead of a regular .js."

```html
<script src="index.jsx" type="module"></script>
```

> "[It'd still] work if I were to rename this to index.js. However, under the hood we're using Vite [...] and in the documentation of Vite, they recommend that if you ever have a JavaScript file in React that is using JSX in any capacity, then you should use a .jsx extension instead of a regular .js extension. We won't go into why Vite expects you to do that, just know that it really helps Vite in it's ability to bundle your code performantly"

### 2.
> "...putting a relative path in your source wouldn't work correctly. [...] The quickest solution for now is to just make it an absolute path from your project route. For example, if all of your code is in an src folder, you might put /src... [...]. Now, my point of housekeeping here is to let you know: there is a better way to deal with static images in React" — usando `import imagem from ./assets/imagem.jpg;` e `<img src={imagem} />` (*vide* "Lesson 15: Importing static assets")

```jsx
createRoot(document.getElementById('root')).render(
    <img src="./assets/react.svg" /> // Relative path
);
```

```jsx
createRoot(document.getElementById('root')).render(
    <img src="src/assets/react.svg" /> // Absolute path
);
```

### 3.
> "...what you do when you want to render multiple elements inside of your render?"

```jsx
createRoot(document.getElementById('root')).render(
    <h1></h1> // Erro: "As expressões JSX devem ter um elemento pai."
    <p></p>
);
```

> "...JSX compiles down to that call to createElement. [...] And of course I'm not limited to only ever rendering one thing at a time; I just need to make sure that it's wrapped together in a [single parent element]."

```jsx
createRoot(document.getElementById('root')).render(
    <div>
        <h1></h1>
        <p></p>
    </div> // "For accessibility reasons, <div> should probably be the last resort of what you reach to. There are a lot of other semantically correct HTML elements that we could use in its place. For example, maybe a <main> element would make a little bit more sense here. [Or a section, or an article...] it can be really helpful to go over to MDN and learn about these semantically correct containers"
);
```

## Lesson 11: ReactFacts project - Markup

**Challenge:** Starting from scratch, build and render the HTML for our section project.

```jsx
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <main>
        <img scr="src/assets/react.svg" alt="React logo" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
);
```

## Lesson 12: Pop quiz

1. Where does React put all of the elements I create in JSX when I call `root.render()`?
> "All the elements I render get put inside the div with the id of 'root' (or whatever other element I might select when calling createRoot)."

2. What yould show up in my console if I were to run this line of code: `console.log(<h1>Hello world!</h1>)`?
> "An object! Unlike craeting an HTML element in vanilla DOM JS, what gets created from the JSX we have in our React code is a plain JS object that React will use to fill in the view."

3. What's wrong with this code:
```jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
> "You can only render 1 parent element at a time. That parent element can have as many children elements as you want."

4. What does it mean for something to be "declarative" instead of "imperative"?
> "Imperative means we need to give specific step-to-step instructions on how to accomplish a task. Declarative means we can write our code to simply 'describe' what should show up on the page and allow the tool (React, e.g.) to handle the details on how to put those things on the page."

5. What does it mean for something to be "composable"?
> "We have small pieces that we can put together to make something larger or greater than the individual pieces themselves."

## Lessons 13–14: Custom components

> "...with custom components in React, we have to use PascalCase [and], instead of calling it like a regular function with the parentheses, we surround it in angle brackets"

```jsx
function TemporaryName() {
    return (
        <main>
            <img src="src/assets/react.svg" alt="React logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}

createRoot(document.getElementById('root')).render(
    <TemporaryName /> // Instead of "temporaryName()"
);
```

**Challenge (part 1):** Create a custom "Page" component. It should return an ordered list with the reasons why you're excited to be learning React. Render the Page component.

```jsx
function Page() {
    return (
        <ol>
            <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer if I know React.</li>
        </ol>
    );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Page />
);
```

**Challenge (part 2):** Add a <header> element with an <img /> element with the image of the React logo inside. Also, as always, you should include some alt text on the image. Add an <h1> with some text describing the page (e.g. "Reasons I'm excited to learn React"); place it above the ordered list, then wrap the <h1> and <ol> inside a <main> element to keep our semantic structure flowing well. Add a <footer> after the list that says "© 2026 Marcelo Henrique Rosa Reis development. All rights reserved."

```jsx
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
                <small>© 2026 Marcelo Henrique Rosa Reis development. All rights reserved.</small>
            </footer>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Page />
);
```

## Lesson 15: Custom components quiz

1. What is a React component?
> A function that returns React elements.

2. What's wrong with this code?
```jsx
function myComponent() {
    return (
        <small>I'm tyny text!</small>
    );
}
```
> `myComponent()` está em camelCase; deveria estar em PascalCase: `MyComponent()`.

3. What's wrong with this code?
```jsx
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    );
}

root.render(Header());
```
> `root.render(Header())` deveria ser `root.render(<Header />)`.

## Lesson 16: Fragments

> "...alternative to surrounding everything [...] in a <div> like I did here to avoid that issue with multiple different JSX elements trying to be rendered all at once."

```jsx
import { Fragment } from "react"; // "...so-called built-in component from React"

function Page() {
    return (
        <Fragment>
            {/* Tags HTML */}
        </Fragment>
    );
}
```

Alternativamente, mais simples:

```jsx
function Page() {
    return (
        <> {/* Shorthand de <Fragment></Fragment>; dispensa import { Fragment } from "react" */}
            {/* Tags HTML */}
        </>
    );
}
```

> "When I use a <Fragment>, React will not insert another nested level of an element here. It's a workaround that allows us to combine multiple different elements together but without creating another DOM node"

## Lesson 17: Parent/Child custom components

> "...it's really not ideal that we have a single 'Page' component and we're stuffing all of our markup into that [...] ...we're trying to learn more about composing our components together"

**Challenge:** Move the <header> element from the Page component into its own component called "Header". Then render an instance of the Header component inside the Page component where the <header> used to be.

```jsx
function Header() {
    return (
        <header>
            <img src="src/assets/react.svg" alt="React logo" />
        </header>
    );
}

function Page() {
    return (
        <>
            <Header />

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
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Page />
);
```

> "When you're working on a larger application, your header is very unlikely to be three lines of code. It might include a lot more, dealing with user interaction, pulling in data frmo a database and all sorts of more complex things like that. In those cases, I think it becomes much more apparent that it's really really helpful to move that kind of logic into its own separate component, thus compartmentalizing it and making it, not only reusable, but a lot easier to deal with as a developer."

**Challenge:** Move the <main> element into its own component called "MainContent"and render that component inside the Page component. Do the same with the <footer> element, moving it into a new component called "Footer".

```jsx
function Header() {
    return (
        <header>
            <img src="src/assets/react.svg" alt="React logo" />
        </header>
    );
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>

            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React.</li>
            </ol>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2026 Marcelo Henrique Rosa Reis development. All rights reserved.</p>
        </footer>
    );
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

createRoot(document.getElementById('root')).render(
    <Page />
);
```

## Lesson 18: Styling with classes

**Challenge:** [Inside the Header component] add a <nav> > <ul> > <li> (x3). The 3 items should say: "Pricing", "About", and "Contact".

```jsx
function Header() {
    return (
        <header>
            <img src="src/assets/react.svg" alt="React logo" />

            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
```

**Challenge:** Using flexbox, line up the <li>s horizontally and put them inline with the React logo. Note: for practice's sake, don't select any elements, but use classes for all styling.

```jsx
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
```

```css
.header-maneiro {
    display: flex;
    justify-content: space-between;
}

.nav-list {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

**Challenge:** Estilo personalizado.

```jsx
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
    );
}

function Footer() {
    return (
        <footer className="footer-irado">
            <p>© 2026 Marcelo Henrique Rosa Reis development. All rights reserved.</p>
        </footer>
    );
}
```

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: pink;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

h1 {
    margin-top: 30px;
}

.header-maneiro {
    display: flex;
    justify-content: space-between;
    background-color: #27292c;
    padding: 20px;
}

.nav-list {
    display: flex;
    list-style: none;
}

.nav-list > li {
    padding: 10px;
    border-radius: 10px;
}

.nav-list > li:hover {
    transition: background-color .5s;
    background-color: black;
    cursor: pointer;
}

.main-show-de-bola {
    flex: 1;
    background-color: antiquewhite;
    color: black;
    margin: 0 2vw;

    padding: 10px 50px;
}

.titulo-chique {
    margin-bottom: 20px;
}

.ol-brilhante {
    padding-left: 40px;
}

.footer-irado {
    background-color: black;
    padding: 10px;
    text-align: center;
}
```

## Lesson 19: Organizing components

**Challenge:** Move Header, MainContent and Footer components to their own separate files.

Header.jsx:
```jsx
export default function Header() {
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
```

MainContent.jsx:
```jsx
export default function MainContent() {
    return (
        <main className="main-show-de-bola">
            <h1 className="titulo-chique">Reasons I'm excited to learn React</h1>

            <ol className="ol-brilhante">
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React.</li>
            </ol>
        </main>
    );
}
```

main.jsx:
```jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
```

## Lesson 20: Make a mental outline of the project

```html
<div.container>
    <header>
        <nav>
            <img />
            <span></span>
        </nav>
    </header>
    <main>
        <h1></h1>
        <ul>
            <li></li> (x 5)
        </ul>
    </main>
</div.container>
```

## Lessons 21–25: ReactFacts project

**Challenge:** Create an App component in a separate App.jsx file which is a sibling to this main.jsx file; create a `components` folder; create the Navbar and Main components in separate files inside the components folder and in each one, just render an <h1> with the name of the component; have App component import and render the Navbar and Main components; import and render the App component inside of index.jsx using ReactDOM; go to Google fonts and get the "Inter" font with weights 400, 600, and 700, put the <link /> to those fonts ABOVE the style.css link in index.html

**Challenge:** Complete the Navbar to match the Figma design.

**Challenge:** Build out the main content section.

**Challenge:** Place the gray React logo in the background. Don't use an <img> element, but rather set it as the `background-image` of the <main> element.

**Resolução dos desafios acima na pasta ReactFacts**

---

# Section 2: Data-driven React

## Lesson 1: Section 2 intro

> "In our previous project, everything that was displaying on the page, we had hardcoded directly into our markup. And there certainly is still a place for hardcoded text on a page — anything that is considered static or unchanging is going to be written directly into the code. However, we are soon going to learn about how the power of React comes not only from its composability and declarative nature, but from its ability to receive information in the form of data and use that to produce reusable components on the page"

## Lessons 2–3: Travel journal project

**Resolução dos desafios das seções 2–3:**

index.html:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="/globe-icon.svg" type="image/svg+xml" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Travel journal</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

main.jsx:
```jsx
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
);
```

App.jsx:
```jsx
import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx'

export default function App() {
    return (
        <>
            <Header />
            <Entry />
        </>
    );
}
```

Entry.jsx:
```jsx
import mountFuji from '../assets/mount-fuji.jpeg';
import sydneyOperaHouse from '../assets/sydney-opera-house.jpg';
import geirangerfjord from '../assets/geirangerfjord.jpg';

export default function Entry() {
    return (
        <main>
            <section className="cartao">
                <img className="imagem-cartao" src={mountFuji} alt="Mount Fuji" />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 JAPAN</span>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>Mount Fuji</h2>
                    <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </section>

            <section className="cartao">
                <img className="imagem-cartao" src={sydneyOperaHouse} alt="Sydney Opera House" />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 AUSTRALIA</span>
                        <a href="https://www.google.com/maps/place/Sydney+Opera+House/" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>Sydney Opera House</h2>
                    <p className="date">27 May, 2021 - 8 Jun, 2021</p>
                    <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.</p>
                </div>
            </section>

            <section className="cartao">
                <img className="imagem-cartao" src={geirangerfjord} alt="Geirangerfjord" />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 NORWAY</span>
                        <a href="https://www.google.com/maps/place/Geirangerfjord/" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>Geirangerfjord</h2>
                    <p className="date">1 Oct, 2021 - 18 Nov, 2021</p>
                    <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
                </div>
            </section>
        </main>
    );
}
```

index.css:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
}

header {
    background-color: #F55A5A;
    padding-top: 10px;
    padding-bottom: 12px;
    text-align: center;
}

header > h1 {
    font-size: 1.8rem;
    font-weight: 500;
}

main {
    display: grid;
    gap: 25px;
    padding: 50px;
    background-color: antiquewhite;
}

.cartao {
    display: flex;
    background-color: white;
    border-radius: 10px;
}

.imagem-cartao {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
}

.conteudo-cartao {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
}

.conteudo-cartao > .local > span {
    margin-right: 20px;
    font-family: monospace;
    font-size: 1.1rem;
}

.conteudo-cartao > .local > a {
    color: grey;
}

.conteudo-cartao > h2 {
    font-size: 1.5rem;
    font-weight: 800;
}

.conteudo-cartao > .date {
    font-weight: 700;
}
```

## Lesson 4: Problem - Not reusable

> "The way we have our entry components setup is not reusable at all. [...] and that's because the way that we set it up is by hardcoding all of the information directly here into the component. [...] we're going to talk about the data-driven aspect of React a little bit later, but for now we can see that our componenent is so hardcoded that there's no meaningful way for us to have it represent different kinds of data. And in React this is where the concept of props comes into play."

## Lessons 5–8: Props

## Lesson 9: Props part 4 - Passing data into a component

> "Just like in HTML, when I have a reusable element like a <link>, I can pass in different attributes in HTML to alter the behavior of that <link> element. I also can pass information into that <link> like an `href`, so that the link can act a little differently from other links that have different values for their `href`. Now, in HTML, I can't simply come to my link and add `whateverIWant="Something"`, because this attribute is not defined in the HTML spec for the <link> element. That said, the way that we pass data into a React component is going to look very very similar to how we do it in HTML. However, [in a custom component] I can in fact pass in `whateverIWant` as what looks like an attribute in HTML, but in React is called a property — or, more commonly, a prop."

No exemplo de cartões de Contato:
> "...more of a data focus [in App.jsx], where the data is most important and we've been able to have more of a layout and design focus in the individual Contact card. And if we want to make a change to how the Contact card is laid out [...], we can do it from one place, in the Contact component. And in the App component, it doesn't really care about that. We're able to just pass in data and have the Contact card handle everything else"

## Lesson 10: Props part 5 - Receiving props in a component

Entry.jsx define a estrutura:
```jsx
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
```

App.jsx possui o conteúdo — cada <Entry /> faz com que o React chame a função Entry(), passando um objeto (props) com os dados a serem exibidos:
```jsx
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
```

## Lesson 11: Prop quiz! xD

1. What do props help us accomplish?
> Props ajudam a reutilizar a estrutura de um componente para itens similares, alterando apenas o conteúdo e sem ter que repetir toda a sintaxe.

2. How do you pass a prop into a component?
> Em App.jsx fica o conteúdo, com elementos customizados (ex.: <Entrada propriedadeExemplo="valor" />) e, uma pasta chamada Entrada.jsx possui uma função que recebe o conteúdo como argumento e formata com `Entrada(props)`.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
> Não, porque existe um conjunto de propriedades utilizáveis nos elementos nativos — props só funcionam com elementos customizados.

4. How do I receive props in a component?

```jsx
function Navbar(props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}
```

5. What data type is `props` when the component receives it?
> Um objeto!

## Lesson 12: Destructuring props

```js
const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
};

const {img, name} = person;
console.log(name); // Mr. Whiskerson
```

```jsx
export default function Entry({imgSrc, imgAlt, country, mapLink, title, date, description}) { // "...because it's an object, I can choose to just destructure it right here, inline."
    return (
        <>
            <section className="cartao">
                <img className="imagem-cartao" src={imgSrc} alt={imgAlt} />

                <div className="conteudo-cartao">
                    <div className="local">
                        <span>📌 {country}</span>
                        <a href={mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>

                    <h2>{title}</h2>
                    <p className="date">{date}</p>
                    <p>{description}</p>
                </div>
            </section>
        </>
    );
}
```

## Lesson 13: Props practice

**Challenge:** Create a page that displays your favorite jokes. Create a Joke component in its own file; import and render 4-5 <Joke /> components; each Joke should receive a "setup" prop and a "punchline" prop and render those however you'd like. Extra credit: some jokes are only a punchline with no setup.

index.html:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Jokes</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

main.jsx:
```jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <App />
);
```

App.jsx:
```jsx
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
```

Joke.jsx:
```jsx
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
```

index.css:
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
}

.container {
    max-width: 700px;
    margin: 40px auto;
    padding: 0 20px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.joke-card {
    background-color: white;
    padding: 18px 22px;
    margin-bottom: 18px;
    border-radius: 10px;
    border-left: 5px solid gold;
    box-shadow: 0 2px 8px #3d3d3d;
}

.setup {
    margin: 0 0 12px;
    font-size: 1rem;
}
```

## Lesson 14: Non-string props

**Challenge:** Think critically — how would you pass in a prop that isn't a string datatype? E.g. Say you want each Joke component to receive an "upvotes" and "downvotes" prop that is a number, as well as a prop with an array of comments, and a boolean of whether the joke is a pun (`isPun`).

App.jsx:
```jsx
import Joke from './components/Joke.jsx';

export default function App() {
    return (
        <main className="container">
            <h1>Piadas 😂</h1>

            <Joke
                setup="Por que o JavaScript foi ao psicólogo?"
                punchline="Porque ele tinha muitos problemas de escopo."
                upvotes={10}
                downvotes={0}
                comments={[
                    {author: "", text: ""},
                    {author: "", text: ""}
                ]}
                isPun={true}
            />
        </main>
    )
}
```

## Lesson 15: Importing static assets

> "Using a build tool like Vite is going to essentially rearrange where these images are being held, so referencing them with a relative path may lead to broken links. [...] To solve this problem, what you can do is import your images from their relative path, so that JavaScript is aware of where they were before all of this restructuring happened and the build tool, in the process of building itself, can fix the relative paths that you used when you were importing those assets."

Exemplo:
```js
import imgUrl from './img.png';
document.getElementById('hero-img').src = imgUrl;
```

## Lesson 17: Review - array .map()

**Challenge 1:** Given an array of numbers, return an array of each number, squared.

```js
const nums = [1, 2, 3, 4, 5];

console.log(nums.map(number => number ** 2));
```

**Challenge 2:** Given an array of strings, return an array where the first letter of each string is capitalized.

```js
const names = ["alice", "bob", "charlie", "danielle"];

console.log(names.map(name => name.charAt(0).toUpperCase() + name.slice(1)));
```

**Challenge 3:** Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.

```js
const pokemon = ["Bulbassaur", "Charmander", "Squirtle"];

console.log(pokemon.map(poke => `<p>${poke}</p>`));
```

## Lesson 19: Mapping components

**Challenge:** See if you can correctly pass the necessary props to the Joke component in the .map() (and render the jokeElements array) so the jokes show up on the page again.

jokesData.js:
```js
export default [
    {
        setup: "Por que o JavaScript foi ao psicólogo?",
        punchline: "Porque ele tinha muitos problemas de escopo."
    },
    {
        setup: "Por que o computador foi ao médico?",
        punchline: "Porque ele estava com um vírus."
    },
    {
        setup: "O que o zero disse para o oito?",
        punchline: "Belo cinto!"
    },
    {
        setup: "Por que o livro de matemática estava triste?",
        punchline: "Porque tinha muitos problemas."
    },
    {
        punchline: "A vida é igual ao CSS: quando você acha que centralizou, descobre que era só sorte."
    }
];
```

App.jsx:
```jsx
import Joke from './components/Joke.jsx';
import jokesData from './jokesData.js';

export default function App() {
    const jokeElements = jokesData.map((joke) => {
        return (
            <Joke
                setup={joke.setup}
                punchline={joke.punchline}
            />
        );
    });

    return (
        <main className="container">
            <h1>Piadas 😂</h1>

            {jokeElements}
        </main>
    );
}
```

## Lesson 20: Map quiz!

1. What does the `.map()` array method do?
> Retorna um novo array aplicando uma callback a cada elemento do array original.

2. What do we usually use `.map()` for in React?
> Para renderizar listas de componentes automaticamente, sem precisar escrever cada um dentro de um elemento.

3. Critical thinking: why is using `.map()` better than just creating the components manually by typing them out?
> Porque é muito mais prático acessar automaticamente todo o conteúdo de um array de dados, sem a necessidade de escrevê-lo manualmente. Evita repetição de código e facilita a manutenção.
> "1. We often don't have the data ahead of time when we're building the app, so we simply can't manually type them out."
> "2. It makes our code more 'self-sustaining' — not requiring additional changes to the code whenever the data changes."

## Lesson 21: Travel journal — Map Entry components

**Challenge:** Import the array of data from data.js; map over the array to create an <Entry /> component for every item in the data array; display the array of Entry components in place of the current hard-coded <Entry /> instance.

data.js:
```js
import mountFuji from '../assets/mount-fuji.jpeg';
import sydneyOperaHouse from '../assets/sydney-opera-house.jpg';
import geirangerfjord from '../assets/geirangerfjord.jpg';

export default [
    {
        img: { src: mountFuji, alt: "Mount Fuji" },
        country: "JAPAN",
        mapLink: "https://www.google.com/maps/place/Mount+Fuji/",
        title: "Mount Fuji",
        date: "12 Jan, 2021 - 24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
        img: { src: sydneyOperaHouse, alt: "Sydney Opera House" },
        country: "AUSTRALIA",
        mapLink: "https://www.google.com/maps/place/Sydney+Opera+House/",
        title: "Sydney Opera House",
        date: "27 May, 2021 - 8 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
    },
    {
        img: { src: geirangerfjord, alt: "Geirangerfjord" },
        country: "NORWAY",
        mapLink: "https://www.google.com/maps/place/Geirangerfjord/",
        title: "Geirangerfjord",
        date: "1 Oct, 2021 - 18 Nov, 2021",
        description: "The Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
];
```

App.jsx:
```jsx
import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import entryData from './components/data.js';

export default function App() {
    const entryElements = entryData.map(entry => {
        return (
            <Entry
                img={entry.img}
                country={entry.country}
                mapLink={entry.mapLink}
                title={entry.title}
                date={entry.date}
                description={entry.description}
            />
        );
    });

    return (
        <>
            <Header />

            <main>
                <div id="cartoes">
                    {entryElements}
                </div>
            </main>
        </>
    );
}
```

## Lesson 22: Travel journal — key prop

> "...we're getting this warning in the console [that] says that ['react-dom_client.js?v=2f425562:12935 Each child in a list should have a unique "key" prop.']. [...] React has an interesting system under the hood that it used to keep track of what order everything is in when you give it an array of React elements. [...] from a really high level overview, if you were to ever include functionality where the user could add new items to this list or maybe remove one of the items from the list, React needs this unique key prop that it talks about in order to keep track of which one you're actually removing or where you're adding new elements. [...] it's really easy to implement, because all we need to do is pass a unique prop called 'key' [...] and the value that we pass to it has to be unique. [...] a really common thing for us to do, especially when we're getting data from a database is: that data or that array of data will usually have an ID attribute associated with it. And this is actually managed by the database. It ensures that these IDs will be unique across the [entire table of that database]."

data.js: `[{id: 1}, {id: 2}, {id: 3}]`
App.jsx: `key={entry.id}`

## Lesson 23: Travel journal — Pass object as props

**Challenge:** Fix our component!

App.jsx:
```jsx
import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import entryData from './components/data.js';

export default function App() {
    const entryElements = entryData.map(entry => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        );
    });

    return (
        <>
            <Header />

            <main>
                <div id="cartoes">
                    {entryElements}
                </div>
            </main>
        </>
    );
}
```

Entry.jsx:
```jsx
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
```


Parei: 4:22:56

2026/06/25-2026/07/19 - React
Anotações do vídeo "Learn React JS - Full Beginner’s Tutorial & Practice Projects" (freeCodeCamp.org, 2024).

git mv Anotações Anotações.md