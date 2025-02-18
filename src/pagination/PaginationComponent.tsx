'use client'

import {useRouter, useSearchParams} from "next/navigation";


const PaginationComponent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const addPageParameter = () => {
        const currentPage = parseInt(searchParams.get("skip") || "0", 10);
        const newPage = currentPage + 30;

        const params = new URLSearchParams(searchParams);
        params.set("skip", newPage.toString());

        router.push(`?${params.toString()}`);
    };

    const decreasePageParameter = () => {
        const currentPage = parseInt(searchParams.get("skip") || "0", 10);
        const newPage = Math.max(currentPage - 30, 0);

        const params = new URLSearchParams(searchParams);
        params.set("skip", newPage.toString());

        router.push(`?${params.toString()}`);
    };

    return (
        <div>
            <button onClick={decreasePageParameter}>Назад</button>
            <button onClick={addPageParameter}>Вперед</button>
        </div>
    );
};

export default PaginationComponent;