const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  points: { type: Number },
  claimedAt: { type: Date, default: Date.now },
});

const ClaimHistory = mongoose.model('ClaimHistory', claimHistorySchema);
module.exports = ClaimHistory;

