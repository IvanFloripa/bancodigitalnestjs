"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrenteRepository = void 0;
const typeorm_1 = require("typeorm");
const conta_corrente_entity_1 = require("./conta-corrente.entity");
const common_1 = require("@nestjs/common");
let ContaCorrenteRepository = class ContaCorrenteRepository extends typeorm_1.Repository {
    async createContaCorrente(createContaCorrenteDto) {
        const { conta } = createContaCorrenteDto;
        const contaCorrente = this.create();
        contaCorrente.conta = conta;
        try {
            await contaCorrente.save();
            return contaCorrente;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao salvar o usuário no banco de dados');
        }
    }
};
ContaCorrenteRepository = __decorate([
    (0, typeorm_1.EntityRepository)(conta_corrente_entity_1.ContaCorrente)
], ContaCorrenteRepository);
exports.ContaCorrenteRepository = ContaCorrenteRepository;
//# sourceMappingURL=conta-corrente.repository.js.map