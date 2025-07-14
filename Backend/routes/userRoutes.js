const express = require('express');
const router = express.Router();

const {getUsers,addUsers,getLeaderboard} = require('../controllers/userController');

router.get('/get-users', getUsers)
router.post('/add-user', addUsers);
router.get('/leaderboard', getLeaderboard);

module.exports =  router;
