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
exports.ContaCorrenteController = void 0;
const common_1 = require("@nestjs/common");
const create_conta_corrente_dto_1 = require("./dtos/create-conta-corrente.dto");
const conta_corrente_service_1 = require("./conta-corrente.service");
const conta_corrente_dto_1 = require("./dtos/conta-corrente.dto");
let ContaCorrenteController = class ContaCorrenteController {
    constructor(contaCorrenteService) {
        this.contaCorrenteService = contaCorrenteService;
    }
    async createContaCorrente(createContaCorrenteDto) {
        const contaCorrente = await this.contaCorrenteService.createContaCorrente(createContaCorrenteDto);
        return {
            contaCorrente,
            message: 'Conta Corrente Cadastrada com Sucesso',
        };
    }
    async sacarContaCorrente(conta, contaCorrenteDto) {
        return this.contaCorrenteService.sacarContaCorrente(contaCorrenteDto, conta);
    }
    async depositarContaCorrente(conta, contaCorrenteDto) {
        return this.contaCorrenteService.depositarContaCorrente(contaCorrenteDto, conta);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conta_corrente_dto_1.CreateContaCorrenteDto]),
    __metadata("design:returntype", Promise)
], ContaCorrenteController.prototype, "createContaCorrente", null);
__decorate([
    (0, common_1.Patch)(['sacar/:conta']),
    __param(0, (0, common_1.Param)('conta')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, conta_corrente_dto_1.ContaCorrenteDto]),
    __metadata("design:returntype", Promise)
], ContaCorrenteController.prototype, "sacarContaCorrente", null);
__decorate([
    (0, common_1.Patch)(['depositar/:conta']),
    __param(0, (0, common_1.Param)('conta')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, conta_corrente_dto_1.ContaCorrenteDto]),
    __metadata("design:returntype", Promise)
], ContaCorrenteController.prototype, "depositarContaCorrente", null);
ContaCorrenteController = __decorate([
    (0, common_1.Controller)('conta-corrente'),
    __metadata("design:paramtypes", [conta_corrente_service_1.ContaCorrenteService])
], ContaCorrenteController);
exports.ContaCorrenteController = ContaCorrenteController;
//# sourceMappingURL=conta-corrente.controller.js.map