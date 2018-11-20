import * as React from 'react';
import './filter-container.css'
import { Filter } from '../filter/filter';

export class FilterContainer extends React.Component<any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>The FilterContainer list:
                <Filter />

            </div>
        )
    }
}