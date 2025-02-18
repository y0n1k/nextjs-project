import React, {FC} from 'react';
import RecipesComponent from "@/components/recipes/RecipesComponent";
import {SearchParams} from "next/dist/server/request/search-params";
import SearchComponent from "@/components/search/SearchComponent";
import PaginationComponent from "@/pagination/PaginationComponent";

type Props = {
    searchParams: SearchParams
}

const RecipesPage: FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
        <div>
            Recipes page!
            <SearchComponent></SearchComponent>
            <RecipesComponent skip={skip}></RecipesComponent>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;