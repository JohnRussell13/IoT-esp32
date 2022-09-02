import mongoose from 'mongoose';

const sensorSchema = mongoose.Schema({
    moist: String,
    light: String,
    temp: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SensorModel = mongoose.model('SensorModel', sensorSchema);

export default SensorModel;