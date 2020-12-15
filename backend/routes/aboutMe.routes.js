const express = require('express');
const router = express.Router();

const aboutMe = require('../controllers/aboutMe.controller');

router.get('/aboutMe', aboutMe.loadAll);

module.exports = router;