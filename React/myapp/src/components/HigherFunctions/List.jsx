import React from 'react'

const List = () => {
    let mylist = ["Home", "About", "Contact", "Service", "Pages", "Blog"]
    return (
        <>
            <ol>
                {
                    mylist.map((menu,i) =>
                        <li key={i}>
                            <a href="">{menu}</a>
                        </li>
                    )
                }
            </ol>
        </>
    )
}

export default List
