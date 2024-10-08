"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const computador_service_1 = require("./computador.service");
const computador_controller_1 = require("./computador.controller");
const computador_entity_1 = require("./computador.entity");
let ComputadorModule = class ComputadorModule {
};
exports.ComputadorModule = ComputadorModule;
exports.ComputadorModule = ComputadorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([computador_entity_1.Computador])],
        providers: [computador_service_1.ComputadorService],
        controllers: [computador_controller_1.ComputadorController],
    })
], ComputadorModule);
//# sourceMappingURL=computador.module.js.map