import {User} from "./user";
import {Category} from "./category";
import {Comment} from "./comment";

export class Recipe {
    id: number;
    recipeName: string;
    owner: User;
    ingredients: string;
    description: string;
    favouriteUsers?: User[];
    category: Category;
    comments?: Comment[];
}