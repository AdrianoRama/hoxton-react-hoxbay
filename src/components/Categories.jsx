import { Link } from "react-router-dom";

const randColour = () =>
    ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

const getCategoryProducts = (products, category) => {
    return products.filter(product => {
        return product.categoryId === category.id
    })
}
function Category(props) {
    const category = props.category
    const categoryProducts = props.categoryProducts
    // console.log(categoryProducts)
    return <Link to={`/categories/${category.id}`} style={{ ["--random-colour"]: `var(--${randColour()})` }}>
        {category.name}
    </Link>
}

function CategoriesList(props) {
    const categories = props.categories
    const products = props.products
    return categories.map(category =>
        <Category className="categories-container"
            categoryProducts={getCategoryProducts(products, category)}
            category={category} />
    )
}
export default function Categories(props) {
    return (
        <Link to='/categories/1'><div className="categories-container__list"  >
            <CategoriesList categories={props.categories} products={props.products} /></div></Link>
    )
}