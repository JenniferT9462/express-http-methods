# express-http-methods

## Overview

This assignment aims to familiarize you with handling HTTP methods (GET and POST) in an Express.js application. You'll learn to manage URL and query parameters and practice working with JSON data.

## Setup

1. Create a new `Github` repository named `express-http-methods`.

2. Generate a `package.json file` by running the following in  your terminal:

        npm init -y

3. Install `express.js` by running:

        npm install express

4. In the `package.json` file add `"type": "module"` to Enable ES Module Syntax (import/export).

5. Create a file named `index.js`. This is where your routes will go. 

## Server implementation

1. In the `index.js` file import express:

        import express from "express";

2. To create a instance of express:

        const app = express();

3.  Build an Express server with the following routes:

    - Implement routes to handle the following:

        - GET request to the root `/` that responds with a welcome message.

                app.get('/', (req, res) => {
                    res.send('Welcome to my Home Page!')
                })

        - GET request to `/about` that responds with a JSON message.

                app.get('/about', (req, res) => {
                    res.type("json")
                    res.send({
                        "message": "Hi! This is the About Page!"
                    })
                })

        - POST request to `/contact` that responds with the submitted data.

                //Middleware
                app.use(express.json());

                //POST route
                app.post('/contact', (req, res) => {
                    const data = req.body;
                    res.json(data);
                })

    - Ensure there is a catch-all route for undefined routes that returns a 404 status code:

            //Catch-all route for undefined routes returns 404
            app.use((req, res, next) => {
                res.status(404).send("Sorry can't find that!")
            })


4. To start the server you need to add this to the `server.js` file:

        //Start the server
        app.listen(3000, () => {
            console.log("Example app listening on port 3000")
        })

## Handle URL and Query Parameters

- URL Parameters:

    * Add a route to handle URL parameters for `/user/:id`:

            //Route with URL parameters
            app.get('/user/:id', (req, res) => {
                res.send(req.params)
            })

    * Add a route to handle query parameters for `/search`:

            //Route with query parameters
            app.get('/search', (req, res) => {
                const { query, category } = req.query;
                res.send(`Search Query: ${query}, Category: ${category}`);
            })

## Testing

- Use `Postman` for testing routes:

    * GET / should return "Welcome to my Home Page!"
        - Endpoint: http://localhost:3000/
        ![GET root](<img/rootPostman.png>)
    * GET /about should return JSON "Hi! This is the about page."
        - Endpoint: http://localhost:3000/about
        ![GET about](<img/aboutPostman.png>)
    * POST /contact should accept and return JSON data.
        - Endpoint:  http://localhost:3000/data
        ![POST data](<img/contactPostman.png>)
    * URL parameters for `/user/:id`
        - Endpoint: http://localhost:3000/user/34
        ![GET user id](<img/userPostman.png>)
    * Query parameters for `/search`
        - Endpoint: http://localhost:3000/search?query=knitting&category=hobbies
        ![GET user id](<img/searchPostman.png>)


## Acknowledgements

- GeeksforGeeks: <https://www.geeksforgeeks.org/how-do-you-access-query-parameters-in-an-express-js-route-handler/>
- Express Website: <https://expressjs.com/en/guide/routing.html>