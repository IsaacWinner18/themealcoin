import mongoose from 'mongoose';

// Referral Schema and Model
const referralSchema = new mongoose.Schema({
  userId: String,
  referralCode: String,
  referredBy: String,
});

const Referral = mongoose.model('Referral', referralSchema);

export default Referral;