import React from 'react';
import Link from "next/link";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeTagsComponent from "@/components/recipes/RecipeTagsComponent";

type RecipeComponentPropType = {
    item: IRecipe
}

const RecipeComponent = ({item}:RecipeComponentPropType) => {
    return (
        <div><Link href={{
            pathname: '/recipes/' + item.id.toString(),
            query: {name: item.name}
        }}>{item.id}. {item.name}</Link>
        <RecipeTagsComponent tags={item.tags}/>
        </div>

    );
};

export default RecipeComponent;