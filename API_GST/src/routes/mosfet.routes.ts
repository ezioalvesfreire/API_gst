import {Router} from 'express';
const router = Router();


import {getMosfets} from '../controllers/mosfet.controller'

router.route('/')
    .get(getMosfets);

export default router;


