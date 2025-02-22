import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import RecipesComponent from "@/components/recipes/RecipesComponent";
import PaginationComponent from "@/pagination/PaginationComponent";
import SearchComponent from "@/components/search/SearchComponent";

type Props = {
    searchParams: Promise<SearchParams>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
        <div>
            {/*Tag page*/}
            <SearchComponent></SearchComponent>
            <RecipesComponent skip={skip}/>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;