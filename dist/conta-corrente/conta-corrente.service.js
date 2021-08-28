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
exports.ContaCorrenteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conta_corrente_repository_1 = require("./conta-corrente.repository");
let ContaCorrenteService = class ContaCorrenteService {
    constructor(contaCorrenteRepository) {
        this.contaCorrenteRepository = contaCorrenteRepository;
    }
    async createContaCorrente(createContaCorrenteDto) {
        return this.contaCorrenteRepository.createContaCorrente(createContaCorrenteDto);
    }
    async findConta(conta) {
        const contaCorrente = await this.contaCorrenteRepository.findOne({ where: { conta: conta } });
        if (!contaCorrente)
            throw new common_1.NotFoundException('Conta Corrente não encontrada');
        return contaCorrente;
    }
    async sacarContaCorrente(contaCorrenteDto, conta) {
        const contaCorrente = await this.findConta(conta);
        const { valor, saldo } = contaCorrenteDto;
        contaCorrente.saldo = saldo ? saldo : contaCorrente.saldo;
        console.log(contaCorrente);
        try {
            await contaCorrente.save();
            return contaCorrente;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Erro ao salvar os dados no banco de dados');
        }
    }
    async depositarContaCorrente(contaCorrenteDto, conta) {
        const contaCorrente = await this.findConta(conta);
        const { valor, saldo } = contaCorrenteDto;
        let saldoBd = Number(contaCorrente.saldo);
        let valorF = Number(valor);
        contaCorrente.saldo = saldoBd ? saldoBd + valorF : valorF;
        console.log(contaCorrente.saldo);
        try {
            await contaCorrente.save();
            return contaCorrente;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Erro ao salvar os dados no banco de dados');
        }
    }
};
ContaCorrenteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(conta_corrente_repository_1.ContaCorrenteRepository)),
    __metadata("design:paramtypes", [conta_corrente_repository_1.ContaCorrenteRepository])
], ContaCorrenteService);
exports.ContaCorrenteService = ContaCorrenteService;
//# sourceMappingURL=conta-corrente.service.js.map