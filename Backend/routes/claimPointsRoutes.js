const express = require('express');
const router = express.Router();

const claimPoints = require('../controllers/ClaimPointsController');


router.post('/points/:userId', claimPoints);

module.exports =  router;