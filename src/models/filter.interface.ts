import { SpellFilterType, DndClass, School, Level } from 'src/constants/filterValues';

export interface IFilter {
    filterType: SpellFilterType,
    filterValue: DndClass | School | Level;
}