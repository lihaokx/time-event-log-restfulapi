const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const User = require('./user');

const rowsLogSchema = new Schema({
        user: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
        date: 
            {
                type: String,
                required: true
            },
        rows:
        [
            {
                start: {
                    type: String,
                    required: true
                },
                stop: {
                    type: String,
                    required: true
                },
                event: {
                    type: String,
                    required: true
                },
                period: {
                    type: String,
                    required: true
                },
                importance: {
                    type: Number,
                    required: true
                }
            }
        ]
    }, {
    timestamps: true
});

var rowsOfLog = mongoose.model('rowsLog', rowsLogSchema);
module.exports = rowsOfLog;



