// components/ProductCard.js
export default function ProductCard({ product }) {
    return (
        <article className="product-card" aria-labelledby={`title-${product.id}`}>
            <div className="product-image">
                <img
                    src={product.image}
                    alt={`${product.title} product image`}
                    width={300}
                    height={300}
                    loading="lazy"
                />
            </div>

            <h4 id={`title-${product.id}`}>{product.title.length > 30 ? product.title.slice(0, 24) + "..." : product.title}</h4>
            <div className="product-subtitle">
               <p className="account"><span className="sign-in">Sign in </span>or Create an account to see pricing</p>
                <i class="ri-heart-3-line "></i>
            </div>
            
        </article>
    );
}



