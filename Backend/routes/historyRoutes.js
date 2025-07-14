const express = require('express');
const router = express.Router();
const getClaimHistory = require('../controllers/historyController');

router.get('/get-history', getClaimHistory);

module.exports =  router;