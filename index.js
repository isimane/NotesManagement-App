import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const PORT =process.env.Port || 7859;

app.use(express.json());

let notes = [];
let currentId = 1;

app.get('/notes', (req, res) => {
    res.json(notes);   
});
app.get('/notes/id', (req, res) => {
    res.send('Hello everyoneEEEEEEEEEE!');   
});
app.post('/notes', (req, res) => {
    res.send('Hello everyoneEEEEEEEEEE!');   
});
app.delete('/notes/id', (req, res) => {
    res.send('Hello everyoneEEEEEEEEEE!');   
});
app.put('/notes/id', (req, res) => {
    res.send('Hello everyoneEEEEEEEEEE!');   
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});