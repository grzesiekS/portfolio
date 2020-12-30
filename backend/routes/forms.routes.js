const express = require('express');
const router = express.Router();

const forms = require('../controllers/forms.controller');

router.get('/forms', forms.loadAll);
router.post('/forms/send-email', forms.sendEmail);

module.exports = router;