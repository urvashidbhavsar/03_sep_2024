import React, { useState } from 'react'

const ProductDis = () => {
    const [input, setInput] = useState({
        oldprice: "",
        rate: "",
        newprice: "",
    })

    const handleChange = (e) => {
        let allfield = { ...input, [e.target.name]: e.target.value }

        if (e.target.name == "oldprice" || e.target.name == "rate") {
            let price = Number.parseFloat(allfield.oldprice)
            let rate = Number.parseFloat(allfield.rate)
            // let discprice = allfield.newprice
            if (rate > 0) {
                allfield.newprice = Math.round(price - (price * rate) / 100)
                console.log(allfield.newprice)
            } else {
                allfield.newprice = ""
            }
        }
        setInput(allfield)
    }

    return (
        <>
            <input type="number" name="oldprice" id="" placeholder='Original Amount' onChange={handleChange} value={input.oldprice} />

            <input type="number" name="rate" id="" placeholder='Discount (%)' onChange={handleChange} value={input.rate} />

            <input type="number" name="newprice" id="" disabled placeholder='New Price' value={input.newprice} />
        </>
    )
}

export default ProductDis
