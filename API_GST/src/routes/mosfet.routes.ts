import {Router} from 'express';
const router = Router();


import {getMosfets, createMosfet} from '../controllers/mosfet.controller'

router.route('/')
    .get(getMosfets)
    .post(createMosfet);

export default router;


