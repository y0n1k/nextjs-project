import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import RecipesComponent from "@/components/recipes/RecipesComponent";
import PaginationComponent from "@/pagination/PaginationComponent";
import SearchComponent from "@/components/search/SearchComponent";

type Props = {
    searchParams: Promise<SearchParams>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {

    const params = await searchParams;
    const skip = params.skip as string;
    const tag = params.tag as string | undefined;
    console.log("Skip value:", skip);
    console.log("Tag value:", tag);

    return (
        <div>
            <SearchComponent></SearchComponent>
            <RecipesComponent skip={skip} tag={tag}/>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;