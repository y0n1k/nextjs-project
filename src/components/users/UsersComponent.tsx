import React from 'react';
import {getUsers} from "@/services/api.service";
import UserComponent from "@/components/users/UserComponent";
import {IUser} from "@/models/user/IUser";

type Props = {
    skip:string
}

const UsersComponent = async ({skip}:Props) => {

    const {users} = await getUsers(skip);
    console.log(users)

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent item={user} key={user.id}></UserComponent>)
            }
        </div>
    );
};

export default UsersComponent;