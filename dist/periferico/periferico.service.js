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
exports.PerifericoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const periferico_entity_1 = require("./periferico.entity");
let PerifericoService = class PerifericoService {
    constructor(perifericoRepository) {
        this.perifericoRepository = perifericoRepository;
    }
    create(periferico) {
        return this.perifericoRepository.save(periferico);
    }
    findAll() {
        return this.perifericoRepository.find();
    }
    findOne(id) {
        return this.perifericoRepository.findOne({ where: { id } });
    }
    async update(id, periferico) {
        await this.perifericoRepository.update(id, periferico);
    }
    async remove(id) {
        await this.perifericoRepository.delete(id);
    }
};
exports.PerifericoService = PerifericoService;
exports.PerifericoService = PerifericoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(periferico_entity_1.Periferico)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PerifericoService);
//# sourceMappingURL=periferico.service.js.map