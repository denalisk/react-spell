import * as React from 'react';
import './filter-container.css'
import { DndClass, SpellFilterType } from 'src/constants/filterValues';
import { FilterItem } from '../filter-item/filter-item';

export class FilterContainer extends React.Component {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>The FilterContainer list:
                {Object.keys(SpellFilterType).map(filterType => {
                    return (
                        <div>

                        </div>
                    );
                })}
                <div>Classes:
                    {Object.keys(DndClass).map(key => {
                        return <FilterItem filter={ { filterType: SpellFilterType.DndClass, filterValue: DndClass[key] } }/>
                    })}
                </div>
            </div>
        )
    }

    // private buildFilterGroups(): IFilterGroup[] {
        

    // }

    // private buildDndClassFilters(): IFilterGroup[] {
    //     return 
    // }

    private filterTypeSwitch(filterType: string) {
        
    }
}