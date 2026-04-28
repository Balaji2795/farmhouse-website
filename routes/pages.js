const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => {
    res.render('index', { title: "Farmhouse Home" });
});

// About
router.get('/about', (req, res) => {
    res.render('about', { title: "About Farmhouse" });
});

// Contact
router.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Us" });
});

module.exports = router;
