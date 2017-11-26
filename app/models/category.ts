import {Recipe} from "./recipe";

export class Category {
    id: number;
    name: string;
    recipe?: Recipe[];
}
