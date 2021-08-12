"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    config() {
        this.router.get('/', (req, res) => res.send('algo'));
    }
}
const inRoutes = new indexRoutes();
exports.default = inRoutes.router;
