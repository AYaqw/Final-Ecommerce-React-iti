import express from 'express';
import Data from './data.js';

//ToDo:: * 1
const app = express();

//ToDo:: * 2
app.get('/api/Categories', (req, res) => {
    res.send(Data.categories);
});

app.get('/api/Products', (req, res) => {
    res.send(Data.Products);
});

app.get(`/api/Products/product/:product`, (req, res) => {
    const product = Data.Products.find((x) => x.title === req.params.product);
    if (product) {
        res.send(product);
    }
    //! else not Found page
});

//ToDo:: * 3
const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});