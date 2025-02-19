import React, {FC} from 'react';
import {getRecipesByName, getUserByName} from "@/services/api.service";
import RecipeComponent from "@/components/recipes/RecipeComponent";
import {IRecipe} from "@/models/recipe/IRecipe";
import {IUser} from "@/models/user/IUser";
import UserComponent from "@/components/users/UserComponent";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}
const SearchPage: FC<Props> = async ({searchParams}) => {
    const {name} = await searchParams
    console.log(name);
    const {recipes} = await getRecipesByName(name as string);
    console.log(recipes);
    const {users} = await getUserByName(name as string)
    console.log(users);


    return (
        <div>
            searchPage!
            <hr/>
            <div>
                Рецепти <b>{name}</b>
                {
                    recipes.map((recipe: IRecipe) => (
                    <RecipeComponent item={recipe} key={recipe.id}/>
                ))}
            </div>
            <div>
                Користувачі <b>{name}</b>
                {users.map((user: IUser) => (
                    <UserComponent item={user} key={user.id}/>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;