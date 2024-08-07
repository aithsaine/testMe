import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {


    await prisma.question.createMany({
        data: [
            {
                subject: "React",
                title: "What is JSX in React?",
                choices: ["A syntax extension for JavaScript", "A JavaScript library", "A CSS preprocessor", "A database management system"],
                correctAnswer: "A syntax extension for JavaScript"
            },
            {
                subject: "React",
                title: "Which React hook is used to perform side effects?",
                choices: ["useState", "useEffect", "useReducer", "useContext"],
                correctAnswer: "useEffect"
            },
            {
                subject: "React",
                title: "What is the purpose of the `render()` method in a React class component?",
                choices: ["To render HTML elements", "To update component state", "To handle events", "To fetch data"],
                correctAnswer: "To render HTML elements"
            },
            {
                subject: "React",
                title: "How do you pass data from a parent component to a child component in React?",
                choices: ["Using state", "Using props", "Using context", "Using hooks"],
                correctAnswer: "Using props"
            },
            {
                subject: "React",
                title: "What is a React fragment?",
                choices: ["A placeholder for rendering", "A special type of component", "A way to return multiple elements without a wrapper", "A CSS class"],
                correctAnswer: "A way to return multiple elements without a wrapper"
            },
            {
                subject: "React",
                title: "Which of the following is a valid way to create a React component?",
                choices: ["Function component", "Class component", "Arrow function component", "All of the above"],
                correctAnswer: "All of the above"
            },
            {
                subject: "React",
                title: "What does the `useState` hook do?",
                choices: ["Manages state in functional components", "Performs side effects", "Handles routing", "Provides context"],
                correctAnswer: "Manages state in functional components"
            },
            {
                subject: "React",
                title: "How do you handle events in React?",
                choices: ["Using event handlers", "Using inline JavaScript", "Using Redux", "Using lifecycle methods"],
                correctAnswer: "Using event handlers"
            },
            {
                subject: "React",
                title: "What is the purpose of React’s `key` prop?",
                choices: ["To uniquely identify elements in a list", "To set CSS styles", "To pass data between components", "To handle events"],
                correctAnswer: "To uniquely identify elements in a list"
            },
            {
                subject: "React",
                title: "What is the use of `useEffect` hook?",
                choices: ["To perform side effects", "To manage component state", "To handle user input", "To style components"],
                correctAnswer: "To perform side effects"
            },
            {
                subject: "React",
                title: "What is React's Context API used for?",
                choices: ["State management", "Routing", "Data fetching", "Animation"],
                correctAnswer: "State management"
            },
            {
                subject: "React",
                title: "How do you create a controlled component in React?",
                choices: ["By managing form state with React", "By using local storage", "By using a third-party library", "By using the `useEffect` hook"],
                correctAnswer: "By managing form state with React"
            },
            {
                subject: "React",
                title: "What is the `ReactDOM.render` method used for?",
                choices: ["To render a React element into the DOM", "To manage component lifecycle", "To update state", "To handle events"],
                correctAnswer: "To render a React element into the DOM"
            },
            {
                subject: "React",
                title: "What are higher-order components (HOCs) in React?",
                choices: ["Functions that take a component and return a new component", "Components that manage state", "Components that perform side effects", "Components that handle routing"],
                correctAnswer: "Functions that take a component and return a new component"
            },
            {
                subject: "React",
                title: "What is the purpose of `useReducer` hook?",
                choices: ["To manage more complex state logic", "To perform side effects", "To handle routing", "To fetch data"],
                correctAnswer: "To manage more complex state logic"
            },
            {
                subject: "React",
                title: "What is the purpose of `useCallback` hook?",
                choices: ["To memoize callback functions", "To perform side effects", "To manage state", "To handle events"],
                correctAnswer: "To memoize callback functions"
            },
            {
                subject: "React",
                title: "What is the role of `React.StrictMode`?",
                choices: ["To highlight potential problems in an application", "To manage state", "To perform side effects", "To handle routing"],
                correctAnswer: "To highlight potential problems in an application"
            },
            {
                subject: "React",
                title: "How do you conditionally render elements in React?",
                choices: ["Using conditional operators", "Using `if-else` statements", "Using the ternary operator", "All of the above"],
                correctAnswer: "All of the above"
            },
            {
                subject: "React",
                title: "What is a `React.memo`?",
                choices: ["A higher-order component that memoizes a component", "A hook for managing state", "A method for performing side effects", "A way to handle events"],
                correctAnswer: "A higher-order component that memoizes a component"
            },
            {
                subject: "React",
                title: "How do you handle forms in React?",
                choices: ["Using controlled components", "Using uncontrolled components", "Using both controlled and uncontrolled components", "Using third-party libraries"],
                correctAnswer: "Using controlled components"
            },
            {
                subject: "React",
                title: "What does the `React.StrictMode` component do?",
                choices: ["It helps detect potential problems in the application", "It manages component state", "It performs side effects", "It handles routing"],
                correctAnswer: "It helps detect potential problems in the application"
            },
            {
                subject: "React",
                title: "What is the purpose of `useRef` hook?",
                choices: ["To access and interact with DOM elements", "To manage state", "To perform side effects", "To handle routing"],
                correctAnswer: "To access and interact with DOM elements"
            },
            {
                subject: "React",
                title: "What is the purpose of `useLayoutEffect` hook?",
                choices: ["To perform side effects synchronously after all DOM mutations", "To manage state", "To handle events", "To perform asynchronous data fetching"],
                correctAnswer: "To perform side effects synchronously after all DOM mutations"
            },
            {
                subject: "React",
                title: "What is the role of `useImperativeHandle` hook?",
                choices: ["To customize the instance value that is exposed when using `ref`", "To manage state", "To perform side effects", "To handle events"],
                correctAnswer: "To customize the instance value that is exposed when using `ref`"
            },
            {
                subject: "Laravel",
                title: "Which command is used to create a new Laravel project?",
                choices: ["php artisan make:project", "composer create-project", "php create:project", "laravel new"],
                correctAnswer: "laravel new"
            },
            {
                subject: "Laravel",
                title: "What is Laravel’s ORM called?",
                choices: ["Eloquent", "Doctrine", "ActiveRecord", "Hibernate"],
                correctAnswer: "Eloquent"
            },
            {
                subject: "Laravel",
                title: "How do you define routes in Laravel?",
                choices: ["In web.php file", "In routes.php file", "In config/routes.php", "In app/routes"],
                correctAnswer: "In web.php file"
            },
            {
                subject: "Laravel",
                title: "What is the purpose of Laravel’s Artisan command?",
                choices: ["To provide a command-line interface for various tasks", "To manage database migrations", "To handle routing", "To manage user authentication"],
                correctAnswer: "To provide a command-line interface for various tasks"
            },
            {
                subject: "Laravel",
                title: "What is the Laravel service container used for?",
                choices: ["Dependency injection and service resolution", "Database management", "Routing", "Session handling"],
                correctAnswer: "Dependency injection and service resolution"
            },
            {
                subject: "Laravel",
                title: "What is the default database configuration file in Laravel?",
                choices: ["config/database.php", "database/config.php", "config/db.php", "app/config/database.php"],
                correctAnswer: "config/database.php"
            },
            {
                subject: "Laravel",
                title: "Which method is used to add middleware to a route in Laravel?",
                choices: ["middleware()", "addMiddleware()", "routeMiddleware()", "middlewareAdd()"],
                correctAnswer: "middleware()"
            },
            {
                subject: "Laravel",
                title: "How do you run database migrations in Laravel?",
                choices: ["php artisan migrate", "php artisan db:migrate", "php migrate:run", "php artisan migrate:run"],
                correctAnswer: "php artisan migrate"
            },
            {
                subject: "Laravel",
                title: "What is Laravel’s Blade?",
                choices: ["A templating engine", "A database manager", "A routing system", "A service container"],
                correctAnswer: "A templating engine"
            },
            {
                subject: "Laravel",
                title: "How do you define an Eloquent model in Laravel?",
                choices: ["By extending the Model class", "By extending the Controller class", "By implementing the Model interface", "By extending the Database class"],
                correctAnswer: "By extending the Model class"
            },
            {
                subject: "Laravel",
                title: "What command is used to create a new controller in Laravel?",
                choices: ["php artisan make:controller", "php artisan create:controller", "php artisan new:controller", "php artisan controller:create"],
                correctAnswer: "php artisan make:controller"
            },
            {
                subject: "Laravel",
                title: "What does the `artisan` command do?",
                choices: ["Provides a command-line interface for Laravel tasks", "Manages database migrations", "Handles user authentication", "Performs HTTP requests"],
                correctAnswer: "Provides a command-line interface for Laravel tasks"
            },
            {
                subject: "Laravel",
                title: "How do you set up environment variables in Laravel?",
                choices: ["In the .env file", "In the config.php file", "In the database.php file", "In the routes.php file"],
                correctAnswer: "In the .env file"
            },
            {
                subject: "Laravel",
                title: "What is Laravel’s `Auth` facade used for?",
                choices: ["User authentication", "Database queries", "Routing", "Service container"],
                correctAnswer: "User authentication"
            },
            {
                subject: "Laravel",
                title: "What is the purpose of Laravel’s `Request` class?",
                choices: ["To handle HTTP requests", "To manage database migrations", "To define routes", "To provide user authentication"],
                correctAnswer: "To handle HTTP requests"
            },
            {
                subject: "Laravel",
                title: "What is Laravel’s `Query Builder` used for?",
                choices: ["To build SQL queries programmatically", "To manage database migrations", "To handle HTTP requests", "To provide user authentication"],
                correctAnswer: "To build SQL queries programmatically"
            },
            {
                subject: "Laravel",
                title: "How do you create a new migration in Laravel?",
                choices: ["php artisan make:migration", "php artisan create:migration", "php artisan new:migration", "php artisan migration:create"],
                correctAnswer: "php artisan make:migration"
            },
            {
                subject: "Laravel",
                title: "What is the purpose of the `Seeders` in Laravel?",
                choices: ["To populate the database with test data", "To manage HTTP requests", "To define routes", "To handle user authentication"],
                correctAnswer: "To populate the database with test data"
            },
            {
                subject: "Laravel",
                title: "What is the purpose of the `Factory` class in Laravel?",
                choices: ["To generate fake data for testing", "To manage database migrations", "To handle HTTP requests", "To provide user authentication"],
                correctAnswer: "To generate fake data for testing"
            },
            {
                subject: "HTML",
                title: "Which tag is used to define an unordered list in HTML?",
                choices: ["<ul>", "<ol>", "<li>", "<list>"],
                correctAnswer: "<ul>"
            },
            {
                subject: "HTML",
                title: "What is the correct HTML element for inserting a line break?",
                choices: ["<break>", "<lb>", "<br>", "<line>"],
                correctAnswer: "<br>"
            },
            {
                subject: "HTML",
                title: "Which attribute is used to provide alternative text for an image in HTML?",
                choices: ["alt", "src", "title", "href"],
                correctAnswer: "alt"
            },
            {
                subject: "HTML",
                title: "Which HTML element is used to define important text?",
                choices: ["<b>", "<strong>", "<important>", "<em>"],
                correctAnswer: "<strong>"
            },
            {
                subject: "HTML",
                title: "Which tag is used to create a hyperlink in HTML?",
                choices: ["<a>", "<link>", "<href>", "<url>"],
                correctAnswer: "<a>"
            },
            {
                subject: "HTML",
                title: "What is the correct HTML element for a definition list?",
                choices: ["<dl>", "<list>", "<definition>", "<de>"],
                correctAnswer: "<dl>"
            },
            {
                subject: "HTML",
                title: "Which HTML tag is used to define a table row?",
                choices: ["<tr>", "<td>", "<th>", "<table>"],
                correctAnswer: "<tr>"
            },
            {
                subject: "HTML",
                title: "What is the purpose of the `<meta>` tag in HTML?",
                choices: ["To provide metadata about the HTML document", "To create links", "To define styles", "To create tables"],
                correctAnswer: "To provide metadata about the HTML document"
            },
            {
                subject: "HTML",
                title: "Which HTML element is used to define a paragraph?",
                choices: ["<p>", "<paragraph>", "<text>", "<para>"],
                correctAnswer: "<p>"
            },
            {
                subject: "HTML",
                title: "What is the purpose of the `<form>` tag in HTML?",
                choices: ["To collect user input", "To create hyperlinks", "To define a list", "To display images"],
                correctAnswer: "To collect user input"
            },
            {
                subject: "HTML",
                title: "Which attribute is used to specify the URL of a linked document in HTML?",
                choices: ["href", "src", "link", "url"],
                correctAnswer: "href"
            },
            {
                subject: "HTML",
                title: "What is the purpose of the `<input>` tag in HTML?",
                choices: ["To create interactive controls in a web form", "To display images", "To define a table", "To create hyperlinks"],
                correctAnswer: "To create interactive controls in a web form"
            },
            {
                subject: "HTML",
                title: "Which HTML element defines the title of a document?",
                choices: ["<title>", "<head>", "<meta>", "<header>"],
                correctAnswer: "<title>"
            },
            {
                subject: "HTML",
                title: "How do you include an external JavaScript file in an HTML document?",
                choices: ["<script src='file.js'></script>", "<js src='file.js'></js>", "<script file='file.js'></script>", "<include src='file.js'>"],
                correctAnswer: "<script src='file.js'></script>"
            },
            {
                subject: "HTML",
                title: "What does the `<link>` tag do in an HTML document?",
                choices: ["Links to an external resource", "Defines a hyperlink", "Embeds a media file", "Creates a table"],
                correctAnswer: "Links to an external resource"
            },
            {
                subject: "HTML",
                title: "Which tag is used to create a drop-down list in HTML?",
                choices: ["<select>", "<dropdown>", "<list>", "<option>"],
                correctAnswer: "<select>"
            },
            {
                subject: "HTML",
                title: "Which element is used to define a header in HTML?",
                choices: ["<header>", "<h1>", "<title>", "<head>"],
                correctAnswer: "<header>"
            },
            {
                subject: "HTML",
                title: "Which tag is used to group inline-elements in HTML?",
                choices: ["<span>", "<div>", "<section>", "<article>"],
                correctAnswer: "<span>"
            },
            {
                subject: "HTML",
                title: "What is the purpose of the `<meta charset='UTF-8'>` tag?",
                choices: ["Specifies the character encoding for the document", "Links to an external stylesheet", "Defines the document title", "Includes external scripts"],
                correctAnswer: "Specifies the character encoding for the document"
            },
            {
                subject: "HTML",
                title: "How do you define a comment in HTML?",
                choices: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
                correctAnswer: "<!-- comment -->"
            },
            {
                subject: "CSS",
                title: "Which property is used to change the font size in CSS?",
                choices: ["font-size", "text-size", "font-style", "text-style"],
                correctAnswer: "font-size"
            },
            {
                subject: "CSS",
                title: "How do you select an element with the class name 'example' in CSS?",
                choices: [".example", "#example", "example", "element.example"],
                correctAnswer: ".example"
            },
            {
                subject: "CSS",
                title: "Which property is used to change the background color of an element?",
                choices: ["background-color", "color", "background", "bg-color"],
                correctAnswer: "background-color"
            },
            {
                subject: "CSS",
                title: "How do you apply styles to all paragraphs inside a `<div>` element?",
                choices: ["div p { }", "div > p { }", "div + p { }", "div .p { }"],
                correctAnswer: "div p { }"
            },
            {
                subject: "CSS",
                title: "Which CSS property controls the text size?",
                choices: ["font-size", "text-size", "text-style", "font-weight"],
                correctAnswer: "font-size"
            },
            {
                subject: "CSS",
                title: "How do you add a border around an element in CSS?",
                choices: ["border", "border-color", "border-style", "border-width"],
                correctAnswer: "border"
            },
            {
                subject: "CSS",
                title: "Which property is used to set the spacing between lines of text?",
                choices: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
                correctAnswer: "line-height"
            },
            {
                subject: "CSS",
                title: "How do you create a CSS rule that applies to multiple classes?",
                choices: [".class1, .class2 { }", ".class1 .class2 { }", ".class1.class2 { }", ".class1 + .class2 { }"],
                correctAnswer: ".class1, .class2 { }"
            },
            {
                subject: "CSS",
                title: "What does the `:hover` pseudo-class do?",
                choices: ["Applies styles when the mouse hovers over an element", "Applies styles when an element is active", "Applies styles to the first child of an element", "Applies styles to the last child of an element"],
                correctAnswer: "Applies styles when the mouse hovers over an element"
            },
            {
                subject: "CSS",
                title: "How do you center an element horizontally with CSS?",
                choices: ["margin: 0 auto;", "text-align: center;", "float: center;", "display: center;"],
                correctAnswer: "margin: 0 auto;"
            },
            {
                subject: "CSS",
                title: "What is the default value of the `position` property?",
                choices: ["static", "relative", "absolute", "fixed"],
                correctAnswer: "static"
            },
            {
                subject: "CSS",
                title: "Which property is used to control the visibility of an element?",
                choices: ["visibility", "display", "opacity", "overflow"],
                correctAnswer: "visibility"
            },
            {
                subject: "CSS",
                title: "How do you apply a style to all `<a>` elements inside a `<nav>`?",
                choices: ["nav a { }", "nav > a { }", "nav + a { }", "nav .a { }"],
                correctAnswer: "nav a { }"
            },
            {
                subject: "CSS",
                title: "What does the `z-index` property do?",
                choices: ["Controls the stacking order of positioned elements", "Sets the size of an element", "Defines the border of an element", "Controls the text alignment"],
                correctAnswer: "Controls the stacking order of positioned elements"
            },
            {
                subject: "CSS",
                title: "How do you apply a style to the first child element of a parent?",
                choices: ["parent:first-child { }", "parent > :first-child { }", "parent:first { }", "parent :first { }"],
                correctAnswer: "parent > :first-child { }"
            },
            {
                subject: "CSS",
                title: "What does the `flex` property do in CSS Flexbox?",
                choices: ["Defines how a flex item will grow or shrink", "Aligns flex items", "Sets the direction of flex items", "Sets the size of the flex container"],
                correctAnswer: "Defines how a flex item will grow or shrink"
            },
            {
                subject: "CSS",
                title: "How do you create a responsive layout using CSS Grid?",
                choices: ["By using grid-template-columns and grid-template-rows", "By using flex-direction", "By using media queries", "By using position"],
                correctAnswer: "By using grid-template-columns and grid-template-rows"
            },
            {
                subject: "CSS",
                title: "Which property is used to set the color of text in CSS?",
                choices: ["color", "text-color", "font-color", "background-color"],
                correctAnswer: "color"
            },
            {
                subject: "Cybersecurity",
                title: "What is the term for the process of testing a system for vulnerabilities?",
                choices: ["Penetration Testing", "Security Auditing", "Vulnerability Assessment", "Risk Management"],
                correctAnswer: "Penetration Testing"
            },
            {
                subject: "Cybersecurity",
                title: "Which type of attack involves intercepting and altering communications between two parties?",
                choices: ["Man-in-the-Middle Attack", "Phishing Attack", "SQL Injection", "Cross-Site Scripting"],
                correctAnswer: "Man-in-the-Middle Attack"
            },
            {
                subject: "Cybersecurity",
                title: "What does the acronym DDoS stand for?",
                choices: ["Distributed Denial of Service", "Direct Denial of Service", "Distributed Data of Service", "Direct Data of Service"],
                correctAnswer: "Distributed Denial of Service"
            },
            {
                subject: "Cybersecurity",
                title: "What is a firewall used for in cybersecurity?",
                choices: ["To control network traffic and protect systems", "To encrypt data", "To perform vulnerability scans", "To manage user authentication"],
                correctAnswer: "To control network traffic and protect systems"
            },
            {
                subject: "Cybersecurity",
                title: "What is social engineering in the context of cybersecurity?",
                choices: ["Manipulating people into divulging confidential information", "Breaking into systems using technical means", "Creating malware to infect systems", "Scanning for vulnerabilities"],
                correctAnswer: "Manipulating people into divulging confidential information"
            },
            {
                subject: "Cybersecurity",
                title: "Which security measure involves converting data into a format that is unreadable without a decryption key?",
                choices: ["Encryption", "Hashing", "Tokenization", "Obfuscation"],
                correctAnswer: "Encryption"
            },
            {
                subject: "Cybersecurity",
                title: "What is a VPN used for?",
                choices: ["To create a secure connection over a public network", "To scan for vulnerabilities", "To manage passwords", "To provide a backup solution"],
                correctAnswer: "To create a secure connection over a public network"
            },
            {
                subject: "Cybersecurity",
                title: "What is an SQL injection attack?",
                choices: ["An attack that exploits vulnerabilities in a web application's SQL database", "An attack that involves sending malicious emails", "An attack that manipulates network traffic", "An attack that involves unauthorized access to physical systems"],
                correctAnswer: "An attack that exploits vulnerabilities in a web application's SQL database"
            },
            {
                subject: "Cybersecurity",
                title: "What is multi-factor authentication?",
                choices: ["A security process that requires multiple forms of verification", "A method to encrypt data", "A technique to hide data", "A process to scan for vulnerabilities"],
                correctAnswer: "A security process that requires multiple forms of verification"
            },
            {
                subject: "Cybersecurity",
                title: "What is a zero-day vulnerability?",
                choices: ["A vulnerability that is unknown to the vendor and has no patch", "A vulnerability that has been patched", "A vulnerability that is publicly disclosed", "A vulnerability that is fixed on the same day it is discovered"],
                correctAnswer: "A vulnerability that is unknown to the vendor and has no patch"
            },
            {
                subject: "Cybersecurity",
                title: "What is a DDoS attack?",
                choices: ["An attack that floods a server with traffic to overwhelm it", "An attack that involves intercepting communications", "An attack that manipulates user behavior", "An attack that exploits software vulnerabilities"],
                correctAnswer: "An attack that floods a server with traffic to overwhelm it"
            },
            {
                subject: "Cybersecurity",
                title: "What is a brute force attack?",
                choices: ["An attack that tries all possible passwords until the correct one is found", "An attack that exploits software vulnerabilities", "An attack that involves phishing emails", "An attack that intercepts network traffic"],
                correctAnswer: "An attack that tries all possible passwords until the correct one is found"
            },
            {
                subject: "Cybersecurity",
                title: "Which protocol is commonly used to encrypt communications over the internet?",
                choices: ["HTTPS", "HTTP", "FTP", "SMTP"],
                correctAnswer: "HTTPS"
            },
            {
                subject: "Next.js",
                title: "What is the primary function of Next.js?",
                choices: ["Server-side rendering and static site generation", "Client-side routing only", "Database management", "State management"],
                correctAnswer: "Server-side rendering and static site generation"
            },
            {
                subject: "Next.js",
                title: "How do you create a new page in a Next.js application?",
                choices: ["Create a new file in the `pages` directory", "Use the `next create page` command", "Add a new route in the `routes` directory", "Create a component in the `components` directory"],
                correctAnswer: "Create a new file in the `pages` directory"
            },
            {
                subject: "Next.js",
                title: "What is `getServerSideProps` used for in Next.js?",
                choices: ["Fetching data server-side for each request", "Fetching data client-side after the page loads", "Generating static pages at build time", "Handling API requests"],
                correctAnswer: "Fetching data server-side for each request"
            },
            {
                subject: "Next.js",
                title: "What is `getStaticProps` used for in Next.js?",
                choices: ["Generating static pages at build time", "Fetching data server-side for each request", "Handling client-side routing", "Managing state in components"],
                correctAnswer: "Generating static pages at build time"
            },
            {
                subject: "Next.js",
                title: "How do you add custom routes in Next.js?",
                choices: ["By modifying the `next.config.js` file", "By adding a `routes` directory", "By using the `next/router` module", "By creating dynamic routes in the `pages` directory"],
                correctAnswer: "By creating dynamic routes in the `pages` directory"
            },
            {
                subject: "Next.js",
                title: "What is the purpose of the `Link` component in Next.js?",
                choices: ["To enable client-side navigation between pages", "To link external resources", "To manage application state", "To handle form submissions"],
                correctAnswer: "To enable client-side navigation between pages"
            },
            {
                subject: "Next.js",
                title: "How do you enable API routes in Next.js?",
                choices: ["By creating files in the `pages/api` directory", "By configuring the `api` property in `next.config.js`", "By using the `next/api` module", "By defining routes in `api.js`"],
                correctAnswer: "By creating files in the `pages/api` directory"
            },
            {
                subject: "Next.js",
                title: "What is the purpose of the `useRouter` hook in Next.js?",
                choices: ["To access the router object and manage navigation", "To handle server-side rendering", "To fetch data from an API", "To manage global state"],
                correctAnswer: "To access the router object and manage navigation"
            },
            {
                subject: "Next.js",
                title: "How do you handle CSS in Next.js?",
                choices: ["By importing CSS files in components", "By using CSS-in-JS libraries only", "By configuring a global CSS file in `next.config.js`", "By adding CSS files in the `public` directory"],
                correctAnswer: "By importing CSS files in components"
            },
            {
                subject: "Next.js",
                title: "What is `getStaticPaths` used for in Next.js?",
                choices: ["Generating dynamic routes at build time", "Fetching data server-side", "Handling client-side routing", "Managing global state"],
                correctAnswer: "Generating dynamic routes at build time"
            },
            {
                subject: "Next.js",
                title: "How do you configure environment variables in Next.js?",
                choices: ["By adding them to the `.env.local` file", "By defining them in `next.config.js`", "By using the `process.env` object in code", "By setting them in the `public` directory"],
                correctAnswer: "By adding them to the `.env.local` file"
            },
            {
                subject: "Next.js",
                title: "What is the default port for running a Next.js development server?",
                choices: ["3000", "8080", "5000", "4000"],
                correctAnswer: "3000"
            },
            {
                subject: "Next.js",
                title: "How do you enable TypeScript support in Next.js?",
                choices: ["By installing `typescript` and creating a `tsconfig.json` file", "By using a TypeScript template during project creation", "By configuring `next.config.js`", "By adding TypeScript dependencies in `package.json`"],
                correctAnswer: "By installing `typescript` and creating a `tsconfig.json` file"
            },
            {
                subject: "Next.js",
                title: "What does the `Image` component from `next/image` provide?",
                choices: ["Optimized image loading and handling", "Image cropping tools", "Image editing features", "Image format conversion"],
                correctAnswer: "Optimized image loading and handling"
            },
            {
                subject: "Next.js",
                title: "How do you manage metadata in Next.js?",
                choices: ["By using the `Head` component from `next/head`", "By configuring the `next.config.js` file", "By using a third-party library", "By adding meta tags in `pages/_document.js`"],
                correctAnswer: "By using the `Head` component from `next/head`"
            },
            {
                subject: "Next.js",
                title: "What is the purpose of `next/link`?",
                choices: ["To create client-side navigation links", "To handle server-side rendering", "To fetch data from an API", "To manage state"],
                correctAnswer: "To create client-side navigation links"
            },
            {
                subject: "Next.js",
                title: "How can you handle authentication in Next.js?",
                choices: ["By using third-party authentication providers", "By configuring middleware", "By implementing session management", "By using custom server-side logic"],
                correctAnswer: "By using third-party authentication providers"
            },
            {
                subject: "Next.js",
                title: "What is the purpose of `next/image`?",
                choices: ["To optimize image loading", "To handle image uploads", "To manage image formats", "To create image galleries"],
                correctAnswer: "To optimize image loading"
            },
            {
                subject: "MySQL",
                title: "What is the primary function of MySQL?",
                choices: ["Relational database management", "NoSQL database management", "In-memory data storage", "File system management"],
                correctAnswer: "Relational database management"
            },
            {
                subject: "MySQL",
                title: "Which command is used to create a new database in MySQL?",
                choices: ["NEW DATABASE", "ADD DATABASE", "CREATE DATABASE", "MAKE DATABASE"],
                correctAnswer: "CREATE DATABASE"
            },
            {
                subject: "MySQL",
                title: "How do you retrieve all records from a table named 'users' in MySQL?",
                choices: ["GET ALL FROM users", "SELECT * FROM users", "FETCH * FROM users", "READ ALL FROM users"],
                correctAnswer: "SELECT * FROM users"
            },
            {
                subject: "MySQL",
                title: "What is the purpose of the `JOIN` clause in MySQL?",
                choices: ["To combine rows from two or more tables", "To filter rows based on conditions", "To sort rows in a table", "To aggregate data"],
                correctAnswer: "To combine rows from two or more tables"
            },
            {
                subject: "MySQL",
                title: "Which command is used to delete a table in MySQL?",
                choices: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
                correctAnswer: "DROP TABLE"
            },
            {
                subject: "MySQL",
                title: "How do you add a new column to an existing table in MySQL?",
                choices: ["ALTER TABLE table_name ADD column_name data_type", "MODIFY TABLE table_name ADD column_name data_type", "UPDATE TABLE table_name ADD column_name data_type", "CHANGE TABLE table_name ADD column_name data_type"],
                correctAnswer: "ALTER TABLE table_name ADD column_name data_type"
            },
            {
                subject: "MySQL",
                title: "What does the `GROUP BY` clause do in MySQL?",
                choices: ["Groups rows that have the same values into summary rows", "Filters rows based on conditions", "Sorts rows in a table", "Joins multiple tables"],
                correctAnswer: "Groups rows that have the same values into summary rows"
            },
            {
                subject: "MySQL",
                title: "Which command is used to update existing records in a table?",
                choices: ["UPDATE", "MODIFY", "CHANGE", "EDIT"],
                correctAnswer: "UPDATE"
            },
            {
                subject: "MySQL",
                title: "How do you add an index to a table column in MySQL?",
                choices: ["ALTER TABLE table_name ADD INDEX index_name (column_name)", "CREATE INDEX index_name ON table_name (column_name)", "ADD INDEX index_name TO table_name (column_name)", "INDEX column_name TO table_name"],
                correctAnswer: "CREATE INDEX index_name ON table_name (column_name)"
            },
            {
                subject: "MySQL",
                title: "What is the default storage engine for MySQL tables?",
                choices: ["InnoDB", "MyISAM", "MEMORY", "CSV"],
                correctAnswer: "InnoDB"
            },
            {
                subject: "MySQL",
                title: "Which command is used to create a new user in MySQL?",
                choices: ["CREATE USER", "NEW USER", "ADD USER", "REGISTER USER"],
                correctAnswer: "CREATE USER"
            },
            {
                subject: "MySQL",
                title: "What does the `HAVING` clause do in MySQL?",
                choices: ["Filters records after the `GROUP BY` clause", "Filters records before the `GROUP BY` clause", "Sorts records", "Joins tables"],
                correctAnswer: "Filters records after the `GROUP BY` clause"
            },
            {
                subject: "MySQL",
                title: "How do you find the number of rows in a table?",
                choices: ["SELECT COUNT(*) FROM table_name", "SELECT NUM_ROWS FROM table_name", "SHOW COUNT FROM table_name", "GET ROW_COUNT FROM table_name"],
                correctAnswer: "SELECT COUNT(*) FROM table_name"
            },
            {
                subject: "MySQL",
                title: "Which function is used to get the current date and time in MySQL?",
                choices: ["NOW()", "CURRENT_DATE()", "GET_DATE()", "SYSDATE()"],
                correctAnswer: "NOW()"
            },
            {
                subject: "MySQL",
                title: "What does the `DISTINCT` keyword do in MySQL?",
                choices: ["Removes duplicate values from results", "Sorts results in ascending order", "Joins multiple tables", "Groups results based on conditions"],
                correctAnswer: "Removes duplicate values from results"
            },
            {
                subject: "MySQL",
                title: "How do you create a foreign key relationship between two tables?",
                choices: ["By using the `FOREIGN KEY` constraint", "By using the `JOIN` clause", "By adding a unique index", "By defining a primary key"],
                correctAnswer: "By using the `FOREIGN KEY` constraint"
            },
            {
                subject: "MySQL",
                title: "Which command is used to view all databases in MySQL?",
                choices: ["SHOW DATABASES", "LIST DATABASES", "VIEW DATABASES", "SHOW ALL DATABASES"],
                correctAnswer: "SHOW DATABASES"
            },
            {
                subject: "MySQL",
                title: "How do you perform a case-insensitive search in MySQL?",
                choices: ["By using the `LIKE` operator with a case-insensitive collation", "By using the `ILIKE` operator", "By converting the column to lower case", "By using `CASE_INSENSITIVE` keyword"],
                correctAnswer: "By using the `LIKE` operator with a case-insensitive collation"
            },
            {
                subject: "MySQL",
                title: "What is the purpose of the `AUTO_INCREMENT` attribute in MySQL?",
                choices: ["To automatically increment the value of a column", "To set a default value for a column", "To ensure uniqueness of a column value", "To generate random values"],
                correctAnswer: "To automatically increment the value of a column"
            },
            {
                subject: "MongoDB",
                title: "What is the primary function of MongoDB?",
                choices: ["NoSQL database management", "Relational database management", "In-memory data storage", "File system management"],
                correctAnswer: "NoSQL database management"
            },
            {
                subject: "MongoDB",
                title: "How do you insert a new document into a collection in MongoDB?",
                choices: ["db.collection.insertOne()", "db.collection.add()", "db.collection.create()", "db.collection.put()"],
                correctAnswer: "db.collection.insertOne()"
            },
            {
                subject: "MongoDB",
                title: "What is the command to find all documents in a collection?",
                choices: ["db.collection.find()", "db.collection.get()", "db.collection.query()", "db.collection.select()"],
                correctAnswer: "db.collection.find()"
            },
            {
                subject: "MongoDB",
                title: "How do you update an existing document in MongoDB?",
                choices: ["db.collection.updateOne()", "db.collection.modify()", "db.collection.change()", "db.collection.replace()"],
                correctAnswer: "db.collection.updateOne()"
            },
            {
                subject: "MongoDB",
                title: "What is the purpose of the `_id` field in MongoDB?",
                choices: ["To uniquely identify each document", "To store metadata about the document", "To define the schema of the document", "To index the document"],
                correctAnswer: "To uniquely identify each document"
            },
            {
                subject: "MongoDB",
                title: "How do you delete a document from a collection in MongoDB?",
                choices: ["db.collection.deleteOne()", "db.collection.remove()", "db.collection.drop()", "db.collection.erase()"],
                correctAnswer: "db.collection.deleteOne()"
            },
            {
                subject: "MongoDB",
                title: "What is a replica set in MongoDB?",
                choices: ["A group of MongoDB servers that maintain the same data set", "A method to partition data across multiple servers", "A type of backup system", "A technique for caching data"],
                correctAnswer: "A group of MongoDB servers that maintain the same data set"
            },
            {
                subject: "MongoDB",
                title: "How do you create an index on a collection in MongoDB?",
                choices: ["db.collection.createIndex()", "db.collection.addIndex()", "db.collection.defineIndex()", "db.collection.index()"],
                correctAnswer: "db.collection.createIndex()"
            },
            {
                subject: "MongoDB",
                title: "What is a BSON format in MongoDB?",
                choices: ["A binary representation of JSON-like documents", "A text-based format for data exchange", "A method for encrypting data", "A protocol for data compression"],
                correctAnswer: "A binary representation of JSON-like documents"
            },
            {
                subject: "MongoDB",
                title: "What is the purpose of the `aggregate` function in MongoDB?",
                choices: ["To process and analyze data in stages", "To create indexes", "To delete documents", "To find documents"],
                correctAnswer: "To process and analyze data in stages"
            },
            {
                subject: "MongoDB",
                title: "What is sharding in MongoDB?",
                choices: ["Distributing data across multiple servers", "Creating replicas of data", "Backing up data", "Encrypting data"],
                correctAnswer: "Distributing data across multiple servers"
            },
            {
                subject: "MongoDB",
                title: "How do you sort documents in a collection in MongoDB?",
                choices: ["db.collection.find().sort()", "db.collection.orderBy()", "db.collection.arrange()", "db.collection.sort()"],
                correctAnswer: "db.collection.find().sort()"
            },
            {
                subject: "MongoDB",
                title: "What is the command to create a new collection in MongoDB?",
                choices: ["db.createCollection()", "db.collection.create()", "db.collection.add()", "db.collection.new()"],
                correctAnswer: "db.createCollection()"
            },
            {
                subject: "MongoDB",
                title: "What does the `findOneAndUpdate` method do in MongoDB?",
                choices: ["Finds a single document and updates it", "Finds and deletes a document", "Finds a document and replaces it", "Updates multiple documents"],
                correctAnswer: "Finds a single document and updates it"
            },
            {
                subject: "MongoDB",
                title: "What is a document in MongoDB?",
                choices: ["A JSON-like data structure", "A relational table", "A data type", "A database schema"],
                correctAnswer: "A JSON-like data structure"
            },
            {
                subject: "MongoDB",
                title: "How do you perform a text search in MongoDB?",
                choices: ["By using the `$text` operator", "By using the `$search` operator", "By using regular expressions", "By using the `find()` method"],
                correctAnswer: "By using the `$text` operator"
            },
            {
                subject: "MongoDB",
                title: "How do you enable text search indexing in MongoDB?",
                choices: ["By creating a text index", "By enabling text search in the configuration file", "By using a third-party search engine", "By converting documents to a text format"],
                correctAnswer: "By creating a text index"
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the `this` keyword in JavaScript?",
                choices: ["To refer to the current object", "To create new objects", "To define global variables", "To handle asynchronous code"],
                correctAnswer: "To refer to the current object"
            },
            {
                subject: "JavaScript",
                title: "How do you declare a variable with block scope in JavaScript?",
                choices: ["Using `let` or `const`", "Using `var`", "Using `static`", "Using `global`"],
                correctAnswer: "Using `let` or `const`"
            },
            {
                subject: "JavaScript",
                title: "What is the output of `console.log(typeof null)` in JavaScript?",
                choices: ["object", "null", "undefined", "function"],
                correctAnswer: "object"
            },
            {
                subject: "JavaScript",
                title: "How do you create a new object in JavaScript?",
                choices: ["Using the `new Object()` syntax", "Using the `{}` syntax", "Using the `Object.create()` method", "All of the above"],
                correctAnswer: "All of the above"
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the `bind` method in JavaScript?",
                choices: ["To create a new function with a specific `this` value", "To combine multiple functions", "To call a function immediately", "To defer the execution of a function"],
                correctAnswer: "To create a new function with a specific `this` value"
            },
            {
                subject: "JavaScript",
                title: "What is a closure in JavaScript?",
                choices: ["A function with access to its own scope, the outer function's scope, and the global scope", "A method for creating classes", "A way to handle asynchronous code", "A data type"],
                correctAnswer: "A function with access to its own scope, the outer function's scope, and the global scope"
            },
            {
                subject: "JavaScript",
                title: "What does the `Array.prototype.map` method do in JavaScript?",
                choices: ["Creates a new array with the results of calling a function on every element", "Filters elements from an array based on a condition", "Reduces an array to a single value", "Sorts the elements of an array"],
                correctAnswer: "Creates a new array with the results of calling a function on every element"
            },
            {
                subject: "JavaScript",
                title: "How do you handle asynchronous code in JavaScript?",
                choices: ["Using callbacks, promises, or async/await", "Using synchronous functions", "By blocking the main thread", "By using the `setTimeout` function"],
                correctAnswer: "Using callbacks, promises, or async/await"
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the `try...catch` statement in JavaScript?",
                choices: ["To handle exceptions and errors", "To create loops", "To define functions", "To manage variable scope"],
                correctAnswer: "To handle exceptions and errors"
            },
            {
                subject: "JavaScript",
                title: "What is event delegation in JavaScript?",
                choices: ["A technique to handle events at a higher level in the DOM", "A method to delay event handling", "A way to prevent event propagation", "A technique to create custom events"],
                correctAnswer: "A technique to handle events at a higher level in the DOM"
            },
            {
                subject: "JavaScript",
                title: "How do you check if a variable is an array in JavaScript?",
                choices: ["Using `Array.isArray()`", "Using `typeof`", "Using `instanceof Array`", "Both A and C"],
                correctAnswer: "Both A and C"
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the `JSON.stringify()` method?",
                choices: ["To convert a JavaScript object to a JSON string", "To parse a JSON string into a JavaScript object", "To clone a JavaScript object", "To validate a JSON string"],
                correctAnswer: "To convert a JavaScript object to a JSON string"
            },
            {
                subject: "JavaScript",
                title: "What is the difference between `==` and `===` in JavaScript?",
                choices: ["`==` performs type coercion, `===` does not", "`==` checks for strict equality, `===` checks for loose equality", "`==` is used for object comparison, `===` is used for primitive comparison", "There is no difference"],
                correctAnswer: "`==` performs type coercion, `===` does not"
            },
            {
                subject: "JavaScript",
                title: "How do you create a new promise in JavaScript?",
                choices: ["Using the `Promise` constructor", "Using the `new Promise()` syntax", "By calling `Promise.create()`", "Using `async` functions"],
                correctAnswer: "Using the `Promise` constructor"
            },
            {
                subject: "JavaScript",
                title: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
                choices: ["false", "true", "undefined", "NaN"],
                correctAnswer: "false"
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the `forEach` method in JavaScript?",
                choices: ["To execute a function on each element of an array", "To create a new array", "To filter elements in an array", "To sort elements in an array"],
                correctAnswer: "To execute a function on each element of an array"
            },
            {
                subject: "JavaScript",
                title: "How do you define a function in JavaScript?",
                choices: ["Using the `function` keyword", "Using arrow function syntax", "Using the `Function` constructor", "All of the above"],
                correctAnswer: "All of the above"
            },
            {
                subject: "JavaScript",
                title: "What is the `spread` operator used for in JavaScript?",
                choices: ["To expand elements of an array or object", "To merge multiple arrays or objects", "To copy objects", "All of the above"],
                correctAnswer: "All of the above"
            },
            {
                subject: "TypeScript",
                title: "What is TypeScript?",
                choices: ["A typed superset of JavaScript", "A JavaScript library", "A runtime environment", "A database management system"],
                correctAnswer: "A typed superset of JavaScript"
            },
            {
                subject: "TypeScript",
                title: "How do you declare a variable with a specific type in TypeScript?",
                choices: ["Using type annotations", "Using `typeof`", "Using `instanceof`", "Using `new` keyword"],
                correctAnswer: "Using type annotations"
            },
            {
                subject: "TypeScript",
                title: "What is the purpose of `interface` in TypeScript?",
                choices: ["To define the structure of an object", "To declare functions", "To create classes", "To manage modules"],
                correctAnswer: "To define the structure of an object"
            },
            {
                subject: "TypeScript",
                title: "How do you define a function with optional parameters in TypeScript?",
                choices: ["By appending `?` to the parameter name", "By using `null` values", "By defining default values", "By using `undefined`"],
                correctAnswer: "By appending `?` to the parameter name"
            },
            {
                subject: "TypeScript",
                title: "What is the purpose of `type` in TypeScript?",
                choices: ["To create custom types", "To define classes", "To handle modules", "To declare variables"],
                correctAnswer: "To create custom types"
            },
            {
                subject: "TypeScript",
                title: "What is type inference in TypeScript?",
                choices: ["Automatically determining the type of a variable", "Specifying types explicitly", "Casting types manually", "Using `any` type"],
                correctAnswer: "Automatically determining the type of a variable"
            },
            {
                subject: "TypeScript",
                title: "How do you create a union type in TypeScript?",
                choices: ["By using the `|` operator", "By using the `&` operator", "By using parentheses", "By using arrays"],
                correctAnswer: "By using the `|` operator"
            },
            {
                subject: "TypeScript",
                title: "What is the difference between `type` and `interface` in TypeScript?",
                choices: ["`type` can define unions and intersections; `interface` is mainly for object shapes", "`interface` can define unions and intersections; `type` is mainly for object shapes", "`type` is used for classes; `interface` is used for functions", "There is no difference"],
                correctAnswer: "`type` can define unions and intersections; `interface` is mainly for object shapes"
            },
            {
                subject: "TypeScript",
                title: "How do you define a class in TypeScript?",
                choices: ["Using the `class` keyword", "Using the `define` keyword", "Using a function", "Using a constructor"],
                correctAnswer: "Using the `class` keyword"
            },
            {
                subject: "TypeScript",
                title: "What is a tuple in TypeScript?",
                choices: ["An array with fixed size and known types", "A special type of object", "A collection of different objects", "A list of functions"],
                correctAnswer: "An array with fixed size and known types"
            },
            {
                subject: "TypeScript",
                title: "How do you extend an interface in TypeScript?",
                choices: ["By using the `extends` keyword", "By using `interface` keyword", "By using `inherit` keyword", "By using `implements` keyword"],
                correctAnswer: "By using the `extends` keyword"
            },
            {
                subject: "العربية",
                title: "ما هو الاسم الكامل للغة العربية؟",
                choices: ["اللغة العربية الفصحى", "اللغة العربية الشائعة", "اللغة العربية القديمة", "اللغة العربية المعاصرة"],
                correctAnswer: "اللغة العربية الفصحى"
            },
            {
                subject: "العربية",
                title: "ما هو الأصل الجذري لكلمة 'مكتبة'؟",
                choices: ["كتب", "مكتب", "مكتوب", "مكتبات"],
                correctAnswer: "كتب"
            },
            {
                subject: "العربية",
                title: "ما هي الحروف التي تشكل كلمة 'ماء'؟",
                choices: ["م، ء، ا", "م، ا، ء", "م، ء، ل", "م، ل، ء"],
                correctAnswer: "م، ء، ا"
            },
            {
                subject: "العربية",
                title: "ما هو الفعل المجرد في اللغة العربية؟",
                choices: ["الفعل الذي لا يتغير", "الفعل الذي يحتوي على مزيد من الأوزان", "الفعل الذي يحتوي على جذر ثلاثي", "الفعل الذي يضاف إليه مسببات"],
                correctAnswer: "الفعل الذي يحتوي على جذر ثلاثي"
            },
            {
                subject: "العربية",
                title: "ما هي أدوات الاستفهام في اللغة العربية؟",
                choices: ["ما، أين، متى، كيف، لماذا", "هل، من، الذي، كيف، متى", "متى، لماذا، من، ما، أين", "من، أين، متى، كيف، هل"],
                correctAnswer: "ما، أين، متى، كيف، لماذا"
            },
            {
                subject: "العربية",
                title: "ما هو معنى كلمة 'عمر' في اللغة العربية؟",
                choices: ["حياة أو مدة", "مكان سكن", "عمل أو شغل", "شيء ثمين"],
                correctAnswer: "حياة أو مدة"
            },
            {
                subject: "العربية",
                title: "ما هي صيغة جمع كلمة 'كتاب'؟",
                choices: ["كتب", "كُتب", "كُتباء", "كتبون"],
                correctAnswer: "كتب"
            },
            {
                subject: "العربية",
                title: "ما هي الحالة التي يتم فيها استخدام الأسماء الموصولة في اللغة العربية؟",
                choices: ["للإشارة إلى الأشخاص أو الأشياء", "لإضافة التوكيد", "لإضافة الصفة", "للتفصيل"],
                correctAnswer: "للإشارة إلى الأشخاص أو الأشياء"
            },
            {
                subject: "العربية",
                title: "كيف يتم استخدام الفعل المضارع في الجملة العربية؟",
                choices: ["للدلالة على الفعل الحالي أو المستقبلي", "للدلالة على الفعل الماضي", "للدلالة على الحالة", "للدلالة على الأمر"],
                correctAnswer: "للدلالة على الفعل الحالي أو المستقبلي"
            },
            {
                subject: "العربية",
                title: "ما هي الفروق بين الفعل المبني والفعل المعرب؟",
                choices: ["المبني لا يتغير في آخره، المعرب يتغير حسب موقعه", "المبني يتغير حسب الموقع، المعرب لا يتغير", "المبني يأتي فقط في الأسماء، المعرب يأتي في الأفعال", "لا يوجد فرق"],
                correctAnswer: "المبني لا يتغير في آخره، المعرب يتغير حسب موقعه"
            },
            {
                subject: "العربية",
                title: "ما هو المصدر في اللغة العربية؟",
                choices: ["اسم يدل على الفعل نفسه", "اسم يدل على مكان الفعل", "اسم يدل على زمان الفعل", "اسم يدل على كيفية الفعل"],
                correctAnswer: "اسم يدل على الفعل نفسه"
            },
            {
                subject: "العربية",
                title: "ما هي أساليب التعبير عن الزمان في اللغة العربية؟",
                choices: ["أدوات الزمان مثل 'في' و'خلال' و'منذ'", "أدوات المكان مثل 'في' و'على' و'تحت'", "أدوات التعجب مثل 'ما' و'ألا'", "أدوات الشرط مثل 'إذا' و'عندما'"],
                correctAnswer: "أدوات الزمان مثل 'في' و'خلال' و'منذ'"
            },
            {
                subject: "العربية",
                title: "ما هي الأسماء التي تتطلب التنوين في اللغة العربية؟",
                choices: ["الأسماء التي لا تنتهي بألف", "الأسماء التي تنتهي بألف", "الأسماء التي تبدأ بلام", "الأسماء التي تبدأ بحرف مخصص"],
                correctAnswer: "الأسماء التي لا تنتهي بألف"
            },
            {
                subject: "العربية",
                title: "ما هو نوع الجملة التي تبدأ بأداة شرط؟",
                choices: ["جملة شرطية", "جملة استفهامية", "جملة خبرية", "جملة تعجبية"],
                correctAnswer: "جملة شرطية"
            },
            {
                subject: "العربية",
                title: "ما هو نوع الجملة التي تتضمن فعل ماضٍ وفعل مضارع؟",
                choices: ["جملة فعلية", "جملة اسمية", "جملة شرطية", "جملة استفهامية"],
                correctAnswer: "جملة فعلية"
            },
            {
                subject: "العربية",
                title: "ما هي القواعد الأساسية لتشكيل الجملة الاسمية في اللغة العربية؟",
                choices: ["تبدأ باسم وتكون بدون فعل", "تبدأ بفعل وتكون بدون اسم", "تبدأ بحرف جر وتكون بدون فعل", "تبدأ بفعل مضارع وتكون بدون اسم"],
                correctAnswer: "تبدأ باسم وتكون بدون فعل"
            },
            {
                subject: "العربية",
                title: "ما هي الطريقة الصحيحة لاستخدام علامات الترقيم في اللغة العربية؟",
                choices: ["تستخدم علامات الترقيم بشكل مشابه للغات الأخرى", "تستخدم علامات الترقيم بشكل مميز مثل وضع الفاصلة في كل جملة", "تستخدم علامات الترقيم في نهاية الفقرات فقط", "تستخدم علامات الترقيم بشكل عشوائي"],
                correctAnswer: "تستخدم علامات الترقيم بشكل مشابه للغات الأخرى"
            },
            {
                subject: "العربية",
                title: "ما هو الفرق بين التنوين والتشكيل في اللغة العربية؟",
                choices: ["التنوين هو إضافة نهاية للكلمة، والتشكيل هو تعديل الأحرف", "التنوين هو تعديل الأحرف، والتشكيل هو إضافة نهاية للكلمة", "التنوين هو في الأسماء فقط، والتشكيل هو في الأفعال فقط", "التنوين والتشكيل هما نفس الشيء"],
                correctAnswer: "التنوين هو إضافة نهاية للكلمة، والتشكيل هو تعديل الأحرف"
            },
            {
                subject: "العربية",
                title: "ما هي أدوات النفي في اللغة العربية؟",
                choices: ["ليس، ما، لا، لم، لن", "أن، لكن، حتى، لأن", "إذا، رغم، لذلك، ثم", "و، أو، أوّلاً، أخيراً"],
                correctAnswer: "ليس، ما، لا، لم، لن"
            },
            {
                subject: "العربية",
                title: "ما هي الأمثلة على الأسماء الموصولة في اللغة العربية؟",
                choices: ["الذي، التي، الذين، اللواتي", "الذي، التي، هم، هي", "من، ما، أي، كل", "هذا، تلك، هؤلاء، أولئك"],
                correctAnswer: "الذي، التي، الذين، اللواتي"
            },
            {
                subject: "العربية",
                title: "ما هو النعت في اللغة العربية؟",
                choices: ["صفة تابعة تضاف إلى الاسم وتوافقه في الإعراب", "فعل يصف كيفية حدوث شيء", "أداة تعبير عن التوقيت", "اسم يدل على المكان"],
                correctAnswer: "صفة تابعة تضاف إلى الاسم وتوافقه في الإعراب"
            },
            {
                subject: "العربية",
                title: "كيف يتم تصريف الأفعال في اللغة العربية؟",
                choices: ["بناءً على الجذر والوزن", "بناءً على الزمن فقط", "بناءً على عدد الحروف", "بناءً على السياق"],
                correctAnswer: "بناءً على الجذر والوزن"
            },
            {
                subject: "العربية",
                title: "ما هو الاستخدام الصحيح للأحرف المشددة في اللغة العربية؟",
                choices: ["لتأكيد الصوت وتكراره", "لتغيير معنى الكلمة", "لتعديل زمن الفعل", "لإضافة التنوين"],
                correctAnswer: "لتأكيد الصوت وتكراره"
            }, {
                subject: "Tamazight",
                title: "ⵉⵙ ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⵉⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵢ ⵔⵓⴽ⩙",
                choices: ["ⵜⴰⵥⴰⵔⵜ", "ⵜⴰⴼⵙⵓⵜ", "ⵜⴰⵥⵔⴰⵔⵜ", "ⵜⴰⵡⴰⵇⵓⵍⵜ"],
                correctAnswer: "ⵜⴰ⥵ⴰⵔⵜ"
            },
            {
                subject: "Tamazight",
                title: "ⵣⵉⵡⵓⵏ ⵣⴰⵍⵓⵏ ⵢⴰⵏⴰ ⵓⵏⵉⵣⵓⵏⵏⵉ",
                choices: ["ⵜⵉⴼⵉⵏⴰⵃ", "ⵍⴰⵜⵉⵏ", "ⵔⵓⵍⵉⵇ", "ⵃⵉⵔⵉⵍⵉⵏ"],
                correctAnswer: "ⵜⵉⴼⵉⵏⴰⵃ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵥⵍⵉⵃ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⵉⵙ ⵜⴰ⎦ⴰⵣⵉⵖⵜ ⵍⵉⵏⴰⵍ ⵎⴰⵣⵉⵖ",
                choices: ["ⴳⵡⴰⵣⵓⵅ", "ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴳⵡⴰⵣⵉⵖ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "Tamazight",
                title: "ⴰⵎⴰⵣⵉⵖ ⵉⵙⵉ ⴰⵎⴰⵣⵉⵖⵜ",
                choices: ["ⴰⵎⴰⵣⵉⵖ", "ⴰⵎⴷⴰⵏ", "ⴰⵎⴰⵣⵏ", "ⴰⵙⵉⵏ"],
                correctAnswer: "ⴰⵎⴰⵣⵉⵖ"
            },
            {
                subject: "English",
                title: "What is the capital city of the United Kingdom?",
                choices: ["Paris", "Berlin", "London", "Madrid"],
                correctAnswer: "London"
            },
            {
                subject: "English",
                title: "What is the past tense of 'go'?",
                choices: ["Going", "Gone", "Goes", "Went"],
                correctAnswer: "Went"
            },
            {
                subject: "English",
                title: "Which of the following is a synonym for 'happy'?",
                choices: ["Sad", "Joyful", "Angry", "Tired"],
                correctAnswer: "Joyful"
            },
            {
                subject: "English",
                title: "What is the plural form of 'child'?",
                choices: ["Childs", "Childer", "Children", "Childrens"],
                correctAnswer: "Children"
            },
            {
                subject: "English",
                title: "Which verb means 'to obtain something'?",
                choices: ["Give", "Take", "Bring", "Receive"],
                correctAnswer: "Receive"
            },
            {
                subject: "English",
                title: "Which of the following sentences is grammatically correct?",
                choices: ["She don't like ice cream.", "She didn't likes ice cream.", "She doesn't like ice cream.", "She doesn't likes ice cream."],
                correctAnswer: "She doesn't like ice cream."
            },
            {
                subject: "English",
                title: "What is the comparative form of 'good'?",
                choices: ["Gooder", "Best", "Well", "Better"],
                correctAnswer: "Better"
            },
            {
                subject: "English",
                title: "Which punctuation mark is used to show possession?",
                choices: ["Comma", "Period", "Question Mark", "Apostrophe"],
                correctAnswer: "Apostrophe"
            },
            {
                subject: "English",
                title: "What is the opposite of 'difficult'?",
                choices: ["Hard", "Challenging", "Complex", "Easy"],
                correctAnswer: "Easy"
            },
            {
                subject: "English",
                title: "Which of the following is an adverb?",
                choices: ["Quick", "Quickness", "Quicker", "Quickly"],
                correctAnswer: "Quickly"
            },
            {
                subject: "English",
                title: "What is the term for a word that has the same meaning as another word?",
                choices: ["Antonym", "Homonym", "Synonym", "Prefix"],
                correctAnswer: "Synonym"
            },
            {
                subject: "English",
                title: "What is the past participle of 'eat'?",
                choices: ["Ate", "Eats", "Eating", "Eaten"],
                correctAnswer: "Eaten"
            },
            {
                subject: "English",
                title: "Which of the following is a compound word?",
                choices: ["Flower", "Sunny", "Sun", "Sunflower"],
                correctAnswer: "Sunflower"
            },
            {
                subject: "English",
                title: "What is the term for the beginning of a story?",
                choices: ["Conclusion", "Climax", "Resolution", "Introduction"],
                correctAnswer: "Introduction"
            },
            {
                subject: "English",
                title: "Which of the following words is a noun?",
                choices: ["Run", "Jump", "Quickly", "Happiness"],
                correctAnswer: "Happiness"
            },
            {
                subject: "English",
                title: "What is the term for a word that sounds like another word but has a different meaning?",
                choices: ["Antonym", "Homonym", "Homophone", "Synonym"],
                correctAnswer: "Homophone"
            },
            {
                subject: "English",
                title: "What is the correct form of the verb 'to be' in the sentence 'She ___ happy.'?",
                choices: ["am", "are", "be", "is"],
                correctAnswer: "is"
            },
            {
                subject: "English",
                title: "Which of the following sentences is in the passive voice?",
                choices: ["The children ate the cake.", "The cake is eating by the children.", "The children were eating the cake.", "The cake was eaten by the children."],
                correctAnswer: "The cake was eaten by the children."
            },
            {
                subject: "English",
                title: "What is the term for a word that modifies a noun?",
                choices: ["Adverb", "Verb", "Pronoun", "Adjective"],
                correctAnswer: "Adjective"
            },
            {
                subject: "English",
                title: "What is the past tense of 'write'?",
                choices: ["Written", "Write", "Writes", "Wrote"],
                correctAnswer: "Wrote"
            },
            {
                subject: "English",
                title: "Which of the following sentences uses a preposition?",
                choices: ["She store went.", "She went to the store.", "She went the store.", "She were eating the cake."],
                correctAnswer: "She went to the store."
            },
            {
                subject: "English",
                title: "What is the term for a story's central idea or message?",
                choices: ["Plot", "Setting", "Character", "Theme"],
                correctAnswer: "Theme"
            },
            {
                subject: "Python",
                title: "What is the keyword used to define a function in Python?",
                choices: ["function", "def", "func", "define"],
                correctAnswer: "def"
            },
            {
                subject: "Python",
                title: "How do you create a list in Python?",
                choices: ["list = ()", "list = {}", "list = []", "list = <>"],
                correctAnswer: "list = []"
            },
            {
                subject: "Python",
                title: "Which method is used to add an item to the end of a list?",
                choices: ["append()", "add()", "insert()", "extend()"],
                correctAnswer: "append()"
            },
            {
                subject: "Python",
                title: "How do you comment a single line in Python?",
                choices: ["//", "#", "/*", "--"],
                correctAnswer: "#"
            },
            {
                subject: "Python",
                title: "What is the output of `print(2 ** 3)`?",
                choices: ["6", "8", "9", "16"],
                correctAnswer: "8"
            },
            {
                subject: "Python",
                title: "Which of the following is not a valid data type in Python?",
                choices: ["list", "dictionary", "integer", "array"],
                correctAnswer: "array"
            },
            {
                subject: "Python",
                title: "How do you create a tuple in Python?",
                choices: ["tuple = []", "tuple = {}", "tuple = ()", "tuple = <>"],
                correctAnswer: "tuple = ()"
            },
            {
                subject: "Python",
                title: "What does the `len()` function do?",
                choices: ["Returns the length of an object", "Converts a string to a list", "Adds two numbers", "Creates a new list"],
                correctAnswer: "Returns the length of an object"
            },
            {
                subject: "Python",
                title: "How do you start a `for` loop in Python?",
                choices: ["for item in iterable:", "for item of iterable:", "loop item in iterable:", "foreach item in iterable:"],
                correctAnswer: "for item in iterable:"
            },
            {
                subject: "Python",
                title: "Which keyword is used to handle exceptions in Python?",
                choices: ["catch", "try", "handle", "except"],
                correctAnswer: "try"
            },
            {
                subject: "Python",
                title: "How do you define a class in Python?",
                choices: ["class ClassName:", "define ClassName:", "create ClassName:", "class ClassName{}:"],
                correctAnswer: "class ClassName:"
            },
            {
                subject: "Python",
                title: "What is the output of `print(5 // 2)`?",
                choices: ["2.5", "2", "3", "4"],
                correctAnswer: "2"
            },
            {
                subject: "Python",
                title: "Which function is used to read input from the user?",
                choices: ["input()", "read()", "get()", "scan()"],
                correctAnswer: "input()"
            },
            {
                subject: "Python",
                title: "How do you check if a key exists in a dictionary?",
                choices: ["key in dictionary", "dictionary.has_key(key)", "key.exists(dictionary)", "dictionary.contains(key)"],
                correctAnswer: "key in dictionary"
            },
            {
                subject: "Python",
                title: "What is the correct way to import a module in Python?",
                choices: ["import module", "include module", "require module", "using module"],
                correctAnswer: "import module"
            },
            {
                subject: "Python",
                title: "What will `print(0.1 + 0.2 == 0.3)` output?",
                choices: ["True", "False", "Error", "None"],
                correctAnswer: "False"
            },
            {
                subject: "Python",
                title: "What is the output of `print(type([]))`?",
                choices: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
                correctAnswer: "<class 'list'>"
            },
            {
                subject: "Python",
                title: "How do you remove an item from a list by index?",
                choices: ["list.remove(index)", "list.pop(index)", "list.delete(index)", "list.erase(index)"],
                correctAnswer: "list.pop(index)"
            },
            {
                subject: "Python",
                title: "Which method is used to convert a string to uppercase?",
                choices: ["upper()", "uppercase()", "to_upper()", "capitalize()"],
                correctAnswer: "upper()"
            },
            {
                subject: "Python",
                title: "What does the `range()` function return?",
                choices: ["A list", "A dictionary", "An iterable", "A set"],
                correctAnswer: "An iterable"
            },
            {
                subject: "Python",
                title: "How do you concatenate two strings in Python?",
                choices: ["str1 + str2", "str1.concat(str2)", "str1.append(str2)", "str1.extend(str2)"],
                correctAnswer: "str1 + str2"
            },
            {
                subject: "Python",
                title: "What will `print(1 == True)` output?",
                choices: ["True", "False", "Error", "None"],
                correctAnswer: "True"
            }, {
                subject: "الإسلام",
                title: "ما هو اسم النبي الذي تلقى الوحي في غار حراء?",
                choices: ["عيسى", "موسى", "محمد", "إبراهيم"],
                correctAnswer: "محمد"
            },
            {
                subject: "الإسلام",
                title: "ما هي الصلاة التي تُصلى في الصباح?",
                choices: ["العصر", "الظهر", "المغرب", "الفجر"],
                correctAnswer: "الفجر"
            },
            {
                subject: "الإسلام",
                title: "ما هي أركان الإسلام?",
                choices: ["الصلاة، الصيام، الزكاة، الحج، الشهادة", "الصلاة، الزكاة، الصوم، الإيمان، الحج", "الشهادة، الصلاة، الصيام، الزكاة، التوحيد", "الصلاة، الصوم، الزكاة، الإيمان، الجهاد"],
                correctAnswer: "الصلاة، الصيام، الزكاة، الحج، الشهادة"
            },
            {
                subject: "الإسلام",
                title: "ما هو الكتاب المقدس في الإسلام?",
                choices: ["التوراة", "الإنجيل", "القرآن", "الزبور"],
                correctAnswer: "القرآن"
            },
            {
                subject: "الإسلام",
                title: "من هو أول من أسلم من الصحابة?",
                choices: ["أبو بكر الصديق", "عمر بن الخطاب", "علي بن أبي طالب", "عثمان بن عفان"],
                correctAnswer: "أبو بكر الصديق"
            },
            {
                subject: "الإسلام",
                title: "ما هي الشهادتان في الإسلام?",
                choices: ["لا إله إلا الله، محمد رسول الله", "سبحان الله، الحمد لله", "الله أكبر، لا إله إلا الله", "محمد رسول الله، الله أكبر"],
                correctAnswer: "لا إله إلا الله، محمد رسول الله"
            },
            {
                subject: "الإسلام",
                title: "ما هو شهر الصيام في الإسلام?",
                choices: ["رمضان", "شوال", "ذو الحجة", "محرم"],
                correctAnswer: "رمضان"
            },
            {
                subject: "الإسلام",
                title: "ما هي الصلاة التي تُصلى بعد المغرب?",
                choices: ["العشاء", "الظهر", "الفجر", "القيام"],
                correctAnswer: "العشاء"
            },
            {
                subject: "الإسلام",
                title: "ما هو المكان الذي وُلد فيه النبي محمد صلى الله عليه وسلم?",
                choices: ["مكة", "المدينة", "بدر", "الكعبة"],
                correctAnswer: "مكة"
            },
            {
                subject: "الإسلام",
                title: "ما هي الزكاة في الإسلام?",
                choices: ["تقديم المال للفقراء", "الصلاة في المساجد", "الصوم في رمضان", "الحج إلى مكة"],
                correctAnswer: "تقديم المال للفقراء"
            },
            {
                subject: "الإسلام",
                title: "ما هو فرض الصلاة في الإسلام?",
                choices: ["الصلاة خمس مرات في اليوم", "الصلاة ثلاث مرات في اليوم", "الصلاة مرة واحدة في اليوم", "الصلاة سبع مرات في اليوم"],
                correctAnswer: "الصلاة خمس مرات في اليوم"
            },
            {
                subject: "الإسلام",
                title: "من هو الصحابي الذي شهد غزوة بدر وأحد؟",
                choices: ["خالد بن الوليد", "سلمان الفارسي", "عبد الله بن مسعود", "سيدنا أبو بكر الصديق"],
                correctAnswer: "سيدنا أبو بكر الصديق"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم المسجد الذي أسسه النبي محمد صلى الله عليه وسلم في المدينة المنورة?",
                choices: ["مسجد الحرام", "مسجد قباء", "مسجد النبوي", "مسجد الأقصى"],
                correctAnswer: "مسجد النبوي"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم السورة التي تُقرأ في صلاة الفجر?",
                choices: ["سورة الفاتحة", "سورة الإخلاص", "سورة البقرة", "سورة الكافرون"],
                correctAnswer: "سورة الفاتحة"
            },
            {
                subject: "الإسلام",
                title: "ما هي الحج في الإسلام?",
                choices: ["زيارة المسجد النبوي", "زيارة مكة لأداء مناسك محددة", "العمرة في رمضان", "الصلاة في المسجد"],
                correctAnswer: "زيارة مكة لأداء مناسك محددة"
            },
            {
                subject: "الإسلام",
                title: "ما هي السنة النبوية?",
                choices: ["أقوال النبي محمد صلى الله عليه وسلم", "القرآن الكريم", "مواقف الصحابة", "أقوال الخلفاء"],
                correctAnswer: "أقوال النبي محمد صلى الله عليه وسلم"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم الصحابي الذي كان يلقب بـ 'أمين الأمة'?",
                choices: ["عمر بن الخطاب", "عثمان بن عفان", "أبو بكر الصديق", "عبد الله بن عباس"],
                correctAnswer: "عثمان بن عفان"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم كتاب فقه الإمام الشافعي?",
                choices: ["الجامع", "الموطأ", "الأم", "الكتاب"],
                correctAnswer: "الأم"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم الصلاة التي تُصلى بعد الظهر?",
                choices: ["العصر", "المغرب", "القيام", "النفل"],
                correctAnswer: "النفل"
            },
            {
                subject: "الإسلام",
                title: "ما هي السورة التي تبدأ بـ 'بسم الله الرحمن الرحيم' في القرآن الكريم?",
                choices: ["سورة الفاتحة", "سورة الكهف", "سورة النساء", "سورة الحشر"],
                correctAnswer: "سورة الفاتحة"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم القبلة التي يتوجه إليها المسلمون أثناء الصلاة?",
                choices: ["الكعبة", "القدس", "المدينة", "المسجد الأقصى"],
                correctAnswer: "الكعبة"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم سورة التوحيد?",
                choices: ["سورة الإخلاص", "سورة الكافرون", "سورة الفلق", "سورة الناس"],
                correctAnswer: "سورة الإخلاص"
            },
            {
                subject: "الإسلام",
                title: "ما هو الاسم الذي يُطلق على الزكاة التي تُعطى للفقراء والمساكين?",
                choices: ["الصدقة", "الزكاة", "الأوقاف", "الفدية"],
                correctAnswer: "الزكاة"
            },
            {
                subject: "الإسلام",
                title: "ما هو اسم النبي الذي رُسل إلى بني إسرائيل?",
                choices: ["محمد", "موسى", "عيسى", "إبراهيم"],
                correctAnswer: "موسى"
            },
            {
                subject: "الإسلام",
                title: "ما هي الأركان الأساسية للإيمان في الإسلام?",
                choices: ["الإيمان بالله، الملائكة، الكتب، الرسل، اليوم الآخر، القدر", "الإيمان بالله، الرسل، الكتب، الحج، الصوم", "الإيمان بالله، الصلاة، الزكاة، الصوم، الحج", "الإيمان بالله، الإيمان بالملائكة، الإيمان بالصلاة، الإيمان بالزكاة"],
                correctAnswer: "الإيمان بالله، الملائكة، الكتب، الرسل، اليوم الآخر، القدر"
            }, {
                subject: "Physics",
                title: "What is the SI unit of force?",
                choices: ["Newton", "Joule", "Watt", "Pascal"],
                correctAnswer: "Newton"
            },
            {
                subject: "Physics",
                title: "Who is known as the father of modern physics?",
                choices: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
                correctAnswer: "Albert Einstein"
            },
            {
                subject: "Physics",
                title: "What is the speed of light in a vacuum?",
                choices: ["3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^9 m/s", "3 x 10^7 m/s"],
                correctAnswer: "3 x 10^8 m/s"
            },
            {
                subject: "Physics",
                title: "What law states that for every action there is an equal and opposite reaction?",
                choices: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"],
                correctAnswer: "Newton's Third Law"
            },
            {
                subject: "Physics",
                title: "What is the formula for calculating kinetic energy?",
                choices: ["KE = 1/2 mv^2", "KE = mgh", "KE = mv", "KE = 1/2 mgh"],
                correctAnswer: "KE = 1/2 mv^2"
            },
            {
                subject: "Physics",
                title: "What is the unit of electrical resistance?",
                choices: ["Ohm", "Volt", "Ampere", "Watt"],
                correctAnswer: "Ohm"
            },
            {
                subject: "Physics",
                title: "What is the principle behind a lever?",
                choices: ["Conservation of Energy", "Archimedes' Principle", "Law of Moments", "Hooke's Law"],
                correctAnswer: "Law of Moments"
            },
            {
                subject: "Physics",
                title: "What phenomenon explains the bending of light as it passes from one medium to another?",
                choices: ["Reflection", "Refraction", "Diffraction", "Interference"],
                correctAnswer: "Refraction"
            },
            {
                subject: "Physics",
                title: "What is the measure of the amount of matter in an object?",
                choices: ["Weight", "Mass", "Volume", "Density"],
                correctAnswer: "Mass"
            },
            {
                subject: "Physics",
                title: "What is the law of conservation of energy?",
                choices: ["Energy cannot be created or destroyed", "Energy can be transformed into matter", "Energy increases over time", "Energy is proportional to mass"],
                correctAnswer: "Energy cannot be created or destroyed"
            },
            {
                subject: "Physics",
                title: "What does the term 'frequency' refer to in physics?",
                choices: ["The number of waves per unit time", "The speed of a wave", "The height of a wave", "The direction of a wave"],
                correctAnswer: "The number of waves per unit time"
            },
            {
                subject: "Physics",
                title: "What is the name of the force that opposes the relative motion of solid surfaces in contact?",
                choices: ["Friction", "Gravity", "Tension", "Normal Force"],
                correctAnswer: "Friction"
            },
            {
                subject: "Physics",
                title: "What is the unit of power in the International System of Units (SI)?",
                choices: ["Joule", "Newton", "Watt", "Volt"],
                correctAnswer: "Watt"
            },
            {
                subject: "Physics",
                title: "What type of wave is a sound wave?",
                choices: ["Transverse Wave", "Longitudinal Wave", "Electromagnetic Wave", "Surface Wave"],
                correctAnswer: "Longitudinal Wave"
            },
            {
                subject: "Physics",
                title: "What is the equation for calculating force?",
                choices: ["F = ma", "F = mv", "F = mgh", "F = 1/2 mv^2"],
                correctAnswer: "F = ma"
            },
            {
                subject: "Physics",
                title: "What is the term for the change in velocity over time?",
                choices: ["Acceleration", "Speed", "Displacement", "Velocity"],
                correctAnswer: "Acceleration"
            },
            {
                subject: "Physics",
                title: "What is the gravitational constant (G) in Newton-meters squared per kilogram squared?",
                choices: ["9.8", "6.674 x 10^-11", "3 x 10^8", "1.6 x 10^-19"],
                correctAnswer: "6.674 x 10^-11"
            },
            {
                subject: "Physics",
                title: "What is the measure of the energy needed to raise the temperature of a substance?",
                choices: ["Specific Heat Capacity", "Heat of Vaporization", "Latent Heat", "Thermal Conductivity"],
                correctAnswer: "Specific Heat Capacity"
            },
            {
                subject: "Physics",
                title: "What type of energy is stored in a compressed spring?",
                choices: ["Kinetic Energy", "Gravitational Potential Energy", "Elastic Potential Energy", "Chemical Energy"],
                correctAnswer: "Elastic Potential Energy"
            },
            {
                subject: "Physics",
                title: "What is the name of the effect where light waves spread out when passing through a narrow slit?",
                choices: ["Refraction", "Reflection", "Diffraction", "Dispersion"],
                correctAnswer: "Diffraction"
            },
            {
                subject: "Physics",
                title: "What is the unit of electric charge?",
                choices: ["Coulomb", "Joule", "Ampere", "Volt"],
                correctAnswer: "Coulomb"
            },
            {
                subject: "Physics",
                title: "What is the term for the rate of doing work or transferring energy?",
                choices: ["Power", "Energy", "Work", "Force"],
                correctAnswer: "Power"
            },
            {
                subject: "Physics",
                title: "What does the term 'momentum' refer to in physics?",
                choices: ["Mass times velocity", "Force times distance", "Energy divided by time", "Work divided by time"],
                correctAnswer: "Mass times velocity"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the primary goal of artificial intelligence?",
                choices: ["To simulate human intelligence", "To create physical robots", "To automate repetitive tasks", "To improve computer hardware"],
                correctAnswer: "To simulate human intelligence"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does 'machine learning' refer to in the context of AI?",
                choices: ["A method for programming machines", "Algorithms that improve with experience", "Hardware that learns tasks", "Manual data input processes"],
                correctAnswer: "Algorithms that improve with experience"
            },
            {
                subject: "Artificial Intelligence",
                title: "Which of the following is a type of supervised learning algorithm?",
                choices: ["K-means clustering", "Principal Component Analysis", "Linear Regression", "Reinforcement Learning"],
                correctAnswer: "Linear Regression"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the main purpose of natural language processing (NLP)?",
                choices: ["Understanding and generating human language", "Processing images and videos", "Analyzing numerical data", "Controlling robotic systems"],
                correctAnswer: "Understanding and generating human language"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is a neural network in AI?",
                choices: ["A network of interconnected nodes inspired by the human brain", "A system for processing numerical data", "A method for storing large datasets", "A type of machine learning model with decision trees"],
                correctAnswer: "A network of interconnected nodes inspired by the human brain"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the purpose of reinforcement learning?",
                choices: ["To learn from rewards and punishments", "To classify data into categories", "To cluster data points", "To reduce dimensionality of data"],
                correctAnswer: "To learn from rewards and punishments"
            },
            {
                subject: "Artificial Intelligence",
                title: "Which AI technique is used for pattern recognition and data classification?",
                choices: ["Decision Trees", "K-means Clustering", "Principal Component Analysis", "Reinforcement Learning"],
                correctAnswer: "Decision Trees"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does the term 'deep learning' refer to?",
                choices: ["A subset of machine learning involving multiple layers of neural networks", "The process of learning by reading large amounts of data", "A method for programming computers with minimal human intervention", "A type of unsupervised learning technique"],
                correctAnswer: "A subset of machine learning involving multiple layers of neural networks"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the Turing Test designed to evaluate?",
                choices: ["The ability of a machine to exhibit intelligent behavior indistinguishable from a human", "The speed of a computer processor", "The accuracy of a machine learning model", "The efficiency of data storage solutions"],
                correctAnswer: "The ability of a machine to exhibit intelligent behavior indistinguishable from a human"
            },
            {
                subject: "Artificial Intelligence",
                title: "Which of the following is a commonly used framework for deep learning?",
                choices: ["TensorFlow", "Apache Hadoop", "MySQL", "Docker"],
                correctAnswer: "TensorFlow"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is an artificial neural network's 'layer'?",
                choices: ["A collection of nodes that process inputs", "A method of optimizing data storage", "A hardware component of the computer", "A type of data encryption technique"],
                correctAnswer: "A collection of nodes that process inputs"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does 'overfitting' mean in machine learning?",
                choices: ["A model that performs well on training data but poorly on new data", "A model that learns too quickly", "A model that has too few parameters", "A model that generalizes well to all data"],
                correctAnswer: "A model that performs well on training data but poorly on new data"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is a common application of computer vision in AI?",
                choices: ["Object recognition in images", "Generating human-like text", "Playing games", "Predicting future events"],
                correctAnswer: "Object recognition in images"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is 'transfer learning'?",
                choices: ["Using a pre-trained model on a new but similar task", "Learning new data from scratch", "Transferring data between databases", "Changing the architecture of a neural network"],
                correctAnswer: "Using a pre-trained model on a new but similar task"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the primary focus of unsupervised learning?",
                choices: ["Finding patterns or groupings in data without predefined labels", "Classifying data into known categories", "Predicting future values based on past data", "Optimizing model parameters"],
                correctAnswer: "Finding patterns or groupings in data without predefined labels"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does 'feature engineering' involve?",
                choices: ["Creating and selecting relevant features from raw data", "Designing the architecture of neural networks", "Training machine learning models", "Testing model performance"],
                correctAnswer: "Creating and selecting relevant features from raw data"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is an 'AI chatbot'?",
                choices: ["A program that simulates conversation with users", "A device that provides physical assistance", "A tool for managing databases", "A software for processing large datasets"],
                correctAnswer: "A program that simulates conversation with users"
            },
            {
                subject: "Artificial Intelligence",
                title: "Which term describes the ability of AI systems to understand and generate human language?",
                choices: ["Natural Language Processing (NLP)", "Computer Vision", "Reinforcement Learning", "Machine Translation"],
                correctAnswer: "Natural Language Processing (NLP)"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is 'gradient descent' used for in machine learning?",
                choices: ["Optimizing the parameters of a model", "Selecting features for a model", "Preparing data for analysis", "Evaluating model performance"],
                correctAnswer: "Optimizing the parameters of a model"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does 'AI ethics' refer to?",
                choices: ["The study of moral implications and responsibilities of AI systems", "The technical details of AI algorithms", "The development of AI hardware", "The efficiency of AI systems"],
                correctAnswer: "The study of moral implications and responsibilities of AI systems"
            },
            {
                subject: "Artificial Intelligence",
                title: "Which concept refers to the ability of AI to perform tasks that were previously considered exclusive to human intelligence?",
                choices: ["Artificial General Intelligence (AGI)", "Artificial Narrow Intelligence (ANI)", "Machine Learning", "Deep Learning"],
                correctAnswer: "Artificial General Intelligence (AGI)"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is the purpose of a confusion matrix in machine learning?",
                choices: ["To evaluate the performance of classification models", "To optimize model parameters", "To preprocess data", "To visualize data patterns"],
                correctAnswer: "To evaluate the performance of classification models"
            },
            {
                subject: "Artificial Intelligence",
                title: "What does 'AI bias' refer to?",
                choices: ["Prejudices in AI algorithms due to biased training data", "Errors in AI model predictions", "Hardware limitations in AI systems", "Complexity of AI models"],
                correctAnswer: "Prejudices in AI algorithms due to biased training data"
            },
            {
                subject: "Artificial Intelligence",
                title: "What is 'self-supervised learning'?",
                choices: ["A type of learning where the system creates its own labels from the data", "Learning from a large number of labeled examples", "Learning from minimal data with human supervision", "A type of reinforcement learning"],
                correctAnswer: "A type of learning where the system creates its own labels from the data"
            },
            {
                subject: "Machine Learning",
                title: "What is the primary goal of machine learning?",
                choices: ["To program computers with fixed instructions", "To manually input data for analysis", "To create physical robots", "To enable computers to learn from data and improve over time"],
                correctAnswer: "To enable computers to learn from data and improve over time"
            },
            {
                subject: "Machine Learning",
                title: "What is a 'feature' in machine learning?",
                choices: ["The final output of a model", "A type of machine learning algorithm", "The process of training a model", "An individual measurable property of a phenomenon being observed"],
                correctAnswer: "An individual measurable property of a phenomenon being observed"
            },
            {
                subject: "Machine Learning",
                title: "What is 'supervised learning'?",
                choices: ["A technique for clustering data", "A method for supervised regression", "An algorithm used for reinforcement learning", "A type of machine learning where the model is trained on labeled data"],
                correctAnswer: "A type of machine learning where the model is trained on labeled data"
            },
            {
                subject: "Machine Learning",
                title: "What is a 'decision tree'?",
                choices: ["An optimization algorithm", "A type of neural network", "A clustering algorithm", "A model that makes decisions based on a series of questions"],
                correctAnswer: "A model that makes decisions based on a series of questions"
            },
            {
                subject: "Machine Learning",
                title: "What does 'cross-validation' help with in machine learning?",
                choices: ["Training the model", "Selecting features for the model", "Processing raw data", "Evaluating the performance of a model"],
                correctAnswer: "Evaluating the performance of a model"
            },
            {
                subject: "Machine Learning",
                title: "What is the 'bias-variance tradeoff'?",
                choices: ["The balance between supervised and unsupervised learning", "The difference between accuracy and precision", "The tradeoff between training and testing data", "The balance between model complexity and training error"],
                correctAnswer: "The balance between model complexity and training error"
            },
            {
                subject: "Machine Learning",
                title: "What is 'unsupervised learning'?",
                choices: ["A technique for supervised classification", "A method for supervised regression", "An optimization algorithm", "A type of machine learning where the model is trained on unlabeled data"],
                correctAnswer: "A type of machine learning where the model is trained on unlabeled data"
            },
            {
                subject: "Machine Learning",
                title: "Which algorithm is commonly used for classification tasks?",
                choices: ["K-means Clustering", "Principal Component Analysis (PCA)", "Support Vector Machines (SVM)", "Decision Trees"],
                correctAnswer: "Support Vector Machines (SVM)"
            },
            {
                subject: "Machine Learning",
                title: "What is 'overfitting'?",
                choices: ["When a model performs poorly on training data", "When a model generalizes well to new data", "When a model is too simple", "When a model performs well on training data but poorly on new data"],
                correctAnswer: "When a model performs well on training data but poorly on new data"
            },
            {
                subject: "Machine Learning",
                title: "What is 'regularization' used for in machine learning?",
                choices: ["To improve model accuracy", "To speed up the training process", "To increase the size of the dataset", "To prevent overfitting by adding a penalty for complexity"],
                correctAnswer: "To prevent overfitting by adding a penalty for complexity"
            },
            {
                subject: "Machine Learning",
                title: "What is a 'confusion matrix' used for?",
                choices: ["To optimize model parameters", "To preprocess data", "To visualize the data distribution", "To evaluate the performance of a classification model"],
                correctAnswer: "To evaluate the performance of a classification model"
            },
            {
                subject: "Machine Learning",
                title: "What does 'gradient descent' do?",
                choices: ["It increases the accuracy of the model", "It evaluates the model's performance", "It prepares the data for training", "It optimizes the parameters of a model by minimizing the loss function"],
                correctAnswer: "It optimizes the parameters of a model by minimizing the loss function"
            },
            {
                subject: "Machine Learning",
                title: "What is a 'neural network'?",
                choices: ["A method for unsupervised learning", "A clustering algorithm", "A way to process large datasets", "A series of algorithms modeled after the human brain"],
                correctAnswer: "A series of algorithms modeled after the human brain"
            },
            {
                subject: "Machine Learning",
                title: "What does 'feature scaling' involve?",
                choices: ["Creating new features from existing ones", "Reducing the dimensionality of the data", "Normalizing or standardizing feature values to a common scale", "Selecting important features from the dataset"],
                correctAnswer: "Normalizing or standardizing feature values to a common scale"
            },
            {
                subject: "Machine Learning",
                title: "What is 'dimensionality reduction'?",
                choices: ["The process of increasing the number of features", "The process of aggregating data", "The process of normalizing data", "The process of reducing the number of features in a dataset"],
                correctAnswer: "The process of reducing the number of features in a dataset"
            },
            {
                subject: "Machine Learning",
                title: "What is 'ensemble learning'?",
                choices: ["Using a single model for all predictions", "Reducing the size of the training dataset", "Training models on different datasets", "Combining multiple models to improve performance"],
                correctAnswer: "Combining multiple models to improve performance"
            },
            {
                subject: "Machine Learning",
                title: "Which technique is used for dimensionality reduction?",
                choices: ["K-means Clustering", "Support Vector Machines (SVM)", "Principal Component Analysis (PCA)", "Decision Trees"],
                correctAnswer: "Principal Component Analysis (PCA)"
            },
            {
                subject: "Machine Learning",
                title: "What is the purpose of 'cross-validation'?",
                choices: ["To train the model on a large dataset", "To select features for the model", "To preprocess the data", "To assess how the results of a statistical analysis will generalize to an independent data set"],
                correctAnswer: "To assess how the results of a statistical analysis will generalize to an independent data set"
            },
            {
                subject: "Machine Learning",
                title: "What is 'clustering'?",
                choices: ["Classifying data into predefined categories", "Regressing data to predict values", "Reducing dimensionality of data", "Grouping similar data points together"],
                correctAnswer: "Grouping similar data points together"
            },
            {
                subject: "Machine Learning",
                title: "What is 'bagging'?",
                choices: ["A method for preprocessing data", "A type of reinforcement learning", "A technique for feature selection", "A technique that combines the predictions of multiple models to improve accuracy"],
                correctAnswer: "A technique that combines the predictions of multiple models to improve accuracy"
            },
            {
                subject: "Machine Learning",
                title: "What does 'hyperparameter tuning' refer to?",
                choices: ["The process of training a model", "The process of evaluating model performance", "The process of scaling features", "The process of adjusting the parameters of a learning algorithm to optimize performance"],
                correctAnswer: "The process of adjusting the parameters of a learning algorithm to optimize performance"
            },
            {
                subject: "Machine Learning",
                title: "What is the 'ROC curve' used for?",
                choices: ["Optimizing model parameters", "Processing data", "Training the model", "Evaluating the performance of a classification model"],
                correctAnswer: "Evaluating the performance of a classification model"
            },
            {
                subject: "Machine Learning",
                title: "What is 'recurrent neural network' (RNN) used for?",
                choices: ["Performing unsupervised learning", "Optimizing model parameters", "Reducing dimensionality", "Handling sequential data and time series"],
                correctAnswer: "Handling sequential data and time series"
            }
        ]
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
