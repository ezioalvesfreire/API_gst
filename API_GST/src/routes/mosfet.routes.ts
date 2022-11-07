import {Router} from 'express';
const router = Router();


import {getMosfets, createMosfet, getMosfet} from '../controllers/mosfet.controller'

router.route('/')
    .get(getMosfets)
    .post(createMosfet);

router.route('/:mosfetId')
    .get(getMosfet)

export default router;


