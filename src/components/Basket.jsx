import { useEffect } from "react"
import { useState } from "react/cjs/react.development"


export default function BasketItems(props) {
    const basketItems = props.basketItems

    const [basketTotal, setBasketTotal] = useState(basketItems[0].price)

    console.log(basketTotal)

    const updatedBasketItems = basketItems.map(item => <BasketItem basketTotal={basketTotal} setBasketTotal={setBasketTotal} item={item} />)

    return (
        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    {updatedBasketItems}
                </ul>
                <h3>Your total: £{basketTotal}</h3>
            </section>
        </main>

    )
}

function BasketItem(props) {
    const item = props.item
    const basketTotal = props.basketTotal
    const setBasketTotal = props.setBasketTotal

    console.log(basketTotal)

    const [itemTotal, setItemTotal] = useState(item.price)
    const [qty, setQty] = useState(0)

    function calculateTotal(selectValue) {
        setItemTotal(selectValue * item.price)
    }

    function getTotal() {
        setBasketTotal(basketTotal + itemTotal)
    }

    return (
        <>
            < li >
                <article className="basket-container__item">
                    <img
                        src={item.image}
                        width="90"
                    />
                    <p>{item.title}</p>
                    <p>
                        Qty:
                        <select onChange={(e) => {
                            setQty(e.target.value)
                            calculateTotal(e.target.value)
                            getTotal()
                        }
                        }><option value="0">0</option
                        ><option selected value="1">1</option
                        ><option value="2">2</option
                        ><option value="3">3</option></select
                        >
                    </p>
                    <p>Item total: £{itemTotal}</p>
                </article>
            </li >

        </>
    )
}