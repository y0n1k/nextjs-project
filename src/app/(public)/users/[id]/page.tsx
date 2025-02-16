import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {getUserById, getUserByName} from "@/services/api.service";
import {IUser} from "@/models/user/IUser";
import UserDetailsComponent from "@/components/users/UserDetailsComponent";

type Props = {
    params: {id:string}
}

const UserPage: FC<Props> = async ({params}) => {

    const {id} = await params;
    // const name =  nameParam.name as string
    console.log(id)
    const user = await getUserById(id)
    // console.log(users)
    // console.log(typeof users)
    return (
        <div>
<UserDetailsComponent item={user} key={user.id}></UserDetailsComponent>

        </div>
    );
};

export default UserPage;