const express = require('express');
const router = express.Router();

const socialMedia = require('../controllers/socialMedia.controller');

router.get('/socialMedia/title', socialMedia.loadTitle);
router.get('/socialMedia/data', socialMedia.loadData);

module.exports = router;