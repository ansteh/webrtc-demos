const path = require('path');

const express = require('express');
const router = express.Router();

router.use('/local-peer-connection', express.static(path.join(__dirname, 'public')));

module.exports = router;