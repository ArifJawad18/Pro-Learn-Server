const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(core());

const categories = require('./data/categories');
const allcoures = require('./data/allcoures');

app.get('/', (req, res) => {
    res.send('Course API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});



app.get('/allcoures/:id',(req, res) => {
    const id = req.params.id;
    const selelectedallcourse = allcoures.find(n => n.id === id);
    res.setDefaultEncoding(selelectedallcourse); 
})

app.listen(port, () => {
    console.log('Pro Learn Server running on port', port);
})
