import express from "express";
const app = express();

//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to my Home Page!')
})

app.get('/about', (req, res) => {
    res.type("json")
    res.send({
        "message": "Hi! This is the About Page!"
    })
})

app.post('/contact', (req, res) => {
    const data = req.body;
    if(data.name) {
        res.status(200).send(data)
        console.log(data)
    } else {
        res.status(400).send({
            error: "Name required"
        })
    }
})
//Route with URL parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    res.json({
        "UserId": + userId
    })
})

//Route with query parameters
app.get('/search', (req, res) => {
    const { query, category } = req.query;
    res.json({
        "Search Query": query, 
        "Category": category
    })
})

//Catch-all route for undefined routes returns 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>404! Page not found</h1>');
// });
  

//Start the server
app.listen(3000, () => {
    console.log("Express app listening on port 3000")
})