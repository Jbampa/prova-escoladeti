"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerifericoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const periferico_service_1 = require("./periferico.service");
const periferico_controller_1 = require("./periferico.controller");
const periferico_entity_1 = require("./periferico.entity");
let PerifericoModule = class PerifericoModule {
};
exports.PerifericoModule = PerifericoModule;
exports.PerifericoModule = PerifericoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([periferico_entity_1.Periferico])],
        providers: [periferico_service_1.PerifericoService],
        controllers: [periferico_controller_1.PerifericoController],
    })
], PerifericoModule);
//# sourceMappingURL=periferico.module.js.map