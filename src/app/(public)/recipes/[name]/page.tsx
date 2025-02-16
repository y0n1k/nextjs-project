import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {getRecipesByName} from "@/services/api.service";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeDetailsComponent from "@/components/recipes/RecipeDetailsComponent";

type Props = {
    searchParams: SearchParams
}

const RecipePage: FC<Props> = async ({searchParams}) => {

    const nameParam = await searchParams;
    const name =  nameParam.name as string
    console.log(name)
    const {recipes} = await getRecipesByName(name)
    console.log(recipes)
    console.log(typeof recipes)
    return (
        <div>
            {
                recipes.map((recipe:IRecipe) => <RecipeDetailsComponent item={recipe} key={recipe.id}></RecipeDetailsComponent> )
            }
        </div>
    );
};

export default RecipePage;