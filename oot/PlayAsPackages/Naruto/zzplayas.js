"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("modloader64_api/EventHandler");
const OotoAPI_1 = require("./OotoAPI/OotoAPI");
const path_1 = __importDefault(require("path"));
const CoreInjection_1 = require("modloader64_api/CoreInjection");
class zzdata {
}
class zzplayas {
    preinit() { }
    init() {
        let zz = this['metadata']['zzplayas'];
        if (zz.adult_model !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.CUSTOM_MODEL_APPLIED_ADULT, path_1.default.resolve(path_1.default.join(__dirname, zz.adult_model)));
        }
        if (zz.child_model !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD, path_1.default.resolve(path_1.default.join(__dirname, zz.child_model)));
        }
        if (zz.anim_file !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.CUSTOM_MODEL_APPLIED_ANIMATIONS, path_1.default.resolve(path_1.default.join(__dirname, zz.anim_file)));
        }
        if (zz.adult_icon !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.CUSTOM_MODEL_APPLIED_ICON_ADULT, path_1.default.resolve(path_1.default.join(__dirname, zz.adult_icon)));
        }
        if (zz.child_icon !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.OotOnlineEvents.CUSTOM_MODEL_APPLIED_ICON_CHILD, path_1.default.resolve(path_1.default.join(__dirname, zz.child_icon)));
        }
    }
    postinit() { }
    onTick() { }
}
__decorate([
    CoreInjection_1.InjectCore()
], zzplayas.prototype, "core", void 0);
module.exports = zzplayas;
//# sourceMappingURL=zzplayas.js.map