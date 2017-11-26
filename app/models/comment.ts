import {Recipe} from "./recipe";
import {User} from "./user";

export class Comment {
    id: number;
    user: User;
    recipe: Recipe;
    comment: string;
}
