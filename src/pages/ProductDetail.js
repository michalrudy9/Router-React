import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      {params.productId}
    </>
  );
}

export default ProductDetail;
