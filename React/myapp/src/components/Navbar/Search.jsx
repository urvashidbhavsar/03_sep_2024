import React from 'react'

const Search = () => {
    return (
        <>
            <div className="search">
                <input type="text" placeholder='Search Here' />
                <button>
                    <i className='fa-solid fa-search'></i>
                </button>
            </div>
        </>
    )
}

export default Search
