'use client'

import {login} from "@/services/api.service";
import {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const LoginPage = () => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const router = useRouter();

        useEffect(() => {
            const user = localStorage.getItem('user');
            if (user) {
                router.push("/");
            }
        }, [router]);

        const handleSubmit = async (event:FormEvent) => {
            event.preventDefault();
            try {
                await login({
                    username: username,
                    password: password,
                    expiresInMins: 60,
                });

                const user = localStorage.getItem('user');
                if (user) {
                    router.push("/");
                } else {
                    alert("Не вдалося увійти");
                }
            } catch (error) {
                console.error("Помилка входу:", error);
                alert("Неправильне ім'я або пароль");
            }
        }


        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type={'text'} name={'name'} placeholder={'Ввведіть ім\'я'} value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input type={'password'} name={'password'} placeholder={'Введіть пароль'} value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Увійти</button>
                </form>
            </div>
        );
    }
;

export default LoginPage;