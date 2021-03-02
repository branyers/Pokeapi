import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

const [search, setSearch] = useState('')


    const onChanges = (evt) => {
        setSearch(evt.target.value);
        if (evt.target.value.length === 0) {
            onSearch(null);
        }
    }

    const onClick = async () => {
        onSearch(search);
    }

    return (
        <div className="searchbar-container">

            <div className="searchbar">
                <input type="text"
                    placeholder="Busca un Pokemon"
                    onChange={onChanges}

                />
            </div>


            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar
