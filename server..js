//create a basic express server
const express = require('express');
const app = express();
            
// this is a change 

const port = 3000;  

//add as middleware
app.use(express.json());

//send hello world when a GET request is made to the root URL
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});