import { Species } from "../entities/specie.entity";

export const SpeciesProvider = [
    {
        provide: 'SPECIES_REPOSITORY',
        useValue: Species
    }
]