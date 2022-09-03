import { useEffect, useState } from "react";
import { loadProductsCategoriesApi } from "api";
import CardList from "common/CardList";
import axios from "api/http";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchCategoriesProducts,
} from "redux/feature/category/CategorySlice";
import Card from "common/Card";

function CategoriesGroup() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const arr = [];
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [item, setItem] = useState([]);
  // const cats = [];
  useEffect(() => {
    dispatch(fetchCategories);
    state?.categories.categories.map((el) => {
      axios.get(`/products?category=${el.id}&_limit=4`).then((el2) => {
        // setProducts(...products, el2.data);
        // arr.push(el2.data);
        setProducts((products) => [
          ...products,
          { name: el.name, data: el2.data },
        ]);
      });
    });
  }, [state]);
  // useEffect(() => {
  //   try {
  //     axios.get("/category").then((response) => setCategories(response.data));
  //     dispatch(fetchCategories);
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // }, [state]);
  // console.log("state is", state);
  // useEffect(() => {
  //   categories?.map(({ id }) => {
  //     loadProductsCategoriesApi(id).then((productsCategory) => {
  //       console.log("productsCategory", productsCategory);
  //       cats.push(productsCategory);
  //     });
  //   });
  // }, [categories]);

  return (
    <>
      {console.log("proucts are", products)}
      {products?.map((el) => {
        console.log("el is", el.name);
        return (
          <>
            <h1 style={{ background: "red" }}>{el.name}</h1>
            <div style={{ display: "flex" }}>
              {el["data"].map((el2) => {
                return <Card>{el2}</Card>;
              })}
            </div>
          </>
        );
        // return el["data"].map((el2) => {
        //   return <Card>{el2}</Card>;
        // });

        // el?.map((el2) => {
        //   return <h1>test</h1>;
        // });
      })}
      {/* <CardList data={cats}>{item}</CardList> */}
      {/* {categories?.map(({ id }) => {
        loadProductsCategoriesApi(id).then((productsCategory) => {
          console.log("productsCategory", productsCategory);

          productsCategory?.map((el, index) => {
            console.log("el is", el, index);
            return <h1>Hjello fucker</h1>;
          });
          // cats.push(productsCategory);
        });
      })} */}
    </>
  );
}

export default CategoriesGroup;
