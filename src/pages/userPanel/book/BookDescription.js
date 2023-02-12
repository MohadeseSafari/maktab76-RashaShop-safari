import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedProduct } from "redux/feature/products/ProductsSlice";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";

function BookDescription() {
  const { idProduct } = useParams();

  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const { description } = selectedProduct;

  useEffect(() => {
    dispatch(fetchSelectedProduct(idProduct));
  }, [dispatch]);

  return (
    <Paper elevation={0} sx={{ border: "1px solid #ECECEC", borderRadius: "10px" , p:5 }}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Paper>
  );
}

export default BookDescription;
