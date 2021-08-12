"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const memoRoutes_1 = __importDefault(require("./routes/memoRoutes"));
class server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/memos', memoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('sever on port', this.app.get('port'));
        });
    }
}
const servidor = new server();
servidor.start();
