import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li><Link href="">Головна</Link></li>
                <li><Link href="/users?skip=0">Користувачі</Link></li>
                <li><Link href="/recipes?skip=0">Рецепти</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;