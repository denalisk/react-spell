import * as React from 'react';
import './results.css'

export interface IResults {
    searchQuery: string;
}

export class Results extends React.Component<IResults> {
    public searchQuery: string;

    public constructor(props: any) {
        super(props);
        this.searchQuery = props.searchQuery;
    }

    public render() {
        return(
            <div className="results-base">The Results: {this.props.searchQuery}</div>
        )
    }
}
