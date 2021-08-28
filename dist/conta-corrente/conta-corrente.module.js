"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrenteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conta_corrente_repository_1 = require("./conta-corrente.repository");
const conta_corrente_service_1 = require("./conta-corrente.service");
const conta_corrente_controller_1 = require("./conta-corrente.controller");
let ContaCorrenteModule = class ContaCorrenteModule {
};
ContaCorrenteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([conta_corrente_repository_1.ContaCorrenteRepository])],
        providers: [conta_corrente_service_1.ContaCorrenteService],
        controllers: [conta_corrente_controller_1.ContaCorrenteController],
    })
], ContaCorrenteModule);
exports.ContaCorrenteModule = ContaCorrenteModule;
//# sourceMappingURL=conta-corrente.module.js.map