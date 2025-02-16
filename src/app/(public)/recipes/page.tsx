import React, {FC} from 'react';
import RecipesComponent from "@/components/recipes/RecipesComponent";
import {SearchParams} from "next/dist/server/request/search-params";
// import {getRecipes} from "@/services/api.service";

type Props = {
    searchParams: SearchParams
}

const RecipesPage:FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
        <div>
            Recipes page!
            <RecipesComponent skip={skip}></RecipesComponent>
        </div>
    );
};

export default RecipesPage;