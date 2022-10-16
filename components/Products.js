import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

function Products(props) {
  const { title, price, image, slug } = props.attributes;
  // let bannerImg = image.data.attributes.thumbnail.url;
    let bannerImg = 'https://res.cloudinary.com/devsleqoe/image/upload/v1664005144/medium_93a71132_c8b3_4695_a6e8_1cba2c3d50d7_d708c44298.webp'

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
