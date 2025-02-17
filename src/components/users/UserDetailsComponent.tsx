import React from 'react';
import {IUser} from "@/models/user/IUser";
import {IRecipe} from "@/models/recipe/IRecipe";
import RecipeComponent from "@/components/recipes/RecipeComponent";

type UserDetailsComponentPropType = {
    user: IUser,
    recipe: IRecipe
}

const UserDetailsComponent = ({user, recipe}: UserDetailsComponentPropType) => {

    return (
        <div>
            <div>
                <h3>{user.firstName} {user.lastName}</h3>
                <img src={user.image} alt=""/>
                <hr/>
                <div>
                    Вік: {user.age}
                </div>
                <div>
                    Посада: {user.role}
                </div>
                <div>
                    Дата народження: {user.birthDate}
                </div>
                <div>
                    Місце проживання: {user.address.address} {user.address.city} {user.address.country}
                </div>
            </div>
            <hr/>
            <div>
                Рецепти: <RecipeComponent item={recipe}></RecipeComponent>
            </div>
        </div>
    );
};

export default UserDetailsComponent;