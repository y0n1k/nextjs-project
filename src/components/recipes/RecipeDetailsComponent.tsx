import React from 'react';
import {IRecipe} from "@/models/recipe/IRecipe";
import {IUser} from "@/models/user/IUser";
import UserComponent from "@/components/users/UserComponent";
import RecipeTagsComponent from "@/components/recipes/RecipeTagsComponent";

type RecipeDetailsComponentPropType = {
    recipe: IRecipe,
    user: IUser
}

const RecipeDetailsComponent = ({recipe, user}:RecipeDetailsComponentPropType) => {
    return (
            <div>
                <div>
                    <div>
                        <h3>{recipe.name}</h3>
                        <RecipeTagsComponent tags={recipe.tags}/>
                    </div>
                    <hr/>
                    <div>
                        Складність: {recipe.difficulty}
                    </div>
                    <div>
                        Час: {recipe.prepTimeMinutes} хв. підготовки + {recipe.cookTimeMinutes} хв. готування
                    </div>
                    <div>
                        Інгридієнти: {recipe.ingredients}
                    </div>
                    <div>
                        Інструкція: {recipe.instructions}
                    </div>
                </div>
                <hr/>
                <div>
                    Автор рецепту: <UserComponent item={user}></UserComponent>
                </div>
        </div>
    );
};

export default RecipeDetailsComponent;