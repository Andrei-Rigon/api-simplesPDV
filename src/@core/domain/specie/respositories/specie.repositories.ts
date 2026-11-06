import { FindOptions, UpdateOptions } from "sequelize";
import { CreateSpecieDto } from "../dto/create-specie.dto";
import { Species } from "../entities/specie.entity";

export interface SpecieRepositoryInterface {
    findOne(query: FindOptions): Promise<Species>;
    findAll(query?: FindOptions): Promise<Species>;
    create(user: CreateSpecieDto): Promise<Species>;
    update(values: any, query: UpdateOptions): Promise<Species>;
    destroy(query: UpdateOptions): Promise<Species>;
}