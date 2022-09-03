import { useEffect, useState } from "react";
import { loadProductsCategoriesApi } from "api";
import CardList from "common/CardList";
import axios from "api/http";
import { useSelector } from "react-redux";

function CategoriesGroup() {
  const state = useSelector((state) => state);
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState([]);
  const cats = [];
  useEffect(() => {
    try {
      axios.get("/category").then((response) => setCategories(response.data));
    } catch (error) {
      return Promise.reject(error);
    }
  }, []);
  useEffect(() => {
    categories?.map(({ id }) => {
      loadProductsCategoriesApi(id).then((productsCategory) => {
        cats.push(productsCategory);
      });
    });
  }, [categories]);

  return (
    <>
      <CardList data={cats}>{item}</CardList>
    </>
  );
}

export default CategoriesGroup;
