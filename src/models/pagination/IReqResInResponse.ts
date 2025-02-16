import {IUser} from "@/models/user/IUser";
import {IRecipe} from "@/models/recipe/IRecipe";

export interface IUsers {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}

export interface IRecipes {
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
}