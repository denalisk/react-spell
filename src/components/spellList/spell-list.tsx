import * as React from 'react';
import './spell-list.css'
import { ISpell } from 'src/models/spell.interface';
import { SpellItem } from '../spell-item/spell-item';

export interface ISpellCollection {
    spells: ISpell[];
}

export class SpellList extends React.Component<ISpellCollection> {

    public constructor(props: ISpellCollection) {
        super(props);
    }

    public render() {
        return (
            <div className="results-base">The Spell List: 
                {this.props.spells.map(spell => {
                    return <SpellItem {...spell} id={spell.id} />
                })}
            </div>
        )
    }
}