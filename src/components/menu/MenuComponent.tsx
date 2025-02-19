'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import {IUser} from "@/models/user/IUser";

const MenuComponent = () => {

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {user ? (
                    <>
                        <li><Link href="/">Головна</Link></li>
                        <li><Link href="/users?skip=0">Користувачі</Link></li>
                        <li><Link href="/recipes?skip=0">Рецепти</Link></li>
                        <li>
                            <div><h3>{user.username}</h3>
                                <img
                                    src={user.image}
                                    alt="Profile"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </li>
                    </>
                ) : (
                    <li><Link href="/login">Увійти в акаунт</Link></li>
                )}
            </ul>
        </div>
    );
};

export default MenuComponent;