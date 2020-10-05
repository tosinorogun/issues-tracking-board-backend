const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const issuesRoutes = require('./routes/issues.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/issues', issuesRoutes);
app.get('/', (req, res) => res.send('Lumatic Application Started'));
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
