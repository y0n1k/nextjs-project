import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import UsersComponent from "@/components/users/UsersComponent";

type Props = {
    searchParams: SearchParams
}

const UsersPage:FC<Props> = async ({searchParams}) => {

    const skipParam = await searchParams;
    const skip = skipParam.skip as string;
    console.log("Skip value:", skip);

    return (
    <div>
        UsersPage!
        <UsersComponent skip={skip}></UsersComponent>
    </div>
    )
}

export default UsersPage