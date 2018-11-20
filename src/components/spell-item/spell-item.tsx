import * as React from 'react';
import { ISpell } from 'src/models/spell.interface';

export class SpellItem extends React.Component<ISpell> {

    public constructor(props: ISpell) {
        super(props);
    }

    public render() {
        return (
            <div>A spell item: {this.props.name}</div>
        )
    }
}