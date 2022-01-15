

function Product(props) {
    const product = props.product
    return (<>
        <img src={product.image} />
        <h3>{product.title}</h3></>
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