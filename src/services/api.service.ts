import {IUser} from "@/models/user/IUser";
import {IRecipe} from "@/models/recipe/IRecipe";
import axios from "axios";
import {IUserWithToken} from "@/models/login/IUserWithToken";

export const getUsers = async (page: string): Promise<{ users: IUser[] }> => {
    return await fetch('https://dummyjson.com/users?skip=' + page)
        .then(value => value.json())
}

export const getUserByName = async (name: string): Promise<{ users: IUser[] }> => {
    return await fetch('https://dummyjson.com/users/search?q=' + name)
        .then(value => value.json())
}

export const getUserById = async (id: string): Promise<IUser> => {
    return await fetch('https://dummyjson.com/users/' + id)
        .then(response => response.json());
};

export const getRecipesByName = async (name: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes/search?q=' + name)
        .then(value => value.json())
}
export const getRecipesByTag = async (tag: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes/tag/' + tag)
        .then(value => value.json())
}

export const getRecipesById = async (id: string): Promise<IRecipe> => {
    return await fetch('https://dummyjson.com/recipes/' + id)
        .then(value => value.json())
}

export const getRecipes = async (page: string): Promise<{ recipes: IRecipe[] }> => {
    return await fetch('https://dummyjson.com/recipes?skip=' + page)
        .then(value => value.json())
}

export const getRecipesByUserId = async (userId: string): Promise<IRecipe[]> => {
    return await fetch('https://dummyjson.com/recipes?limit=100')
        .then(value => value.json())
        .then(data => data.recipes.filter((recipe: IRecipe) => recipe.userId.toString() === userId))
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const login = async ({username, password, expiresInMins}: LoginData) => {
    try {
        const {data: userWithToken} = await axiosInstance.post<IUserWithToken>('login', {username, password, expiresInMins})
        console.log(userWithToken);
        localStorage.setItem('user', JSON.stringify(userWithToken));
    }
    catch(e:unknown) {
        console.log('Error: ', e)
    }

}