import { Link, useParams } from "react-router-dom"


export default function ProductDetails(props) {
    const params = useParams()
    const products = props.products
    const basketItems = props.basketItems
    const setBasketItems = props.setBasketItems

    const filteredProduct = products.filter(product =>
        product.id === Number(params.id)
    )

    return (
        <main>
            <section className="product-detail main-wrapper">
                <img


                    src={filteredProduct[0].image}

                />
                <div className="product-detail__side" style={{ "border-color": "var(--yellow);" }}>
                    <h3></h3>
                    <h2>{filteredProduct[0].title}</h2>
                    <p>
                        {filteredProduct[0].description}
                    </p>
                    <p>£{filteredProduct[0].price}</p>
                    {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                    <Link to="/basket"> <button onClick={() =>
                        setBasketItems([...basketItems, filteredProduct[0]])}>Add to basket</button></Link>
                </div>
            </section>
        </main>)
}