import * as React from 'react';
import './spellBook.css'
import { Search } from "../search/search";
import { SpellList } from '../spellList/spell-list';

export interface ISpellBookState {
    searchQuery: string;
}

export class SpellBook extends React.Component<any, ISpellBookState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            searchQuery: ""
        }
    }

    public render() {
        const searchQuery = this.state.searchQuery;
        const searchCallback = this.updateSearchQuery;
        return (
            <div className="spell-book-base">The SpellBook Component
                <Search searchCallback={searchCallback} searchQuery={searchQuery} />
                <SpellList searchQuery={searchQuery}/>
            </div>
        );
    }

    private updateSearchQuery = (newQuery: string): void => {
        this.setState( { searchQuery: newQuery } )
        console.log("Updating the parent state to: " + newQuery);
    }
}