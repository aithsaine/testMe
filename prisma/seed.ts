import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {


    await prisma.question.createMany({
        data: [
            {
                subject: "React",
                title: "What is React?",
                choices: [
                    "A library for building user interfaces",
                    "A programming language",
                    "A database",
                    "A server"
                ],
                answers: [
                    "A library for building user interfaces"
                ]
            },
            {
                subject: "React",
                title: "Who developed React?",
                choices: [
                    "Google",
                    "Facebook",
                    "Microsoft",
                    "Twitter"
                ],
                answers: [
                    "Facebook"
                ]
            },
            {
                subject: "React",
                title: "What is JSX?",
                choices: [
                    "JavaScript XML",
                    "JSON XML",
                    "JavaScript X",
                    "Java Syntax Extension"
                ],
                answers: [
                    "JavaScript XML"
                ]
            },
            {
                subject: "React",
                title: "What is a component in React?",
                choices: [
                    "A reusable piece of UI",
                    "A CSS rule",
                    "A type of data binding",
                    "A server-side function"
                ],
                answers: [
                    "A reusable piece of UI"
                ]
            },
            {
                subject: "React",
                title: "What is the use of useState in React?",
                choices: [
                    "To manage local state in functional components",
                    "To fetch data from API",
                    "To manage global state",
                    "To handle component lifecycle"
                ],
                answers: [
                    "To manage local state in functional components"
                ]
            },
            {
                subject: "React",
                title: "What is the use of useEffect in React?",
                choices: [
                    "To perform side effects in functional components",
                    "To manage local state",
                    "To create context",
                    "To manage routes"
                ],
                answers: [
                    "To perform side effects in functional components"
                ]
            },
            {
                subject: "React",
                title: "What is the virtual DOM?",
                choices: [
                    "A lightweight copy of the actual DOM",
                    "A real DOM manipulation library",
                    "A new HTML standard",
                    "A server-side rendering technique"
                ],
                answers: [
                    "A lightweight copy of the actual DOM"
                ]
            },
            {
                subject: "React",
                title: "What is React Router used for?",
                choices: [
                    "To handle routing in React applications",
                    "To manage state",
                    "To perform API calls",
                    "To create animations"
                ],
                answers: [
                    "To handle routing in React applications"
                ]
            },
            {
                subject: "React",
                title: "What is a higher-order component (HOC) in React?",
                choices: [
                    "A function that takes a component and returns a new component",
                    "A method to fetch data",
                    "A new way to write components",
                    "A type of React hook"
                ],
                answers: [
                    "A function that takes a component and returns a new component"
                ]
            },
            {
                subject: "React",
                title: "What is Redux used for in React applications?",
                choices: [
                    "To manage global state",
                    "To handle routing",
                    "To perform side effects",
                    "To manage component lifecycle"
                ],
                answers: [
                    "To manage global state"
                ]
            },
            {
                subject: "React",
                title: "What is the context API in React?",
                choices: [
                    "A way to pass data through the component tree without having to pass props down manually at every level",
                    "A method to fetch data",
                    "A way to create new components",
                    "A technique for optimizing performance"
                ],
                answers: [
                    "A way to pass data through the component tree without having to pass props down manually at every level"
                ]
            },
            {
                subject: "React",
                title: "What is a controlled component in React?",
                choices: [
                    "An input element whose value is controlled by React",
                    "A component that controls the state of other components",
                    "A component that fetches data",
                    "A component that handles routing"
                ],
                answers: [
                    "An input element whose value is controlled by React"
                ]
            },
            {
                subject: "React",
                title: "What is a pure component in React?",
                choices: [
                    "A component that renders the same output for the same props and state",
                    "A component that fetches data",
                    "A component that handles routing",
                    "A component that manages state"
                ],
                answers: [
                    "A component that renders the same output for the same props and state"
                ]
            },
            {
                subject: "React",
                title: "What is the purpose of React.memo?",
                choices: [
                    "To memoize a component and prevent unnecessary re-renders",
                    "To fetch data",
                    "To handle routing",
                    "To manage state"
                ],
                answers: [
                    "To memoize a component and prevent unnecessary re-renders"
                ]
            },
            {
                subject: "React",
                title: "What is the use of useContext in React?",
                choices: [
                    "To use context in functional components",
                    "To fetch data",
                    "To manage state",
                    "To handle routing"
                ],
                answers: [
                    "To use context in functional components"
                ]
            },
            {
                subject: "React",
                title: "What is the use of useReducer in React?",
                choices: [
                    "To manage complex state logic in functional components",
                    "To fetch data",
                    "To handle routing",
                    "To perform side effects"
                ],
                answers: [
                    "To manage complex state logic in functional components"
                ]
            },
            {
                subject: "Laravel",
                title: "What is Laravel?",
                choices: ["A PHP framework", "A JavaScript library", "A database", "A web server"],
                answers: ["A PHP framework"]
            },
            {
                subject: "Laravel",
                title: "Who created Laravel?",
                choices: ["Taylor Otwell", "Evan You", "Rasmus Lerdorf", "Ryan Dahl"],
                answers: ["Taylor Otwell"]
            },
            {
                subject: "Laravel",
                title: "What is the latest version of Laravel as of 2024?",
                choices: ["Laravel 9", "Laravel 8", "Laravel 10", "Laravel 11"],
                answers: ["Laravel 10"]
            },
            {
                subject: "Laravel",
                title: "What is the use of Eloquent in Laravel?",
                choices: ["To interact with the database using an Active Record implementation", "To create routes", "To manage session data", "To handle HTTP requests"],
                answers: ["To interact with the database using an Active Record implementation"]
            },
            {
                subject: "Laravel",
                title: "What is Artisan in Laravel?",
                choices: ["A command-line interface", "A templating engine", "A middleware", "A database"],
                answers: ["A command-line interface"]
            },
            {
                subject: "Laravel",
                title: "What is Blade in Laravel?",
                choices: ["A templating engine", "A database migration tool", "A routing mechanism", "A package manager"],
                answers: ["A templating engine"]
            },
            {
                subject: "Laravel",
                title: "What is the purpose of middleware in Laravel?",
                choices: ["To filter HTTP requests", "To manage database connections", "To create views", "To handle events"],
                answers: ["To filter HTTP requests"]
            },
            {
                subject: "Laravel",
                title: "What is CSRF protection in Laravel?",
                choices: ["Cross-Site Request Forgery protection", "Cross-Site Scripting protection", "SQL Injection protection", "Authentication"],
                answers: ["Cross-Site Request Forgery protection"]
            },
            {
                subject: "Laravel",
                title: "What is a service provider in Laravel?",
                choices: ["The central place of application bootstrapping", "A way to define routes", "A database schema", "A type of event listener"],
                answers: ["The central place of application bootstrapping"]
            },
            {
                subject: "Laravel",
                title: "How do you create a new Laravel project?",
                choices: ["Using Composer", "Using NPM", "Using Git", "Using Yarn"],
                answers: ["Using Composer"]
            },
            {
                subject: "Laravel",
                title: "What is the default database management system used by Laravel?",
                choices: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
                answers: ["MySQL"]
            },
            {
                subject: "Laravel",
                title: "What is the purpose of the .env file in Laravel?",
                choices: ["To store environment variables", "To define routes", "To create views", "To manage sessions"],
                answers: ["To store environment variables"]
            },
            {
                subject: "Laravel",
                title: "What command is used to run a Laravel development server?",
                choices: ["php artisan serve", "npm start", "composer run", "php start"],
                answers: ["php artisan serve"]
            },
            {
                subject: "Laravel",
                title: "What is the purpose of Laravel Mix?",
                choices: ["To handle asset compilation", "To manage database migrations", "To define routes", "To create middleware"],
                answers: ["To handle asset compilation"]
            },
            {
                subject: "Laravel",
                title: "What is the use of queues in Laravel?",
                choices: ["To defer the processing of a time-consuming task", "To handle HTTP requests", "To manage session data", "To create views"],
                answers: ["To defer the processing of a time-consuming task"]
            },
            {
                subject: "Next.js",
                title: "What is the primary purpose of Next.js?",
                choices: [
                    "Client-side routing",
                    "Server-side rendering and static site generation",
                    "State management",
                    "Data visualization"
                ],
                answers: ["Server-side rendering and static site generation"]
            },
            {
                subject: "Next.js",
                title: "Which method in Next.js is used to fetch data on the server side for each request?",
                choices: [
                    "getStaticProps",
                    "getServerSideProps",
                    "getInitialProps",
                    "useEffect"
                ],
                answers: ["getServerSideProps"]
            },
            {
                subject: "Next.js",
                title: "How do you create a new page in a Next.js application?",
                choices: [
                    "Create a new file in the `pages` directory",
                    "Add a new component in the `components` directory",
                    "Modify the `index.js` file",
                    "Create a new file in the `public` directory"
                ],
                answers: ["Create a new file in the `pages` directory"]
            },
            {
                subject: "Next.js",
                title: "What is the purpose of `getStaticProps`?",
                choices: [
                    "Fetch data on every request",
                    "Generate static pages at build time",
                    "Fetch data on the client side",
                    "Render a page on the server side"
                ],
                answers: ["Generate static pages at build time"]
            },
            {
                subject: "Next.js",
                title: "Where should API routes be created in a Next.js project?",
                choices: [
                    "In the `pages/api` directory",
                    "In the `public` directory",
                    "In the `components` directory",
                    "In the `lib` directory"
                ],
                answers: ["In the `pages/api` directory"]
            },
            {
                subject: "Next.js",
                title: "How do you create a dynamic route in Next.js?",
                choices: [
                    "By using square brackets in the file name",
                    "By using curly braces in the file name",
                    "By using parentheses in the file name",
                    "By using angle brackets in the file name"
                ],
                answers: ["By using square brackets in the file name"]
            },
            {
                subject: "Next.js",
                title: "What is `getStaticPaths` used for in Next.js?",
                choices: [
                    "Generating static pages for dynamic routes",
                    "Fetching data on every request",
                    "Handling client-side routing",
                    "Creating API routes"
                ],
                answers: ["Generating static pages for dynamic routes"]
            },
            {
                subject: "Next.js",
                title: "Which of the following is a feature of Next.js?",
                choices: [
                    "Automatic code splitting",
                    "Built-in state management",
                    "Custom hooks",
                    "Dependency injection"
                ],
                answers: ["Automatic code splitting"]
            },
            {
                subject: "Next.js",
                title: "How does Next.js handle CSS?",
                choices: [
                    "Using CSS Modules by default",
                    "Using global stylesheets only",
                    "Using inline styles only",
                    "Using styled-components by default"
                ],
                answers: ["Using CSS Modules by default"]
            },
            {
                subject: "Next.js",
                title: "What is the purpose of the `next.config.js` file?",
                choices: [
                    "Configuration of the Next.js build process",
                    "Defining routes",
                    "Handling state management",
                    "Creating API endpoints"
                ],
                answers: ["Configuration of the Next.js build process"]
            },
            {
                subject: "Next.js",
                title: "Which hook is used to manage routing in a Next.js application?",
                choices: [
                    "useRouter",
                    "useLocation",
                    "useHistory",
                    "useNavigate"
                ],
                answers: ["useRouter"]
            },
            {
                subject: "Next.js",
                title: "How do you add environment variables in a Next.js project?",
                choices: [
                    "Using a `.env.local` file",
                    "Defining them in `next.config.js`",
                    "Using a `config.js` file",
                    "Setting them in the `public` directory"
                ],
                answers: ["Using a `.env.local` file"]
            },
            {
                subject: "Next.js",
                title: "What is `getInitialProps` used for in Next.js?",
                choices: [
                    "Fetching data on server-side and client-side",
                    "Handling static generation",
                    "Managing client-side routing",
                    "Defining API routes"
                ],
                answers: ["Fetching data on server-side and client-side"]
            },
            {
                subject: "Next.js",
                title: "Which of the following is a valid method for handling images in Next.js?",
                choices: [
                    "Using the `next/image` component",
                    "Using the `img` HTML tag only",
                    "Using `react-image` library",
                    "Using inline CSS"
                ],
                answers: ["Using the `next/image` component"]
            },
            {
                subject: "Next.js",
                title: "How does Next.js optimize performance?",
                choices: [
                    "Automatic static optimization",
                    "Client-side rendering only",
                    "Manual code splitting",
                    "No performance optimizations"
                ],
                answers: ["Automatic static optimization"]
            },
            {
                subject: "Next.js",
                title: "What is the default server-side rendering behavior of Next.js pages?",
                choices: [
                    "Server-side rendering for every page",
                    "Static site generation by default",
                    "Client-side rendering by default",
                    "Dynamic import only"
                ],
                answers: ["Static site generation by default"]
            },
            {
                subject: "Next.js",
                title: "Which command is used to start the development server in Next.js?",
                choices: [
                    "npm run dev",
                    "npm start",
                    "next dev",
                    "next start"
                ],
                answers: ["npm run dev"]
            },
            {
                subject: "Next.js",
                title: "What does the `next/link` component provide?",
                choices: [
                    "Client-side navigation",
                    "Server-side rendering",
                    "Static site generation",
                    "Data fetching"
                ],
                answers: ["Client-side navigation"]
            },
            {
                subject: "Next.js",
                title: "Which hook allows you to fetch data from an API in a component?",
                choices: [
                    "useEffect",
                    "useStaticProps",
                    "useServerSideProps",
                    "useRouter"
                ],
                answers: ["useEffect"]
            },
            {
                subject: "Next.js",
                title: "What is the purpose of `next/image` component?",
                choices: [
                    "Optimizing images",
                    "Handling routing",
                    "Managing state",
                    "Fetching data"
                ],
                answers: ["Optimizing images"]
            },
            {
                subject: "Next.js",
                title: "How do you deploy a Next.js application?",
                choices: [
                    "Using Vercel",
                    "Only using Netlify",
                    "Using GitHub Pages",
                    "Using Firebase Hosting"
                ],
                answers: ["Using Vercel"]
            },
            {
                subject: "Next.js",
                title: "Which file is used to customize the default document structure?",
                choices: [
                    "_document.js",
                    "_app.js",
                    "_error.js",
                    "_custom.js"
                ],
                answers: ["_document.js"]
            },
            {
                subject: "MySQL",
                title: "What is MySQL?",
                choices: [
                    "A relational database management system",
                    "A programming language",
                    "A web server",
                    "A JavaScript library"
                ],
                answers: ["A relational database management system"]
            },
            {
                subject: "MySQL",
                title: "Which SQL statement is used to create a database?",
                choices: [
                    "CREATE DATABASE",
                    "MAKE DATABASE",
                    "INIT DATABASE",
                    "NEW DATABASE"
                ],
                answers: ["CREATE DATABASE"]
            },
            {
                subject: "MySQL",
                title: "How do you retrieve all columns from a table named 'employees'?",
                choices: [
                    "SELECT * FROM employees",
                    "GET ALL FROM employees",
                    "FETCH * FROM employees",
                    "RETRIEVE * FROM employees"
                ],
                answers: ["SELECT * FROM employees"]
            },
            {
                subject: "MySQL",
                title: "Which statement is used to delete all records from a table without removing the table itself?",
                choices: [
                    "DELETE FROM table_name",
                    "TRUNCATE table_name",
                    "DROP table_name",
                    "REMOVE FROM table_name"
                ],
                answers: ["TRUNCATE table_name"]
            },
            {
                subject: "MySQL",
                title: "What does the SQL clause `WHERE` do?",
                choices: [
                    "Filters records",
                    "Sorts records",
                    "Joins tables",
                    "Groups records"
                ],
                answers: ["Filters records"]
            },
            {
                subject: "MySQL",
                title: "Which statement is used to update records in a table?",
                choices: [
                    "UPDATE table_name SET column_name = value",
                    "MODIFY table_name SET column_name = value",
                    "CHANGE table_name SET column_name = value",
                    "ALTER table_name SET column_name = value"
                ],
                answers: ["UPDATE table_name SET column_name = value"]
            },
            {
                subject: "MySQL",
                title: "What is the purpose of the `JOIN` clause?",
                choices: [
                    "Combining rows from two or more tables",
                    "Filtering rows from a single table",
                    "Sorting rows in a table",
                    "Grouping rows by a specific column"
                ],
                answers: ["Combining rows from two or more tables"]
            },
            {
                subject: "MySQL",
                title: "Which type of JOIN returns all rows from the left table and matching rows from the right table?",
                choices: [
                    "LEFT JOIN",
                    "RIGHT JOIN",
                    "INNER JOIN",
                    "FULL JOIN"
                ],
                answers: ["LEFT JOIN"]
            },
            {
                subject: "MySQL",
                title: "How do you add a new column to an existing table?",
                choices: [
                    "ALTER TABLE table_name ADD column_name datatype",
                    "MODIFY TABLE table_name ADD column_name datatype",
                    "UPDATE TABLE table_name ADD column_name datatype",
                    "CHANGE TABLE table_name ADD column_name datatype"
                ],
                answers: ["ALTER TABLE table_name ADD column_name datatype"]
            },
            {
                subject: "MySQL",
                title: "What does the `COUNT()` function do?",
                choices: [
                    "Counts the number of rows",
                    "Calculates the sum of a column",
                    "Finds the average of a column",
                    "Finds the maximum value of a column"
                ],
                answers: ["Counts the number of rows"]
            },
            {
                subject: "MySQL",
                title: "Which SQL command is used to remove a table from a database?",
                choices: [
                    "DROP TABLE",
                    "DELETE TABLE",
                    "REMOVE TABLE",
                    "CLEAR TABLE"
                ],
                answers: ["DROP TABLE"]
            },
            {
                subject: "MySQL",
                title: "How do you ensure that a column value is unique in a table?",
                choices: [
                    "Use the UNIQUE constraint",
                    "Use the PRIMARY KEY constraint",
                    "Use the NOT NULL constraint",
                    "Use the INDEX constraint"
                ],
                answers: ["Use the UNIQUE constraint"]
            },
            {
                subject: "MySQL",
                title: "What is the default storage engine for MySQL?",
                choices: [
                    "InnoDB",
                    "MyISAM",
                    "Memory",
                    "CSV"
                ],
                answers: ["InnoDB"]
            },
            {
                subject: "MySQL",
                title: "Which keyword is used to sort the result set of a query?",
                choices: [
                    "ORDER BY",
                    "SORT BY",
                    "GROUP BY",
                    "FILTER BY"
                ],
                answers: ["ORDER BY"]
            },
            {
                subject: "MySQL",
                title: "How can you retrieve the current date and time in MySQL?",
                choices: [
                    "SELECT NOW()",
                    "SELECT CURRENT_DATE()",
                    "SELECT TIME()",
                    "SELECT DATE()"
                ],
                answers: ["SELECT NOW()"]
            },
            {
                subject: "MySQL",
                title: "What is the purpose of the `GROUP BY` clause?",
                choices: [
                    "Group rows that have the same values",
                    "Sort rows in ascending order",
                    "Filter rows based on a condition",
                    "Join multiple tables together"
                ],
                answers: ["Group rows that have the same values"]
            },
            {
                subject: "MySQL",
                title: "Which SQL function returns the average value of a numeric column?",
                choices: [
                    "AVG()",
                    "SUM()",
                    "COUNT()",
                    "MAX()"
                ],
                answers: ["AVG()"]
            },
            {
                subject: "MySQL",
                title: "How do you create a table with an auto-incrementing primary key?",
                choices: [
                    "CREATE TABLE table_name (id INT AUTO_INCREMENT PRIMARY KEY, ...)",
                    "CREATE TABLE table_name (id INT AUTO_INCREMENT, PRIMARY KEY(id), ...)",
                    "CREATE TABLE table_name (id AUTO_INCREMENT PRIMARY KEY, ...)",
                    "CREATE TABLE table_name (id INT PRIMARY KEY AUTO_INCREMENT, ...)"
                ],
                answers: ["CREATE TABLE table_name (id INT AUTO_INCREMENT PRIMARY KEY, ...)"]
            },
            {
                subject: "MySQL",
                title: "What does the `DISTINCT` keyword do in a query?",
                choices: [
                    "Removes duplicate rows",
                    "Sorts rows in ascending order",
                    "Filters rows based on a condition",
                    "Joins multiple tables"
                ],
                answers: ["Removes duplicate rows"]
            },
            {
                subject: "MySQL",
                title: "How do you change the data type of a column in an existing table?",
                choices: [
                    "ALTER TABLE table_name MODIFY column_name new_datatype",
                    "ALTER TABLE table_name CHANGE column_name new_datatype",
                    "MODIFY TABLE table_name column_name new_datatype",
                    "CHANGE TABLE table_name column_name new_datatype"
                ],
                answers: ["ALTER TABLE table_name MODIFY column_name new_datatype"]
            },
            {
                subject: "MySQL",
                title: "What is a subquery in SQL?",
                choices: [
                    "A query within another query",
                    "A table within a database",
                    "An index on a column",
                    "A constraint on a column"
                ],
                answers: ["A query within another query"]
            },
            {
                subject: "MySQL",
                title: "Which clause is used to limit the number of rows returned by a query?",
                choices: [
                    "LIMIT",
                    "TOP",
                    "MAX",
                    "FETCH"
                ],
                answers: ["LIMIT"]
            },
            {
                subject: "MySQL",
                title: "How do you add a comment to a SQL query?",
                choices: [
                    "-- comment",
                    "# comment",
                    "/* comment */",
                    "// comment"
                ],
                answers: ["-- comment", "/* comment */"]
            },
            {
                subject: "MySQL",
                title: "What does the `HAVING` clause do?",
                choices: [
                    "Filters records after grouping",
                    "Filters records before grouping",
                    "Sorts records",
                    "Joins multiple tables"
                ],
                answers: ["Filters records after grouping"]
            }, {
                subject: "Math",
                title: "What is the value of π (pi) to two decimal places?",
                choices: [
                    "3.14",
                    "3.15",
                    "3.13",
                    "3.16"
                ],
                answers: ["3.14"]
            },
            {
                subject: "Math",
                title: "What is the quadratic formula?",
                choices: [
                    "x = (-b ± √(b² - 4ac)) / 2a",
                    "x = (-b ± √(b² + 4ac)) / 2a",
                    "x = (-b ± √(b² - 4ac)) / a",
                    "x = (-b ± √(4ac - b²)) / 2a"
                ],
                answers: ["x = (-b ± √(b² - 4ac)) / 2a"]
            },
            {
                subject: "Math",
                title: "What is the derivative of sin(x)?",
                choices: [
                    "cos(x)",
                    "-cos(x)",
                    "sin(x)",
                    "-sin(x)"
                ],
                answers: ["cos(x)"]
            },
            {
                subject: "Math",
                title: "What is the integral of 1/x?",
                choices: [
                    "ln|x| + C",
                    "x + C",
                    "e^x + C",
                    "x^2 / 2 + C"
                ],
                answers: ["ln|x| + C"]
            },
            {
                subject: "Math",
                title: "What is the sum of the angles in a triangle?",
                choices: [
                    "180 degrees",
                    "90 degrees",
                    "360 degrees",
                    "270 degrees"
                ],
                answers: ["180 degrees"]
            },
            {
                subject: "Math",
                title: "What is the Pythagorean theorem?",
                choices: [
                    "a² + b² = c²",
                    "a² - b² = c²",
                    "a + b = c",
                    "a² + b² + c² = 0"
                ],
                answers: ["a² + b² = c²"]
            },
            {
                subject: "Math",
                title: "What is the formula for the area of a circle?",
                choices: [
                    "πr²",
                    "2πr",
                    "πd",
                    "2πr²"
                ],
                answers: ["πr²"]
            },
            {
                subject: "Math",
                title: "What is the square root of 144?",
                choices: [
                    "12",
                    "14",
                    "16",
                    "10"
                ],
                answers: ["12"]
            },
            {
                subject: "Math",
                title: "What is the slope of the line 2x - 3y = 6?",
                choices: [
                    "2/3",
                    "-2/3",
                    "3/2",
                    "-3/2"
                ],
                answers: ["2/3"]
            },
            {
                subject: "Math",
                title: "What is the value of 7 factorial (7!)?",
                choices: [
                    "5040",
                    "720",
                    "3430",
                    "120"
                ],
                answers: ["5040"]
            },
            {
                subject: "Math",
                title: "What is the sum of the first 10 positive integers?",
                choices: [
                    "55",
                    "45",
                    "60",
                    "50"
                ],
                answers: ["55"]
            },
            {
                subject: "Math",
                title: "What is the distance formula in a Cartesian plane?",
                choices: [
                    "√((x2 - x1)² + (y2 - y1)²)",
                    "√((x1 - x2)² + (y1 - y2)²)",
                    "|x2 - x1| + |y2 - y1|",
                    "√((x2 + x1)² + (y2 + y1)²)"
                ],
                answers: ["√((x2 - x1)² + (y2 - y1)²)"]
            },
            {
                subject: "Math",
                title: "What is the volume formula for a cube?",
                choices: [
                    "s³",
                    "6s²",
                    "4/3πr³",
                    "2πr²"
                ],
                answers: ["s³"]
            },
            {
                subject: "Math",
                title: "What is the formula for the perimeter of a rectangle?",
                choices: [
                    "2(l + w)",
                    "l² + w²",
                    "2lw",
                    "l + w"
                ],
                answers: ["2(l + w)"]
            },
            {
                subject: "Math",
                title: "What is the value of the sine of 90 degrees?",
                choices: [
                    "1",
                    "0",
                    "-1",
                    "π"
                ],
                answers: ["1"]
            },
            {
                subject: "Math",
                title: "What is the value of 2 to the power of 5?",
                choices: [
                    "32",
                    "64",
                    "16",
                    "10"
                ],
                answers: ["32"]
            },
            {
                subject: "Math",
                title: "What is the area of a triangle with base 10 and height 5?",
                choices: [
                    "25",
                    "50",
                    "15",
                    "20"
                ],
                answers: ["25"]
            },
            {
                subject: "Math",
                title: "What is the sum of the interior angles of a polygon with 6 sides?",
                choices: [
                    "720 degrees",
                    "360 degrees",
                    "540 degrees",
                    "180 degrees"
                ],
                answers: ["720 degrees"]
            },
            {
                subject: "Math",
                title: "What is the base of the natural logarithm?",
                choices: [
                    "e",
                    "π",
                    "2",
                    "10"
                ],
                answers: ["e"]
            },
            {
                subject: "Math",
                title: "What is the product of the roots of the quadratic equation ax² + bx + c = 0?",
                choices: [
                    "c/a",
                    "-b/a",
                    "b/c",
                    "-c/b"
                ],
                answers: ["c/a"]
            },
            {
                subject: "Math",
                title: "What is the equation of a line in slope-intercept form?",
                choices: [
                    "y = mx + b",
                    "y = ax + b",
                    "y = mx² + c",
                    "y = b - mx"
                ],
                answers: ["y = mx + b"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'peace'?",
                choices: [
                    "سلام",
                    "حب",
                    "صداقة",
                    "حرب"
                ],
                answers: ["سلام"]
            },
            {
                subject: "Arabic",
                title: "Which script is used for writing Arabic?",
                choices: [
                    "Arabic script",
                    "Latin script",
                    "Cyrillic script",
                    "Devanagari script"
                ],
                answers: ["Arabic script"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'book'?",
                choices: [
                    "كتاب",
                    "مدرسة",
                    "قلم",
                    "ورقة"
                ],
                answers: ["كتاب"]
            },
            {
                subject: "Arabic",
                title: "Which of the following is an Arabic vowel?",
                choices: [
                    "فَتْحَة",
                    "حَرْف",
                    "سَكْن",
                    "شَدَّة"
                ],
                answers: ["فَتْحَة"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'thank you'?",
                choices: [
                    "شكراً",
                    "عفواً",
                    "مرحبا",
                    "وداعاً"
                ],
                answers: ["شكراً"]
            },
            {
                subject: "Arabic",
                title: "Which of the following is a greeting in Arabic?",
                choices: [
                    "السلام عليكم",
                    "وداعاً",
                    "صباح الخير",
                    "مساء الخير"
                ],
                answers: ["السلام عليكم"]
            },
            {
                subject: "Arabic",
                title: "What does the Arabic word 'محبة' mean?",
                choices: [
                    "Love",
                    "Friendship",
                    "Hate",
                    "Peace"
                ],
                answers: ["Love"]
            },
            {
                subject: "Arabic",
                title: "How is the Arabic word 'happy' written?",
                choices: [
                    "سعيد",
                    "حزين",
                    "غاضب",
                    "مشتاق"
                ],
                answers: ["سعيد"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'family'?",
                choices: [
                    "عائلة",
                    "أصدقاء",
                    "مدرسة",
                    "مدينة"
                ],
                answers: ["عائلة"]
            },
            {
                subject: "Arabic",
                title: "Which of the following letters is not in the Arabic alphabet?",
                choices: [
                    "P",
                    "ب",
                    "ج",
                    "خ"
                ],
                answers: ["P"]
            },
            {
                subject: "Arabic",
                title: "What does 'صباح الخير' mean in English?",
                choices: [
                    "Good morning",
                    "Good evening",
                    "Hello",
                    "Goodbye"
                ],
                answers: ["Good morning"]
            },
            {
                subject: "Arabic",
                title: "How do you say 'I am fine' in Arabic?",
                choices: [
                    "أنا بخير",
                    "أنا تعبان",
                    "أنا جائع",
                    "أنا سعيد"
                ],
                answers: ["أنا بخير"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic term for 'teacher'?",
                choices: [
                    "معلم",
                    "طالب",
                    "مدير",
                    "مربي"
                ],
                answers: ["معلم"]
            },
            {
                subject: "Arabic",
                title: "Which Arabic letter is pronounced 'T'?",
                choices: [
                    "ت",
                    "ث",
                    "د",
                    "ص"
                ],
                answers: ["ت"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'city'?",
                choices: [
                    "مدينة",
                    "قرية",
                    "بلد",
                    "حي"
                ],
                answers: ["مدينة"]
            },
            {
                subject: "Arabic",
                title: "What does 'أحبك' mean?",
                choices: [
                    "I love you",
                    "I miss you",
                    "I hate you",
                    "I see you"
                ],
                answers: ["I love you"]
            },
            {
                subject: "Arabic",
                title: "How do you say 'goodbye' in Arabic?",
                choices: [
                    "وداعاً",
                    "مرحبا",
                    "شكراً",
                    "صباح الخير"
                ],
                answers: ["وداعاً"]
            },
            {
                subject: "Arabic",
                title: "What does 'طبيب' mean in English?",
                choices: [
                    "Doctor",
                    "Teacher",
                    "Engineer",
                    "Driver"
                ],
                answers: ["Doctor"]
            },
            {
                subject: "Arabic",
                title: "What is the Arabic word for 'school'?",
                choices: [
                    "مدرسة",
                    "جامعة",
                    "مكتبة",
                    "فصل"
                ],
                answers: ["مدرسة"]
            },
            {
                subject: "Arabic",
                title: "Which of these is a common Arabic greeting?",
                choices: [
                    "السلام عليكم",
                    "مرحبا",
                    "شكراً",
                    "إلى اللقاء"
                ],
                answers: ["السلام عليكم"]
            },
            {
                subject: "Arabic",
                title: "How do you write 'water' in Arabic?",
                choices: [
                    "ماء",
                    "طعام",
                    "هواء",
                    "شاي"
                ],
                answers: ["ماء"]
            },
            {
                subject: "Cloud Computing",
                title: "What does SaaS stand for?",
                choices: [
                    "Software as a Service",
                    "System as a Service",
                    "Server as a Service",
                    "Storage as a Service"
                ],
                answers: ["Software as a Service"]
            },
            {
                subject: "Cloud Computing",
                title: "What is IaaS?",
                choices: [
                    "Infrastructure as a Service",
                    "Information as a Service",
                    "Integration as a Service",
                    "Interface as a Service"
                ],
                answers: ["Infrastructure as a Service"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud model offers the most control over resources?",
                choices: [
                    "Private Cloud",
                    "Public Cloud",
                    "Hybrid Cloud",
                    "Community Cloud"
                ],
                answers: ["Private Cloud"]
            },
            {
                subject: "Cloud Computing",
                title: "What is a key benefit of cloud computing?",
                choices: [
                    "Scalability",
                    "High latency",
                    "Limited accessibility",
                    "Increased costs"
                ],
                answers: ["Scalability"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud service provides virtualized computing resources over the internet?",
                choices: [
                    "IaaS",
                    "PaaS",
                    "SaaS",
                    "DaaS"
                ],
                answers: ["IaaS"]
            },
            {
                subject: "Cloud Computing",
                title: "What does PaaS stand for?",
                choices: [
                    "Platform as a Service",
                    "Process as a Service",
                    "Product as a Service",
                    "Programming as a Service"
                ],
                answers: ["Platform as a Service"]
            },
            {
                subject: "Cloud Computing",
                title: "What is the purpose of a CDN in cloud computing?",
                choices: [
                    "To deliver content quickly and efficiently",
                    "To provide computing power",
                    "To store data securely",
                    "To manage databases"
                ],
                answers: ["To deliver content quickly and efficiently"]
            },
            {
                subject: "Cloud Computing",
                title: "Which type of cloud deployment model is typically used by government organizations?",
                choices: [
                    "Community Cloud",
                    "Public Cloud",
                    "Hybrid Cloud",
                    "Private Cloud"
                ],
                answers: ["Community Cloud"]
            },
            {
                subject: "Cloud Computing",
                title: "What does the term 'elasticity' refer to in cloud computing?",
                choices: [
                    "The ability to scale resources up or down as needed",
                    "The speed of data transfer",
                    "The security of data",
                    "The cost of cloud services"
                ],
                answers: ["The ability to scale resources up or down as needed"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud service model provides a runtime environment for applications?",
                choices: [
                    "PaaS",
                    "IaaS",
                    "SaaS",
                    "DaaS"
                ],
                answers: ["PaaS"]
            },
            {
                subject: "Cloud Computing",
                title: "What is an example of a public cloud service provider?",
                choices: [
                    "Amazon Web Services (AWS)",
                    "IBM Cloud",
                    "Microsoft Azure",
                    "All of the above"
                ],
                answers: ["All of the above"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud model combines both on-premises and cloud resources?",
                choices: [
                    "Hybrid Cloud",
                    "Private Cloud",
                    "Public Cloud",
                    "Community Cloud"
                ],
                answers: ["Hybrid Cloud"]
            },
            {
                subject: "Cloud Computing",
                title: "What does 'serverless computing' mean?",
                choices: [
                    "Running applications without managing servers",
                    "A type of IaaS",
                    "A type of PaaS",
                    "A type of SaaS"
                ],
                answers: ["Running applications without managing servers"]
            },
            {
                subject: "Cloud Computing",
                title: "What is the main focus of a private cloud?",
                choices: [
                    "Exclusive use by a single organization",
                    "Public access",
                    "Shared resources among multiple organizations",
                    "Cost reduction"
                ],
                answers: ["Exclusive use by a single organization"]
            },
            {
                subject: "Cloud Computing",
                title: "Which type of cloud computing provides a complete environment including both hardware and software?",
                choices: [
                    "IaaS",
                    "PaaS",
                    "SaaS",
                    "DaaS"
                ],
                answers: ["SaaS"]
            },
            {
                subject: "Cloud Computing",
                title: "What is a common use case for cloud storage services?",
                choices: [
                    "Storing and accessing files over the internet",
                    "Running complex algorithms",
                    "Creating virtual machines",
                    "Developing software applications"
                ],
                answers: ["Storing and accessing files over the internet"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud service model offers ready-to-use software applications over the internet?",
                choices: [
                    "SaaS",
                    "PaaS",
                    "IaaS",
                    "DaaS"
                ],
                answers: ["SaaS"]
            },
            {
                subject: "Cloud Computing",
                title: "What does 'virtualization' refer to in cloud computing?",
                choices: [
                    "Creating virtual instances of physical resources",
                    "Storing data securely",
                    "Managing network traffic",
                    "Developing cloud applications"
                ],
                answers: ["Creating virtual instances of physical resources"]
            },
            {
                subject: "Cloud Computing",
                title: "Which cloud computing model is generally the most cost-effective for businesses?",
                choices: [
                    "Public Cloud",
                    "Private Cloud",
                    "Hybrid Cloud",
                    "Community Cloud"
                ],
                answers: ["Public Cloud"]
            },
            {
                subject: "Cloud Computing",
                title: "What is a common feature of cloud computing that differentiates it from traditional IT infrastructure?",
                choices: [
                    "On-demand resource availability",
                    "Static resource allocation",
                    "Manual scaling",
                    "Limited accessibility"
                ],
                answers: ["On-demand resource availability"]
            },
            {
                subject: "Cloud Computing",
                title: "Which of the following is a key characteristic of cloud computing?",
                choices: [
                    "Resource pooling",
                    "Fixed capacity",
                    "Inflexibility",
                    "High upfront cost"
                ],
                answers: ["Resource pooling"]
            },
            {
                subject: "PHP",
                title: "What does PHP stand for?",
                choices: [
                    "Hypertext Preprocessor",
                    "Hypertext Processing",
                    "Private Hypertext Preprocessor",
                    "Public Hypertext Preprocessor"
                ],
                answers: ["Hypertext Preprocessor"]
            },
            {
                subject: "PHP",
                title: "Which function is used to start a session in PHP?",
                choices: [
                    "session_start()",
                    "start_session()",
                    "init_session()",
                    "begin_session()"
                ],
                answers: ["session_start()"]
            },
            {
                subject: "PHP",
                title: "How do you access form data sent via the GET method in PHP?",
                choices: [
                    "$_GET",
                    "$_POST",
                    "$_REQUEST",
                    "$_FORM"
                ],
                answers: ["$_GET"]
            },
            {
                subject: "PHP",
                title: "What is the correct way to include a PHP file?",
                choices: [
                    "include 'filename.php';",
                    "require 'filename.php';",
                    "import 'filename.php';",
                    "Both include and require"
                ],
                answers: ["Both include and require"]
            },
            {
                subject: "PHP",
                title: "Which operator is used for concatenation in PHP?",
                choices: [
                    ".",
                    "+",
                    "&",
                    ","
                ],
                answers: ["."]
            },
            {
                subject: "PHP",
                title: "How do you declare a variable in PHP?",
                choices: [
                    "$variableName",
                    "var variableName",
                    "declare variableName",
                    "let variableName"
                ],
                answers: ["$variableName"]
            },
            {
                subject: "PHP",
                title: "What is the default file extension for PHP files?",
                choices: [
                    ".php",
                    ".html",
                    ".txt",
                    ".doc"
                ],
                answers: [".php"]
            },
            {
                subject: "PHP",
                title: "Which PHP function is used to escape special characters in a string for use in SQL queries?",
                choices: [
                    "mysqli_real_escape_string()",
                    "escape_string()",
                    "sanitize_string()",
                    "filter_string()"
                ],
                answers: ["mysqli_real_escape_string()"]
            },
            {
                subject: "PHP",
                title: "How do you comment a single line in PHP?",
                choices: [
                    "// comment",
                    "# comment",
                    "/* comment */",
                    "comment"
                ],
                answers: ["// comment"]
            },
            {
                subject: "PHP",
                title: "What is the purpose of the PHP function 'isset()'?",
                choices: [
                    "Check if a variable is set and is not null",
                    "Check if a variable is empty",
                    "Check if a variable is numeric",
                    "Check if a variable is a string"
                ],
                answers: ["Check if a variable is set and is not null"]
            },
            {
                subject: "PHP",
                title: "How do you create a function in PHP?",
                choices: [
                    "function functionName() {}",
                    "create function functionName() {}",
                    "def functionName() {}",
                    "func functionName() {}"
                ],
                answers: ["function functionName() {}"]
            },
            {
                subject: "PHP",
                title: "Which PHP function returns the length of a string?",
                choices: [
                    "strlen()",
                    "length()",
                    "size()",
                    "count()"
                ],
                answers: ["strlen()"]
            },
            {
                subject: "PHP",
                title: "What does the PHP function 'explode()' do?",
                choices: [
                    "Splits a string into an array",
                    "Combines an array into a string",
                    "Encrypts a string",
                    "Reverses a string"
                ],
                answers: ["Splits a string into an array"]
            },
            {
                subject: "PHP",
                title: "How do you declare a constant in PHP?",
                choices: [
                    "define('CONSTANT_NAME', value);",
                    "const CONSTANT_NAME = value;",
                    "constant('CONSTANT_NAME', value);",
                    "set_constant('CONSTANT_NAME', value);"
                ],
                answers: ["define('CONSTANT_NAME', value);"]
            },
            {
                subject: "PHP",
                title: "Which of the following functions is used to include the content of another PHP file?",
                choices: [
                    "include()",
                    "require()",
                    "both include() and require()",
                    "open()"
                ],
                answers: ["both include() and require()"]
            },
            {
                subject: "PHP",
                title: "How can you access an element of an associative array in PHP?",
                choices: [
                    "$array['key']",
                    "$array.key",
                    "$array(key)",
                    "$array.key()"
                ],
                answers: ["$array['key']"]
            },
            {
                subject: "PHP",
                title: "Which superglobal array in PHP is used to collect form data after submitting an HTML form?",
                choices: [
                    "$_POST",
                    "$_GET",
                    "$_SERVER",
                    "$_SESSION"
                ],
                answers: ["$_POST"]
            },
            {
                subject: "PHP",
                title: "What is the result of the following PHP expression: 5 + '10'?",
                choices: [
                    "15",
                    "510",
                    "5",
                    "10"
                ],
                answers: ["15"]
            },
            {
                subject: "PHP",
                title: "Which function is used to check if a file exists in PHP?",
                choices: [
                    "file_exists()",
                    "is_file()",
                    "check_file()",
                    "exists_file()"
                ],
                answers: ["file_exists()"]
            },
            {
                subject: "PHP",
                title: "How do you access session variables in PHP?",
                choices: [
                    "$_SESSION['variable']",
                    "$SESSION['variable']",
                    "$_SESSION->variable",
                    "$SESSION->variable"
                ],
                answers: ["$_SESSION['variable']"]
            },
            {
                subject: "HTML",
                title: "What does HTML stand for?",
                choices: [
                    "Hypertext Markup Language",
                    "Hyperlink and Text Markup Language",
                    "High-Level Text Markup Language",
                    "Hypertext Multi-language"
                ],
                answers: ["Hypertext Markup Language"]
            },
            {
                subject: "HTML",
                title: "Which HTML element is used to define the title of a document?",
                choices: [
                    "<title>",
                    "<head>",
                    "<meta>",
                    "<header>"
                ],
                answers: ["<title>"]
            },
            {
                subject: "HTML",
                title: "What is the correct HTML element for inserting a line break?",
                choices: [
                    "<break>",
                    "<br>",
                    "<lb>",
                    "<newline>"
                ],
                answers: ["<br>"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to create an unordered list?",
                choices: [
                    "<ul>",
                    "<ol>",
                    "<list>",
                    "<dl>"
                ],
                answers: ["<ul>"]
            },
            {
                subject: "HTML",
                title: "What attribute is used to specify the URL of an image?",
                choices: [
                    "src",
                    "href",
                    "alt",
                    "link"
                ],
                answers: ["src"]
            },
            {
                subject: "HTML",
                title: "How do you create a hyperlink in HTML?",
                choices: [
                    "<a href='url'>link text</a>",
                    "<link href='url'>link text</link>",
                    "<hyperlink href='url'>link text</hyperlink>",
                    "<url href='url'>link text</url>"
                ],
                answers: ["<a href='url'>link text</a>"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to define an HTML table?",
                choices: [
                    "<table>",
                    "<tab>",
                    "<tr>",
                    "<td>"
                ],
                answers: ["<table>"]
            },
            {
                subject: "HTML",
                title: "What does the <meta> tag provide in HTML?",
                choices: [
                    "Metadata about the document",
                    "A navigation menu",
                    "A script",
                    "An image"
                ],
                answers: ["Metadata about the document"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to define the largest heading in HTML?",
                choices: [
                    "<h1>",
                    "<heading>",
                    "<h6>",
                    "<header>"
                ],
                answers: ["<h1>"]
            },
            {
                subject: "HTML",
                title: "How do you specify the language of a document in HTML?",
                choices: [
                    "<html lang='en'>",
                    "<language='en'>",
                    "<meta lang='en'>",
                    "<document lang='en'>"
                ],
                answers: ["<html lang='en'>"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to define an input control in HTML?",
                choices: [
                    "<input>",
                    "<textfield>",
                    "<button>",
                    "<control>"
                ],
                answers: ["<input>"]
            },
            {
                subject: "HTML",
                title: "What is the purpose of the <form> tag in HTML?",
                choices: [
                    "To collect user input",
                    "To format text",
                    "To create a link",
                    "To display an image"
                ],
                answers: ["To collect user input"]
            },
            {
                subject: "HTML",
                title: "Which attribute specifies the type of input control in an <input> element?",
                choices: [
                    "type",
                    "value",
                    "name",
                    "id"
                ],
                answers: ["type"]
            },
            {
                subject: "HTML",
                title: "How can you make a list of items in HTML?",
                choices: [
                    "Use <ul> and <li> tags",
                    "Use <ol> and <li> tags",
                    "Use <list> and <item> tags",
                    "Both <ul> and <ol> tags"
                ],
                answers: ["Both <ul> and <ol> tags"]
            },
            {
                subject: "HTML",
                title: "Which element is used to define a section in an HTML document?",
                choices: [
                    "<section>",
                    "<div>",
                    "<article>",
                    "<group>"
                ],
                answers: ["<section>"]
            },
            {
                subject: "HTML",
                title: "What does the <alt> attribute in an <img> tag do?",
                choices: [
                    "Provides alternative text for an image",
                    "Specifies the image source",
                    "Sets the image height",
                    "Defines the image width"
                ],
                answers: ["Provides alternative text for an image"]
            },
            {
                subject: "HTML",
                title: "Which HTML element defines navigation links?",
                choices: [
                    "<nav>",
                    "<links>",
                    "<menu>",
                    "<navigation>"
                ],
                answers: ["<nav>"]
            },
            {
                subject: "HTML",
                title: "How do you specify a comment in HTML?",
                choices: [
                    "<!-- comment -->",
                    "// comment",
                    "/* comment */",
                    "# comment"
                ],
                answers: ["<!-- comment -->"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to create a drop-down list in HTML?",
                choices: [
                    "<select>",
                    "<dropdown>",
                    "<list>",
                    "<option>"
                ],
                answers: ["<select>"]
            },
            {
                subject: "HTML",
                title: "What is the purpose of the <iframe> tag in HTML?",
                choices: [
                    "To embed another HTML page within the current page",
                    "To create a new table",
                    "To define an interactive form",
                    "To style text"
                ],
                answers: ["To embed another HTML page within the current page"]
            },
            {
                subject: "HTML",
                title: "Which tag is used to define a paragraph in HTML?",
                choices: [
                    "<p>",
                    "<para>",
                    "<text>",
                    "<paragraph>"
                ],
                answers: ["<p>"]
            },
            {
                subject: "HTML",
                title: "How do you make a numbered list in HTML?",
                choices: [
                    "<ol> and <li>",
                    "<ul> and <li>",
                    "<list> and <item>",
                    "<number> and <item>"
                ],
                answers: ["<ol> and <li>"]
            },
            {
                subject: "CSS",
                title: "What does CSS stand for?",
                choices: [
                    "Cascading Style Sheets",
                    "Creative Style Sheets",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"
                ],
                answers: ["Cascading Style Sheets"]
            },
            {
                subject: "CSS",
                title: "Which HTML tag is used to include a CSS file?",
                choices: [
                    "<style>",
                    "<css>",
                    "<link>",
                    "<script>"
                ],
                answers: ["<link>"]
            },
            {
                subject: "CSS",
                title: "What property is used to change the background color of an element?",
                choices: [
                    "background-color",
                    "bgcolor",
                    "color",
                    "background"
                ],
                answers: ["background-color"]
            },
            {
                subject: "CSS",
                title: "How do you apply a class to an HTML element?",
                choices: [
                    "class='classname'",
                    "id='classname'",
                    "name='classname'",
                    "type='classname'"
                ],
                answers: ["class='classname'"]
            },
            {
                subject: "CSS",
                title: "What property is used to change the font of an element?",
                choices: [
                    "font-family",
                    "font-style",
                    "text-font",
                    "font-type"
                ],
                answers: ["font-family"]
            },
            {
                subject: "CSS",
                title: "How can you make text bold in CSS?",
                choices: [
                    "font-weight: bold;",
                    "text-weight: bold;",
                    "font-style: bold;",
                    "text-style: bold;"
                ],
                answers: ["font-weight: bold;"]
            },
            {
                subject: "CSS",
                title: "Which property is used to control the spacing between lines of text?",
                choices: [
                    "line-height",
                    "text-spacing",
                    "letter-spacing",
                    "text-line"
                ],
                answers: ["line-height"]
            },
            {
                subject: "CSS",
                title: "What is the default value of the 'position' property in CSS?",
                choices: [
                    "static",
                    "relative",
                    "absolute",
                    "fixed"
                ],
                answers: ["static"]
            },
            {
                subject: "CSS",
                title: "How do you select an element with a specific ID in CSS?",
                choices: [
                    "#idname",
                    ".classname",
                    "idname",
                    "*idname"
                ],
                answers: ["#idname"]
            },
            {
                subject: "CSS",
                title: "Which property is used to add space inside an element, between the element's content and its border?",
                choices: [
                    "padding",
                    "margin",
                    "border",
                    "spacing"
                ],
                answers: ["padding"]
            },
            {
                subject: "CSS",
                title: "How do you select all <p> elements inside a <div> element?",
                choices: [
                    "div p",
                    "div > p",
                    "div+p",
                    "p div"
                ],
                answers: ["div p"]
            },
            {
                subject: "CSS",
                title: "What property is used to set the width of an element?",
                choices: [
                    "width",
                    "height",
                    "size",
                    "dimension"
                ],
                answers: ["width"]
            },
            {
                subject: "CSS",
                title: "Which property controls the text color of an element?",
                choices: [
                    "color",
                    "text-color",
                    "font-color",
                    "background-color"
                ],
                answers: ["color"]
            },
            {
                subject: "CSS",
                title: "How do you create a CSS class?",
                choices: [
                    ".classname { }",
                    "#classname { }",
                    "classname { }",
                    "class classname { }"
                ],
                answers: [".classname { }"]
            },
            {
                subject: "CSS",
                title: "What property is used to align text to the center?",
                choices: [
                    "text-align: center;",
                    "align: center;",
                    "text-center;",
                    "center-align;"
                ],
                answers: ["text-align: center;"]
            },
            {
                subject: "CSS",
                title: "Which property is used to make an element's background color semi-transparent?",
                choices: [
                    "background-color: rgba();",
                    "color: rgba();",
                    "background-opacity;",
                    "opacity:"
                ],
                answers: ["background-color: rgba();"]
            },
            {
                subject: "CSS",
                title: "How do you specify multiple CSS properties in a single rule?",
                choices: [
                    "Separate properties with semicolons",
                    "Separate properties with commas",
                    "Use colons between properties",
                    "Use hyphens between properties"
                ],
                answers: ["Separate properties with semicolons"]
            },
            {
                subject: "CSS",
                title: "Which property is used to set the font size?",
                choices: [
                    "font-size",
                    "text-size",
                    "size",
                    "font"
                ],
                answers: ["font-size"]
            },
            {
                subject: "CSS",
                title: "How do you make a list item display as a block element?",
                choices: [
                    "display: block;",
                    "display: list-item;",
                    "block-display;",
                    "list-display;"
                ],
                answers: ["display: block;"]
            },
            {
                subject: "CSS",
                title: "What does the 'float' property do?",
                choices: [
                    "Specifies how an element should float within its container",
                    "Controls the size of an element",
                    "Sets the position of an element",
                    "Defines the background color"
                ],
                answers: ["Specifies how an element should float within its container"]
            },
            {
                subject: "CSS",
                title: "Which CSS property is used to change the border style of an element?",
                choices: [
                    "border-style",
                    "border-color",
                    "border-width",
                    "border-type"
                ],
                answers: ["border-style"]
            },
            {
                subject: "CSS",
                title: "How can you add a comment in CSS?",
                choices: [
                    "/* comment */",
                    "// comment",
                    "<!-- comment -->",
                    "# comment"
                ],
                answers: ["/* comment */"]
            },
            {
                subject: "JavaScript",
                title: "What is the correct syntax for referring to an external script called 'script.js'?",
                choices: [
                    "<script src='script.js'>",
                    "<script href='script.js'>",
                    "<script name='script.js'>",
                    "<script file='script.js'>"
                ],
                answers: ["<script src='script.js'>"]
            },
            {
                subject: "JavaScript",
                title: "Which of the following is a valid JavaScript variable name?",
                choices: [
                    "2variable",
                    "variable-name",
                    "variable_name",
                    "variable name"
                ],
                answers: ["variable_name"]
            },
            {
                subject: "JavaScript",
                title: "How do you create a function in JavaScript?",
                choices: [
                    "function myFunction() { }",
                    "create function myFunction() { }",
                    "function:myFunction() { }",
                    "function = myFunction() { }"
                ],
                answers: ["function myFunction() { }"]
            },
            {
                subject: "JavaScript",
                title: "What is the result of the expression 5 + '5' in JavaScript?",
                choices: [
                    "10",
                    "'55'",
                    "NaN",
                    "Error"
                ],
                answers: ["'55'"]
            },
            {
                subject: "JavaScript",
                title: "How do you declare a variable in JavaScript?",
                choices: [
                    "var variableName;",
                    "variable variableName;",
                    "declare variableName;",
                    "dim variableName;"
                ],
                answers: ["var variableName;"]
            },
            {
                subject: "JavaScript",
                title: "What does the 'typeof' operator do in JavaScript?",
                choices: [
                    "Returns the type of a variable",
                    "Converts a variable to a string",
                    "Checks if a variable is defined",
                    "Declares a new variable"
                ],
                answers: ["Returns the type of a variable"]
            },
            {
                subject: "JavaScript",
                title: "Which method is used to add a new element to the end of an array?",
                choices: [
                    "push()",
                    "pop()",
                    "shift()",
                    "unshift()"
                ],
                answers: ["push()"]
            },
            {
                subject: "JavaScript",
                title: "What is the correct syntax to create an object in JavaScript?",
                choices: [
                    "const obj = {};",
                    "const obj = () => {};",
                    "const obj = [];",
                    "const obj = new Object();"
                ],
                answers: ["const obj = {};"]
            },
            {
                subject: "JavaScript",
                title: "How do you access the first element of an array named 'arr'?",
                choices: [
                    "arr[0]",
                    "arr.first()",
                    "arr(0)",
                    "arr.begin()"
                ],
                answers: ["arr[0]"]
            },
            {
                subject: "JavaScript",
                title: "What will the following code output: console.log(!!true)?",
                choices: [
                    "true",
                    "false",
                    "undefined",
                    "null"
                ],
                answers: ["true"]
            },
            {
                subject: "JavaScript",
                title: "Which event occurs when the user clicks on an HTML element?",
                choices: [
                    "onclick",
                    "onmouseover",
                    "onchange",
                    "onfocus"
                ],
                answers: ["onclick"]
            },
            {
                subject: "JavaScript",
                title: "How do you write a comment in JavaScript?",
                choices: [
                    "// comment",
                    "# comment",
                    "<!-- comment -->",
                    "/* comment */"
                ],
                answers: ["// comment"]
            },
            {
                subject: "JavaScript",
                title: "What does the 'this' keyword refer to in JavaScript?",
                choices: [
                    "The current object",
                    "The global object",
                    "The previous object",
                    "The function itself"
                ],
                answers: ["The current object"]
            },
            {
                subject: "JavaScript",
                title: "How do you create a promise in JavaScript?",
                choices: [
                    "new Promise((resolve, reject) => { });",
                    "Promise.create((resolve, reject) => { });",
                    "Promise((resolve, reject) => { });",
                    "new Promise.create((resolve, reject) => { });"
                ],
                answers: ["new Promise((resolve, reject) => { });"]
            },
            {
                subject: "JavaScript",
                title: "Which operator is used to compare both value and type in JavaScript?",
                choices: [
                    "===",
                    "==",
                    "!=",
                    "!=="
                ],
                answers: ["==="]
            },
            {
                subject: "JavaScript",
                title: "How do you prevent a form from submitting when a button is clicked?",
                choices: [
                    "event.preventDefault();",
                    "form.preventSubmit();",
                    "button.cancel();",
                    "return false;"
                ],
                answers: ["event.preventDefault();"]
            },
            {
                subject: "JavaScript",
                title: "What method is used to remove the last element from an array?",
                choices: [
                    "pop()",
                    "push()",
                    "shift()",
                    "unshift()"
                ],
                answers: ["pop()"]
            },
            {
                subject: "JavaScript",
                title: "Which statement is used to stop the execution of a loop in JavaScript?",
                choices: [
                    "break",
                    "continue",
                    "exit",
                    "stop"
                ],
                answers: ["break"]
            },
            {
                subject: "JavaScript",
                title: "What does the 'Array.isArray()' method do?",
                choices: [
                    "Checks if the value is an array",
                    "Converts an array to a string",
                    "Sorts the array",
                    "Finds the length of an array"
                ],
                answers: ["Checks if the value is an array"]
            },
            {
                subject: "JavaScript",
                title: "How do you handle errors in JavaScript code?",
                choices: [
                    "try...catch",
                    "throw...catch",
                    "error...handle",
                    "try...except"
                ],
                answers: ["try...catch"]
            },
            {
                subject: "JavaScript",
                title: "What is the purpose of the 'async' keyword in JavaScript?",
                choices: [
                    "Defines an asynchronous function",
                    "Makes a function synchronous",
                    "Delays the execution of code",
                    "Handles errors in promises"
                ],
                answers: ["Defines an asynchronous function"]
            },
            {
                subject: "JavaScript",
                title: "How do you define a constant in JavaScript?",
                choices: [
                    "const name = value;",
                    "var name = value;",
                    "let name = value;",
                    "define name = value;"
                ],
                answers: ["const name = value;"]
            },
            {
                subject: "MongoDB",
                title: "What type of database is MongoDB?",
                choices: [
                    "NoSQL",
                    "SQL",
                    "Graph",
                    "Object-oriented"
                ],
                answers: ["NoSQL"]
            },
            {
                subject: "MongoDB",
                title: "Which method is used to insert a document into a collection?",
                choices: [
                    "insertOne()",
                    "add()",
                    "create()",
                    "save()"
                ],
                answers: ["insertOne()"]
            },
            {
                subject: "MongoDB",
                title: "How do you find all documents in a collection?",
                choices: [
                    "find({})",
                    "findAll()",
                    "getAll()",
                    "list()"
                ],
                answers: ["find({})"]
            },
            {
                subject: "MongoDB",
                title: "Which operator is used to update fields in a document?",
                choices: [
                    "$set",
                    "$update",
                    "$modify",
                    "$change"
                ],
                answers: ["$set"]
            },
            {
                subject: "MongoDB",
                title: "How do you delete a document from a collection?",
                choices: [
                    "deleteOne()",
                    "remove()",
                    "drop()",
                    "erase()"
                ],
                answers: ["deleteOne()"]
            },
            {
                subject: "MongoDB",
                title: "What command is used to create a new collection?",
                choices: [
                    "db.createCollection()",
                    "db.newCollection()",
                    "db.create()",
                    "db.addCollection()"
                ],
                answers: ["db.createCollection()"]
            },
            {
                subject: "MongoDB",
                title: "Which method is used to retrieve a single document from a collection?",
                choices: [
                    "findOne()",
                    "findSingle()",
                    "getOne()",
                    "fetchOne()"
                ],
                answers: ["findOne()"]
            },
            {
                subject: "MongoDB",
                title: "How do you add a field to a document?",
                choices: [
                    "db.collection.update({query}, {$set: {field: value}})",
                    "db.collection.addField({query}, {field: value})",
                    "db.collection.insert({query}, {field: value})",
                    "db.collection.modify({query}, {field: value})"
                ],
                answers: ["db.collection.update({query}, {$set: {field: value}})"]
            },
            {
                subject: "MongoDB",
                title: "What method is used to sort documents in a collection?",
                choices: [
                    "sort()",
                    "orderBy()",
                    "arrange()",
                    "rank()"
                ],
                answers: ["sort()"]
            },
            {
                subject: "MongoDB",
                title: "Which command is used to count the number of documents in a collection?",
                choices: [
                    "countDocuments()",
                    "size()",
                    "count()",
                    "length()"
                ],
                answers: ["countDocuments()"]
            },
            {
                subject: "MongoDB",
                title: "How do you connect to a MongoDB server using the Mongo shell?",
                choices: [
                    "mongo <connection-string>",
                    "connect <connection-string>",
                    "mongo-connect <connection-string>",
                    "db-connect <connection-string>"
                ],
                answers: ["mongo <connection-string>"]
            },
            {
                subject: "MongoDB",
                title: "Which method is used to aggregate data in MongoDB?",
                choices: [
                    "aggregate()",
                    "groupBy()",
                    "collect()",
                    "merge()"
                ],
                answers: ["aggregate()"]
            },
            {
                subject: "MongoDB",
                title: "What is the purpose of an index in MongoDB?",
                choices: [
                    "To improve query performance",
                    "To enforce data integrity",
                    "To encrypt data",
                    "To limit data size"
                ],
                answers: ["To improve query performance"]
            },
            {
                subject: "MongoDB",
                title: "Which operator is used to perform a text search in MongoDB?",
                choices: [
                    "$text",
                    "$search",
                    "$find",
                    "$query"
                ],
                answers: ["$text"]
            },
            {
                subject: "MongoDB",
                title: "How do you ensure uniqueness for a field in MongoDB?",
                choices: [
                    "Use a unique index",
                    "Apply a unique constraint",
                    "Use the unique() method",
                    "Set the field as unique"
                ],
                answers: ["Use a unique index"]
            },
            {
                subject: "MongoDB",
                title: "What is a replica set in MongoDB?",
                choices: [
                    "A group of MongoDB servers that maintain the same data",
                    "A collection of databases",
                    "A type of data partitioning",
                    "A backup of the database"
                ],
                answers: ["A group of MongoDB servers that maintain the same data"]
            },
            {
                subject: "MongoDB",
                title: "Which method is used to update multiple documents in MongoDB?",
                choices: [
                    "updateMany()",
                    "updateAll()",
                    "bulkUpdate()",
                    "modify()"
                ],
                answers: ["updateMany()"]
            },
            {
                subject: "MongoDB",
                title: "What does the 'db.collection.drop()' command do?",
                choices: [
                    "Deletes the entire collection",
                    "Removes all documents in the collection",
                    "Drops indexes from the collection",
                    "Deletes a single document from the collection"
                ],
                answers: ["Deletes the entire collection"]
            },
            {
                subject: "MongoDB",
                title: "How do you create an index on a field in MongoDB?",
                choices: [
                    "db.collection.createIndex({field: 1})",
                    "db.collection.addIndex({field: 1})",
                    "db.collection.index({field: 1})",
                    "db.collection.create({field: 1})"
                ],
                answers: ["db.collection.createIndex({field: 1})"]
            },
            {
                subject: "MongoDB",
                title: "Which method is used to remove all documents from a collection without deleting the collection?",
                choices: [
                    "deleteMany()",
                    "remove()",
                    "clear()",
                    "drop()"
                ],
                answers: ["deleteMany()"]
            },
            {
                subject: "MongoDB",
                title: "What is the purpose of the 'ObjectId' type in MongoDB?",
                choices: [
                    "To provide a unique identifier for documents",
                    "To store binary data",
                    "To create indexes",
                    "To store array data"
                ],
                answers: ["To provide a unique identifier for documents"]
            },
            {
                subject: "MongoDB",
                title: "How do you perform a lookup operation in MongoDB to join data from two collections?",
                choices: [
                    "Use the $lookup stage in aggregation",
                    "Use the join() method",
                    "Use the $merge stage in aggregation",
                    "Use the $union stage"
                ],
                answers: ["Use the $lookup stage in aggregation"]
            },
            {
                subject: "Excel",
                title: "What is the default file extension for an Excel workbook?",
                choices: [
                    ".xls",
                    ".xlsx",
                    ".xlsm",
                    ".csv"
                ],
                answers: [".xlsx"]
            },
            {
                subject: "Excel",
                title: "Which function would you use to find the average of a range of cells?",
                choices: [
                    "SUM()",
                    "AVERAGE()",
                    "MEDIAN()",
                    "MODE()"
                ],
                answers: ["AVERAGE()"]
            },
            {
                subject: "Excel",
                title: "What does the 'VLOOKUP' function do?",
                choices: [
                    "Looks up a value in a table and returns a corresponding value",
                    "Counts the number of cells that meet a condition",
                    "Calculates the standard deviation of a set of values",
                    "Sorts data in ascending order"
                ],
                answers: ["Looks up a value in a table and returns a corresponding value"]
            },
            {
                subject: "Excel",
                title: "How do you create a chart from a selected range of data?",
                choices: [
                    "Insert > Chart",
                    "Data > Chart",
                    "Home > Chart",
                    "View > Chart"
                ],
                answers: ["Insert > Chart"]
            },
            {
                subject: "Excel",
                title: "Which of the following functions is used to count the number of cells that contain numbers?",
                choices: [
                    "COUNT()",
                    "COUNTA()",
                    "COUNTIF()",
                    "SUM()"
                ],
                answers: ["COUNT()"]
            },
            {
                subject: "Excel",
                title: "What does the 'CONCATENATE' function do?",
                choices: [
                    "Joins several text strings into one",
                    "Splits text into separate columns",
                    "Calculates the product of numbers",
                    "Formats numbers as text"
                ],
                answers: ["Joins several text strings into one"]
            },
            {
                subject: "Excel",
                title: "How can you freeze the top row in Excel?",
                choices: [
                    "View > Freeze Panes > Freeze Top Row",
                    "Home > Freeze Panes > Freeze Top Row",
                    "Insert > Freeze Panes > Top Row",
                    "Data > Freeze Panes > Top Row"
                ],
                answers: ["View > Freeze Panes > Freeze Top Row"]
            },
            {
                subject: "Excel",
                title: "Which formula would you use to calculate the sum of a range of cells?",
                choices: [
                    "SUM()",
                    "TOTAL()",
                    "ADD()",
                    "SUMIF()"
                ],
                answers: ["SUM()"]
            },
            {
                subject: "Excel",
                title: "What is the purpose of the 'IF' function in Excel?",
                choices: [
                    "Performs a logical test and returns one value for TRUE and another for FALSE",
                    "Calculates the average of a range",
                    "Sorts a list of data",
                    "Counts the number of cells in a range"
                ],
                answers: ["Performs a logical test and returns one value for TRUE and another for FALSE"]
            },
            {
                subject: "Excel",
                title: "How do you apply conditional formatting to a cell?",
                choices: [
                    "Home > Conditional Formatting",
                    "Insert > Conditional Formatting",
                    "Data > Conditional Formatting",
                    "View > Conditional Formatting"
                ],
                answers: ["Home > Conditional Formatting"]
            },
            {
                subject: "Excel",
                title: "What does the 'PMT' function calculate?",
                choices: [
                    "The payment for a loan based on constant payments and a constant interest rate",
                    "The present value of an investment",
                    "The future value of an investment",
                    "The average interest rate"
                ],
                answers: ["The payment for a loan based on constant payments and a constant interest rate"]
            },
            {
                subject: "Excel",
                title: "How do you sort data in ascending order?",
                choices: [
                    "Data > Sort A to Z",
                    "Home > Sort Ascending",
                    "View > Sort",
                    "Insert > Sort"
                ],
                answers: ["Data > Sort A to Z"]
            },
            {
                subject: "Excel",
                title: "Which function would you use to find the maximum value in a range of cells?",
                choices: [
                    "MAX()",
                    "MIN()",
                    "LARGE()",
                    "HIGHEST()"
                ],
                answers: ["MAX()"]
            },
            {
                subject: "Excel",
                title: "What is a pivot table used for?",
                choices: [
                    "Summarizing and analyzing data",
                    "Creating charts",
                    "Formatting cells",
                    "Entering data"
                ],
                answers: ["Summarizing and analyzing data"]
            },
            {
                subject: "Excel",
                title: "How do you insert a new worksheet in Excel?",
                choices: [
                    "Click the '+' button next to existing sheet tabs",
                    "File > New Worksheet",
                    "Home > Insert Worksheet",
                    "Data > New Worksheet"
                ],
                answers: ["Click the '+' button next to existing sheet tabs"]
            },
            {
                subject: "Excel",
                title: "Which function would you use to find the minimum value in a range of cells?",
                choices: [
                    "MIN()",
                    "MAX()",
                    "SMALL()",
                    "LOWEST()"
                ],
                answers: ["MIN()"]
            },
            {
                subject: "Excel",
                title: "What is the shortcut key for copying selected cells?",
                choices: [
                    "Ctrl + C",
                    "Ctrl + X",
                    "Ctrl + V",
                    "Ctrl + Z"
                ],
                answers: ["Ctrl + C"]
            },
            {
                subject: "Excel",
                title: "Which function calculates the standard deviation of a range of cells?",
                choices: [
                    "STDEV()",
                    "STD()",
                    "DEV()",
                    "VAR()"
                ],
                answers: ["STDEV()"]
            },
            {
                subject: "Excel",
                title: "How can you quickly adjust the width of a column to fit its contents?",
                choices: [
                    "Double-click the column boundary",
                    "Right-click and select 'AutoFit'",
                    "Use the 'Resize' option in the Home tab",
                    "Drag the column boundary to the desired width"
                ],
                answers: ["Double-click the column boundary"]
            },
            {
                subject: "Excel",
                title: "What is the purpose of the 'HLOOKUP' function?",
                choices: [
                    "Looks up a value in the top row and returns a value in the same column from a specified row",
                    "Looks up a value in the leftmost column and returns a value in the same row from a specified column",
                    "Counts the number of cells that contain numbers",
                    "Calculates the sum of a range of values"
                ],
                answers: ["Looks up a value in the top row and returns a value in the same column from a specified row"]
            },
            {
                subject: "Excel",
                title: "How do you concatenate text from multiple cells into one cell?",
                choices: [
                    "Use the CONCATENATE() function",
                    "Use the JOIN() function",
                    "Use the TEXTJOIN() function",
                    "Use the MERGE() function"
                ],
                answers: ["Use the CONCATENATE() function"]
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
