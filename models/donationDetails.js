const mongoose = require('mongoose');
const path = require('path');

const donationDetailsSchema = new mongoose.Schema({
    optradio: {
        type: String,
        required: true,
        possibleValues: ['Indian','Other Country']
    },
    type: {
        type: String,
        required: true,
        possibleValues: ['Money', 'Meals', 'Clothes','Education', 'Health Care', 'Disaster Relief']
    }
}, {
    timestamps: true
});

const DonationDetails = mongoose.model('DonationDetails', donationDetailsSchema);

module.exports = DonationDetails;