import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {getRecipesById, getUserById} from "@/services/api.service";
import RecipeDetailsComponent from "@/components/recipes/RecipeDetailsComponent";

type Props = {
    searchParams: Promise<SearchParams>,
    params: Promise<{id:string}>
}

const RecipePage: FC<Props> = async ({searchParams, params}) => {

    const nameParam = await searchParams;
    const name =  nameParam.name as string
    const {id} = await params;
    console.log(id);
    console.log(name)
    const recipe = await getRecipesById(id)
    console.log(recipe)
    console.log(typeof recipe)

    // const [recipe] = recipes
    // console.log(recipe)
    const user = await getUserById(recipe.userId.toString())
    console.log(user);


    return (
        <div>
            {
                <RecipeDetailsComponent recipe={recipe} user={user} key={recipe.id}></RecipeDetailsComponent>
            }
        </div>
    );
};

export default RecipePage;