import React from 'react';
import {IRecipe} from "@/models/recipe/IRecipe";

type RecipeDetailsComponentPropType = {
    item: IRecipe
}

const RecipeDetailsComponent = ({item}:RecipeDetailsComponentPropType) => {
    return (
            <div>
                <div>
                    <div>
                        <b>{item.name}</b>
                    </div>
                    <div>
                        Складність: {item.difficulty}
                    </div>
                    <div>
                        Час: {item.prepTimeMinutes} хв. підготовки + {item.cookTimeMinutes} хв. готування
                    </div>
                    <div>
                        Інгридієнти: {item.ingredients}
                    </div>
                    <div>
                        Інструкція: {item.instructions}
                    </div>
                </div>
        </div>
    );
};

export default RecipeDetailsComponent;