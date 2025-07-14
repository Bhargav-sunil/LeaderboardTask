const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

const claimPoints = async (req, res) => {
    const { userId } = req.params;
    const points = Math.floor(Math.random() * 10) + 1;
    try {
        const user = await User.findByIdAndUpdate(
        userId,
        { $inc: { totalPoints: points } },
        { new: true }
        );
    
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }
    
        const history = await ClaimHistory.create({ userId, points });
        res.status(200).json({ user, points, history });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = claimPoints;