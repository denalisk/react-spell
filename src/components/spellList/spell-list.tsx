import * as React from 'react';
import './spell-list.css'

export interface IResults {
    searchQuery: string;
}

const MOCKDATA = {
    "spells": [
        {
            "id": 1,
            "name": "Abi-Dalzim's Horrid Wilting",
            "description": "<p style='margin:0;padding: 5px 0'>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p style='margin:0;padding: 5px 0'>This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).</p>",
            "page": "ee pc 15",
            "range": "150 feet",
            "components": "V, S, M",
            "material": "A bit of sponge.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 8,
            "school": "Necromancy",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 2,
            "name": "Absorb Elements",
            "description": "<p style='margin:0;padding: 5px 0'>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.</p>",
            "page": "ee pc 15",
            "range": "Self",
            "components": "S",
            "ritual": "no",
            "duration": "1 round",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 1,
            "school": "Abjuration",
            "class": [
                "Druid",
                "Ranger",
                "Wizard"
            ]
        },
        {
            "id": 3,
            "name": "Acid Splash",
            "description": "<p style='margin:0;padding: 5px 0'>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.</p> <p style='margin:0;padding: 5px 0'>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
            "page": "phb 211",
            "range": "60 feet",
            "components": "V, S",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 0,
            "school": "Conjuration",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        },
        {
            "id": 4,
            "name": "Aganazzar's Scorcher",
            "description": "<p style='margin:0;padding: 5px 0'>A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.</p>",
            "higherLevel": "<p style='margin:0;padding: 5px 0'>When you cast this spell using a spell slot of 3nd level or higher, the damage increases by 1d8 for each slot level above 2st.</p>",
            "page": "ee pc 15",
            "range": "30 feet",
            "components": "V, S, M",
            "material": "A red dragon's scale.",
            "ritual": "no",
            "duration": "Instantaneous",
            "concentration": "no",
            "archetype": [],
            "castingTime": "1 action",
            "level": 2,
            "school": "Evocation",
            "class": [
                "Sorcerer",
                "Wizard"
            ]
        }
    ]
}

export class SpellList extends React.Component<IResults> {
    public searchQuery: string;

    public constructor(props: IResults) {
        super(props);
        this.searchQuery = props.searchQuery;
    }

    public render() {
        return (
            <div className="results-base">The Spell List: {this.props.searchQuery}</div>
        )
    }
}