const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('An AWS project to understand Elastic Beanstalk, and CI/CD on cloud!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
