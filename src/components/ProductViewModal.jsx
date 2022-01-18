import productData from "../assets/fake-data/products";
import Button from "./Button";
import ProductView from "./ProductView";

const ProductViewModal = () => {
  const product = productData.getProductBySlug("jeans-phong-cach-18");

  return (
    <div
      className={`product-view__modal  ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
