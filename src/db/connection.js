const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('DB Connected');
    } catch (error) {
        console.error('Error ============ ON DB Connection')
    }
};