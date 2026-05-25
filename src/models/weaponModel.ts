import { Schema, model, Model } from 'mongoose';
import type { IWeapon } from '../interfaces/weaponInterface.js';

const weaponSchema = new Schema<IWeapon>({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    source: {
        type: [String],
        required: true,
    },
    baseAtk: {
        type: Number,
        required: true,
    },
    subStatType: {
        type: String,
        required: true,
    },
    baseSubStat: {
        type: String,
        required: true,
    },
    affix: {
        type: String,
        required: true,
    },
    passive: {
        type: String,
        required: true,
    },
    versionRelease: {
        type: Number,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    family: {
        type: String,
        required: true
    },
    images: {
        icon: {
            type: String,
            required: true,
        },
        original: {
            type: String,
            required: true,
        },
        awakened: {
            type: String,
            required: true,
        },
        gacha: {
            type: String,
            required: true,
        }
    },
    wikiUrl: {
        type: String,
        required: true,
    }
});

const Weapon : Model<IWeapon> = model<IWeapon>('Weapon', weaponSchema);

export default Weapon;
