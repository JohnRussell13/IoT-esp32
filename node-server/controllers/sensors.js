import SensorModel from '../models/sensorModel.js';

export const getSensor = async (req, res) => {
    try {
        const sensorModel = await SensorModel.find().sort({createdAt:-1}).limit(1);
        res.status(200).json(sensorModel);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const getBunchSensors = async (req, res) => {
    try {
        const sensorModel = await SensorModel.find().sort({createdAt:-1}).limit(10);
        res.status(200).json(sensorModel);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const createSensor =  async(req, res) => {
    const lightScaled = Math.round((4095 - req.body.light) / 4095.0 * 10000)/100.0;
    const sensor = {
        moist: req.body.moist,
        light: lightScaled,
        temp: req.body.temp
    };
    const newSensor = new SensorModel(sensor);

    try {
        await newSensor.save();
        res.status(201).json(newSensor);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}