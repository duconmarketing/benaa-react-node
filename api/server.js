const express = require('express');
const cors = require('cors');
const app = express(),
        bodyParser = require('body-parser');
        port=3080;

const users = [];
app.use(bodyParser.json());

// app.get('/api/users', (req, res) => {
//     console.log('User API called');
//     res.json(users);
// });

// app.post('/api/users', (req, res) => {
//     const users = req.body.users;
//     console.log('adding users');
//     users.push(user);
//     res.json('user added');
// });

app.get('/', (req, res) => {
    res.send('App is ready');
});

app.listen(port, () => {
    console.log('Server : Listening to the port');
});

// app.use(cors());

const api = require('./routes/routes');
app.use('/api/v1/', api);
