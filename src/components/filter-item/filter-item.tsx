import * as React from 'react';
import './filter-item.css'
import { IFilter } from 'src/models/filter.interface';

type Props = {
    filter: IFilter;
}

export class FilterItem extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div>Filter: {this.props.filter.filterValue}</div>
        )
    }
}