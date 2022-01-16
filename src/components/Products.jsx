import { Link } from "react-router-dom"


function Product(props) {
    const product = props.product
    return (<>
        <Link to={`/products/${product.id}`}><img src={product.image} />
            <h3>{product.title}</h3></Link></>
    )
}

function ProductsList(props) {
    const products = props.products
    return (
        products.map(product =>
            <div className="product-item"><Product product={product} /></div>
        )
    )
}

export default function Products(props) {
    return <div className='products-container__list'> <ProductsList products={props.products} /></div>
}