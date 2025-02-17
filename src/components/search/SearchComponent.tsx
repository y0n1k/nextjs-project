import React from 'react';

const SearchComponent = () => {
    return (
        <div>
            <form action="/search">
                <input type="text" name={'name'}/>
                <button>Пошук</button>
            </form>
        </div>
    );
};

export default SearchComponent;