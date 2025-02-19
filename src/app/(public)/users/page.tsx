import {SearchParams} from "next/dist/server/request/search-params";
import React, {FC} from "react";
import UsersComponent from "@/components/users/UsersComponent";
import SearchComponent from "@/components/search/SearchComponent";
import PaginationComponent from "@/pagination/PaginationComponent";

type Props = {
    searchParams: Promise<SearchParams>
}

const UsersPage: FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
        <div>
            UsersPage!
            <SearchComponent></SearchComponent>
            <UsersComponent skip={skip}></UsersComponent>
            <PaginationComponent/>
        </div>
    )
}

export default UsersPage