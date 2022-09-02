import express from 'express';

import { getSensor, createSensor } from '../controllers/sensors.js';

const router = express.Router();

router.get('/', getSensor);
router.post('/', createSensor);

export default router;