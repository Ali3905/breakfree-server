const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    designation: { type: String, required: true },
    role: { type: String, required: true },
    managerName: { type: String },
    location: { type: String, required: true },
    department: { type: String, required: true },
    division: { type: String, required: true },
    batchNo: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
