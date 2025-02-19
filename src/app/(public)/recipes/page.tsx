import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    searchParams: Promise<SearchParams>
}

const RecipesPage: FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
        <div>
            Tag page
        </div>
    );
};

export default RecipesPage;