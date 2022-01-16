import { useParams } from "react-router-dom"
import Products from "./Products"



export default function CategoryProducts(props) {
    const params = useParams()
    const products = props.products

    const categoryProducts = products.filter(product =>
        product.categoryId === Number(params.id)
    )

    return <Products products={categoryProducts} />
}