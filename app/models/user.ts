import {Recipe} from "./recipe";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    recipes?: Recipe[];
    favoriteRecipes?: Recipe[];
    comments?: Comment[];
    role: string;
}
