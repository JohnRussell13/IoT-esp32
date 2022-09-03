import express from 'express';

import { getSensor, getBunchSensors, createSensor } from '../controllers/sensors.js';

const router = express.Router();

router.get('/', getSensor);
router.get('/bunch', getBunchSensors);
router.post('/', createSensor);

export default router;