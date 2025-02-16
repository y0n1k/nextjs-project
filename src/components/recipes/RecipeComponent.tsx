import React from 'react';
import Link from "next/link";
import {IRecipe} from "@/models/recipe/IRecipe";

type RecipeComponentPropType = {
    item: IRecipe
}

const RecipeComponent = ({item}:RecipeComponentPropType) => {
    return (
        <div><Link href={{
            pathname: '/recipes/' + item.id.toString(),
            query: {name: item.name}
        }}>{item.id}. {item.name}</Link></div>

    );
};

export default RecipeComponent;