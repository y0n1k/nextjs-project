'use client'

import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const skip = parseInt(searchParams.get('skip') ?? '0', 10);

    const handleNext = () => {
        setSearchParams({ skip: skip + 30 });
    };

    const handlePrev = () => {
        setSearchParams({ skip: Math.max(0, skip - 30) });
    };

    return (
        <div>
            <button onClick={handlePrev} disabled={skip === 0}>Назад</button>
            <button onClick={handleNext} >Вперед</button>
        </div>
    );
};

export default PaginationComponent;