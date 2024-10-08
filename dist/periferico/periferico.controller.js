"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerifericoController = void 0;
const common_1 = require("@nestjs/common");
const periferico_service_1 = require("./periferico.service");
const periferico_entity_1 = require("./periferico.entity");
let PerifericoController = class PerifericoController {
    constructor(perifericoService) {
        this.perifericoService = perifericoService;
    }
    findAll() {
        return this.perifericoService.findAll();
    }
    findOne(id) {
        return this.perifericoService.findOne(+id);
    }
    create(periferico) {
        return this.perifericoService.create(periferico);
    }
    update(id, periferico) {
        return this.perifericoService.update(+id, periferico);
    }
    remove(id) {
        return this.perifericoService.remove(+id);
    }
};
exports.PerifericoController = PerifericoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [periferico_entity_1.Periferico]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, periferico_entity_1.Periferico]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerifericoController.prototype, "remove", null);
exports.PerifericoController = PerifericoController = __decorate([
    (0, common_1.Controller)('periferico'),
    __metadata("design:paramtypes", [periferico_service_1.PerifericoService])
], PerifericoController);
//# sourceMappingURL=periferico.controller.js.map