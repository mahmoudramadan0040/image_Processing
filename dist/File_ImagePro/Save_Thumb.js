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
const image_pro_1 = __importDefault(require("./image_pro"));
const path_1 = __importDefault(require("path"));
class Save {
    Save_Thumb(save) {
        return __awaiter(this, void 0, void 0, function* () {
            this.src = path_1.default.resolve(__dirname, '../../assets/images/' + `${save.filename}.jpg`);
            this.dist = path_1.default.resolve(__dirname, '../../assets/Thumb_Images/' +
                `${save.filename}_${save.width}__${save.height}_Thumb_image.jpg`);
            let width = parseInt(save.width);
            let height = parseInt(save.height);
            let process = new image_pro_1.default();
            let result = process.processing(this.src, this.dist, width, height);
            return result;
        });
    }
}
exports.default = Save;
