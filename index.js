const express = require('express');
require ('dotenv').config();
const app = express();
const PORT =process.env.Port || 7859;
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log('Filename:', filename);
console.log('Directory Name:', dirname);

app.use(express.json());
app.use('/notes', require('./routes/NoteRoutes'))


app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, './views/signup.html'));  
});
  


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});