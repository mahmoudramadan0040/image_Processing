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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class Valid {
    img_found(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url.filename)
                return false;
            path_1.default.resolve(__dirname, '../../assets/Thumb_Images');
            try {
                let search = (yield fs_1.promises.readdir(path_1.default.resolve(__dirname, '../../assets/images'))).map((image_name) => image_name.split('.')[0]);
                if (search.includes(url.filename)) {
                    return true;
                }
                return false;
            }
            catch (_a) {
                return false;
            }
        });
    }
    checkDim_img(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (url.width < 1 ||
                Number.isNaN(url.width))
                return false;
            if (url.height < 1 ||
                Number.isNaN(url.height))
                return false;
            return true;
        });
    }
    url_collection(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const exist = yield this.img_found(url);
            if (!exist) {
                return 'image not existed';
            }
            if (!url.height && !url.width) {
                return null;
            }
            const checkDim = yield this.checkDim_img(url);
            if (!checkDim) {
                return 'width or height may be worng';
            }
            return null;
        });
    }
    is_found_Thumb(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url.filename)
                return false;
            if (!url.height)
                return false;
            if (!url.width)
                return false;
            try {
                yield fs_1.promises.access(path_1.default.resolve(__dirname, '../../assets/Thumb_Images/' +
                    `${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`));
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    cach_img(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let cashed = path_1.default.resolve(__dirname, '../../assets/Thumb_Images/' +
                `${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`);
            return cashed;
        });
    }
    makeThumb_folder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const folder = path_1.default.resolve(__dirname, '../../assets/Thumb_Images');
                yield fs_1.promises.access(folder);
            }
            catch (_a) {
                const folder = path_1.default.resolve(__dirname, '../../assets/Thumb_Images');
                yield fs_1.promises.mkdir(folder);
            }
        });
    }
}
exports.default = Valid;
