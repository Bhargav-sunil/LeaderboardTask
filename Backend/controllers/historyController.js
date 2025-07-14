const ClaimHistory = require('../models/ClaimHistory');

const getClaimHistory = async (req, res) => {
    try {
        const history = await ClaimHistory.find().populate('userId', 'name').sort({ claimedAt: -1 });
        res.status(200).json(history);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getClaimHistory;