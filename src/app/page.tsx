'use client'

import MenuComponent from "@/components/menu/MenuComponent";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {


    return (
        <div>
            <MenuComponent/>
        </div>
    );
}
