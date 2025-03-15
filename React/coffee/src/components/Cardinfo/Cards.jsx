import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWineGlass, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'

const Cards = () => {
    let boxdata = [
        {
            iconname: faCoffee,
            text: "Types of Coffee",
        },
        {
            iconname: faWineGlass,
            text: "Bean Varieties",
        },
        {
            iconname: faLeaf,
            text: "Coffee & Pastry",
        },
        {
            iconname: faPagelines,
            text: "Coffee to go",
        }
    ]
    console.log(boxdata)

    return (
        <>
            <section className='bg-body-tertiary '>
                <div className="container py-5">
                    <div className='row'>
                        {
                            boxdata.map((items, i) =>
                                <div className="col-3" key={i}>
                                    <div className='p-4 shadow text-center'>
                                        <FontAwesomeIcon icon={items.iconname} className='fs-3 text-warning' />
                                        <h3 className='py-2'>{items.text}</h3>
                                        <p className='text-secondary fs-6'>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed doloramet laoreet.</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards
