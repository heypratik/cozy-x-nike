import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

function Products(props) {
  const { title, price, image, slug } = props.attributes;
  let bannerImg = 'https://res.cloudinary.com/devsleqoe/image/upload/v1662886910/medium_ispa_link_shoes_ZN_622v_3cb3a24ec1.jpg'

  return (
    <ProductStyle
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div>
        <Link href={`/products/${slug}`}>
          <img src={bannerImg} alt={title} />
        </Link>
      </div>
      <div>
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
    </ProductStyle>
  );
}

export default Products;
