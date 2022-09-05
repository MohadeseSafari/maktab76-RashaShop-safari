import CardList from "common/CardList";
import { useEffect } from "react";
import { Container, Grid } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "redux/feature/products/ProductsSlice";


function CategoriesGroup() {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  const allProducts = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [])

  return (
    !loading && categories.slice(0, 4).map((category) => {
      console.log(category)
      return (
        <Container sx={{ ml: 20, mb: 5 }}>
          <CardList key={category.id} nameId={category.engName} title={category.name} data={allProducts.filter(product => +product.category === category.id).slice(0, 8)} />
        </Container>
      );

    }))


}
export default CategoriesGroup;


