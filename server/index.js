require ('dotenv').config();
const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Database is connected')
})
.catch(error => console.error('Error', error))

app.listen(SERVER_PORT, () => {
    console.log(`Server connected and running on port ${SERVER_PORT}.`);
})