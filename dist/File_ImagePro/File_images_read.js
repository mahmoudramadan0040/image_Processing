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
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
// interface Url {
//     filename?:string,
//     width?:string,
//     height?:string
// }
class Url {
}
class File extends Url {
    constructor() {
        // here i
        super(...arguments);
        this.image_thumb = path_1.default.resolve(__dirname, '../../assets/Thumb_Images');
    }
    Get_Image_Url(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Url) {
                return null;
            }
            if (url.height && url.width) {
                path_1.default.resolve(this.image_thumb, `${url.filename}_${url.width}__${url.width}_Thumb_image.jpg`);
                let exist_path = yield this.Check_Url(path_1.default.resolve(this.image_thumb, `${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`));
                if (exist_path) {
                    return exist_path;
                }
            }
            else {
                let image = path_1.default.resolve(__dirname, '../../assets/images');
                let image_path = path_1.default.resolve(image, `${url.filename}.jpg`);
                let exist_path = yield this.Check_Url(image_path);
                if (exist_path) {
                    return exist_path;
                }
            }
            return null;
        });
    }
    Check_Url(Url) {
        return __awaiter(this, void 0, void 0, function* () {
            // if( fs.access(Url)){
            //     return Url;
            // }
            try {
                yield fs_1.promises.access(Url);
                return Url;
            }
            catch (_a) {
                return null;
            }
        });
    }
}
exports.default = File;
