const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));

const port = 3002;
app.listen(port, () => console.log(`Server running on port ${port}`));



