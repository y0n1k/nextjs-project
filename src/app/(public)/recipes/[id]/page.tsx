import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {getRecipesByName, getUserById} from "@/services/api.service";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeDetailsComponent from "@/components/recipes/RecipeDetailsComponent";

type Props = {
    searchParams: SearchParams,
    params: {id:string}
}

const RecipePage: FC<Props> = async ({searchParams, params}) => {

    const nameParam = await searchParams;
    const name =  nameParam.name as string
    const {id} = await params;
    console.log(id);
    console.log(name)
    const {recipes} = await getRecipesByName(name)
    console.log(recipes)
    console.log(typeof recipes)

    const [recipe] = recipes
    console.log(recipe)
    const user = await getUserById(recipe.userId.toString())
    console.log(user);


    return (
        <div>
            {
                recipes.map((recipe:IRecipe) => <RecipeDetailsComponent recipe={recipe} user={user} key={recipe.id}></RecipeDetailsComponent> )
            }
        </div>
    );
};

export default RecipePage;