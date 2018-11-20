import * as React from 'react';
import './search.css'
import { IResults } from '../results/results';
import { ISpellBookState } from '../spellBook/spellBook';

export interface ISearchProps extends IResults {
    searchCallback: Function;
}

export class Search extends React.Component<ISearchProps, ISpellBookState> {
    public constructor(props: ISearchProps) {
        super(props);
    }

    public render() {
        const searchQuery = this.props.searchQuery;
        return (
            <div className="search-base">
                The Search Component
                <input type="text" value={searchQuery} onChange={this.searchChange} />
            </div>
        )
    }

    private searchChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.props.searchCallback(event.currentTarget.value);
        console.log(event.currentTarget.value + " was searched for");
    }
}