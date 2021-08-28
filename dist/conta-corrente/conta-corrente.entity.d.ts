import { BaseEntity } from 'typeorm';
export declare class ContaCorrente extends BaseEntity {
    id: number;
    conta: number;
    saldo: number;
    createdAt: Date;
    updatedAt: Date;
}
