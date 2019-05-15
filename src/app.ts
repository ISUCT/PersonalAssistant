import express = require('express');
import bodyParser = require('body-parser');

import { router as timerApi } from './backend/api/timer';

const app = express();
const port = 3000; // default port to listen

app.use(bodyParser.json()); 
// define a route handler for the default home page
app.get('/', (req: any, res: any) => {
    res.send('Hello world!');
});

app.get('/test', (req: any, res: any) => {
    res.send({
        data: ['Test data!',
            'Test data1', 'Test data2'],
        date: new Date(),
    });
});


app.use('/api/timer/', timerApi);


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
