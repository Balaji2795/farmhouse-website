const express = require('express');
const path = require('path');

const app = express();

// Set EJS
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const pagesRoute = require('./routes/pages');
app.use('/', pagesRoute);

// Port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
