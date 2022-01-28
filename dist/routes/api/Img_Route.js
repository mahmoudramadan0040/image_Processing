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
const express_1 = __importDefault(require("express"));
const File_images_read_1 = __importDefault(require("../../File_ImagePro/File_images_read"));
const Save_Thumb_1 = __importDefault(require("../../File_ImagePro/Save_Thumb"));
const Valid_1 = __importDefault(require("../../File_ImagePro/Valid"));
const img = express_1.default.Router();
img.get('/', (request, responce) => __awaiter(void 0, void 0, void 0, function* () {
    let check = new Valid_1.default();
    yield check.makeThumb_folder();
    const validation = yield check.url_collection(request.query);
    if (validation != null) {
        responce.send(validation);
        return;
    }
    let dir = new File_images_read_1.default();
    let save_img = new Save_Thumb_1.default();
    const Cash_img = yield check.is_found_Thumb(request.query);
    if (Cash_img) {
        responce.sendFile(yield check.cach_img(request.query));
        return;
    }
    try {
        yield save_img.Save_Thumb(request.query);
    }
    catch (_a) { }
    let image_Path = yield dir.Get_Image_Url(request.query);
    if (image_Path) {
        responce.sendFile(image_Path);
    }
    else {
        responce.send('please input valid name of image');
    }
}));
exports.default = img;
