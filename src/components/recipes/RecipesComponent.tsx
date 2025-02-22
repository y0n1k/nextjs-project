import React from 'react';
import {getRecipes, getRecipesByTag} from "@/services/api.service";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeComponent from "@/components/recipes/RecipeComponent";

type Props = {
    skip: string
    tag?: string;
}

const RecipesComponent = async ({skip, tag}: Props) => {


    const {recipes} = await getRecipes(skip);
    console.log(recipes)
    let filteredRecipes
    if (tag) {
        ({recipes:filteredRecipes} = await getRecipesByTag(tag))
    }
    console.log(filteredRecipes);

    return (
        <div>
            {recipes && !filteredRecipes ? (
                recipes.map((recipe: IRecipe) => <RecipeComponent item={recipe} key={recipe.id}></RecipeComponent>)
            ) : filteredRecipes && !recipes ? (
                filteredRecipes.map((recipe:IRecipe) => <RecipeComponent item={recipe} key={recipe.id}/>)
            ) : (
                <div></div>
            )
            }
        </div>
    );
};

export default RecipesComponent;