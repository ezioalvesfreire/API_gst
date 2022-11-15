"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const powerTransistor_controller_1 = require("../controllers/powerTransistor.controller");
router.route('/')
    .get(powerTransistor_controller_1.getPowerTransistor);
exports.default = router;
