import React from 'react';
import Link from "next/link";
import {IUser} from "@/models/user/IUser";

type RecipeComponentPropType = {
    item: IUser
}

const UserComponent = ({item}:RecipeComponentPropType) => {
    return (
        <div><Link href={{
            pathname: '/users/' + item.id.toString(),
            query: {name: `${item.firstName} ${item.lastName}`}
        }}>{item.id}. {item.firstName} {item.lastName}</Link></div>

    );
};

export default UserComponent;