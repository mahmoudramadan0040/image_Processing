"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
//https://sharp.pixelplumbing.com/api-constructor
class default_1 {
    processing(src, dist, width, height) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, sharp_1.default)(src).resize(width, height).toFormat('jpeg').toFile(dist);
                return null;
            }
            catch (_a) {
                return 'image can not be resizes !!!';
            }
        });
    }
}
exports.default = default_1;
