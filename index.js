const express = require('express');
require ('dotenv').config();
const app = express();
const port = process.env.PORT || 7856;
app .use(express.json());
app.use('/notes',require('./routes/NoteRoutes'))


app.get('/', (req, res) => {
    res.send('Hello World!')
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});