import {Router} from 'express';
const router = Router();


import {getPowerTransistors, createPowerTransistors, getPowerTransistor} from '../controllers/powerTransistor.controller'

router.route('/')
    .get(getPowerTransistors)
    .post(createPowerTransistors);

router.route('/:powerTransistorId')
    .get(getPowerTransistor)

export default router;

