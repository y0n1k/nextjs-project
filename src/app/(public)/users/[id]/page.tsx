import React, {FC} from 'react';
import {getRecipesByUserId, getUserById} from "@/services/api.service";
import UserDetailsComponent from "@/components/users/UserDetailsComponent";

type Props = {
    params: { id: string }
}

const UserPage: FC<Props> = async ({params}) => {

    const {id} = await params;
    console.log(id)
    console.log(typeof id)
    const user = await getUserById(id)
    const recipes = await getRecipesByUserId(id)
    console.log(recipes)
    console.log(typeof recipes)
    const [recipe] = recipes
    console.log(recipe);

    return (
        <div>
            <UserDetailsComponent user={user} recipe={recipe} key={user.id}></UserDetailsComponent>
        </div>
    );
};

export default UserPage;