const User = require('../models/User');

const getUsers = async (req, res) => {
    try{
        const users = await User.find().sort({totalPoints: -1});
        res.status(200).json(users);
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Server Error'});
    }
}

const addUsers = async (req,res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({message: 'Name is required'});
    }
    try{
        const newUser = new User({name});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Server Error'});
    }

}

const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({totalPoints: -1});
        const rankedUsers = users.map((user, index) => ({
            ...user.toObject(),
            rank: index + 1
        }));
        res.status(200).json(rankedUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {getUsers,addUsers,getLeaderboard}
