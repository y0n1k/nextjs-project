import React from 'react';
import {getRecipes} from "@/services/api.service";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeComponent from "@/components/recipes/RecipeComponent";

type Props = {
    skip: string
}

const RecipesComponent = async ({skip}: Props) => {


    const {recipes} = await getRecipes(skip);
    console.log(recipes)

    return (
        <div>
            {recipes ? (
                recipes.map((recipe: IRecipe) => <RecipeComponent item={recipe} key={recipe.id}></RecipeComponent>)
            ) : (
                <div></div>
            )

            }
        </div>
    );
};

export default RecipesComponent;