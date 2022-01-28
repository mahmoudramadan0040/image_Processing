"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Img_Route_1 = __importDefault(require("./api/Img_Route"));
const routes = express_1.default.Router();
routes.get('/', (request, recponce) => {
    recponce.send('hello main routes');
});
routes.use('/images', Img_Route_1.default);
exports.default = routes;
