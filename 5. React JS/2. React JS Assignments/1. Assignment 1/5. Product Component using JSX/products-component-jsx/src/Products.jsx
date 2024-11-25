const Products = () => {

    return (

        <>

            <ProductDescription />

        </>
    )
}

const ProductDescription = () => {

    const productImage = "./public/images/product.avif";

    const ProductHeading = "Headphones | High Base Clear Sound";

    const productInformation = "The flagship-level battery life for the all new OnePlus Nord Buds 2r delivers up to 38hrs of non-stop music on a single charge.";

    const productPrice = "$12";

    const BuyNow = "Buy Now";

    return (

        <div>

            <img src={productImage} alt="Product Image" width="40%" height="40%" />

            <h2>{ProductHeading}</h2>

            <p>{productInformation}</p>

            <p>{productPrice}</p>

            <button>{BuyNow}</button>

        </div>
    )
}

export default Products;