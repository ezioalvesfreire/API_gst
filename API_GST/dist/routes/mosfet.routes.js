"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const mosfet_controller_1 = require("../controllers/mosfet.controller");
router.route('/')
    .get(mosfet_controller_1.getMosfets);
exports.default = router;
