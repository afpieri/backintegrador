"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class memoRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    config() {
        this.router.get('/', function (req, res, next) {
            res.send('memos');
        });
    }
}
const meRoutes = new memoRoutes();
exports.default = meRoutes.router;
