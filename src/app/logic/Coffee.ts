import {PlaceLocation} from './PlaceLocation';
import {TastingRating} from './TastaingRating';

export class Coffee {
    type: string;
    rating: number;
    notes: string;
    tastingRating: TastingRating;

    constructor(public name: string, public place: string, public location: PlaceLocation) { }

}
