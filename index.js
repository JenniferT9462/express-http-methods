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
    res.json(data);
    //res.send('This is the Contact Page')
})

//Catch-all route for undefined routes returns 404
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

//Start the server
app.listen(3000, () => {
    console.log("Express app listening on port 3000")
})