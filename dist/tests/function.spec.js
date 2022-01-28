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
const Valid_1 = __importDefault(require("../File_ImagePro/Valid"));
const Save_Thumb_1 = __importDefault(require("../File_ImagePro/Save_Thumb"));
describe('Test image function with sharp ', () => {
    it('filename image  exists ', () => __awaiter(void 0, void 0, void 0, function* () {
        const valid = new Valid_1.default();
        const err = yield valid.url_collection({
            filename: 'fjord',
            width: '300',
            height: '300',
        });
        console.log(err);
        expect(err).toBeNull();
    }));
    it('resize image is working', () => __awaiter(void 0, void 0, void 0, function* () {
        const img = new Save_Thumb_1.default();
        let err;
        yield img.Save_Thumb({ filename: 'fjord', width: '250', height: '250' });
        try {
            const path_thumb = path_1.default.resolve(__dirname, '../../assets/Thumb_Images/fjord_250__250_Thumb_image.jpg');
            yield fs_1.promises.access(path_thumb);
            err = true;
        }
        catch (_a) {
            err = false;
        }
        expect(err).toBeTrue();
    }));
});
