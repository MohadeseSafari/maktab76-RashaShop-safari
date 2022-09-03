import { useEffect, useState } from 'react';
import { loadProductsCategoriesApi } from 'api';
import CardList from 'common/CardList'
import axios from "api/http";

function CategoriesGroup() {
    const [categories, setCategories] = useState([])
    const [item, setItem] = useState([])
    useEffect(() => {
        try {
            axios.get("/category").then((response) => setCategories(response.data))
        } catch (error) {
            return Promise.reject(error);
        }

    }, [])

    return (
        <>
            {categories.map(({ id }) => { loadProductsCategoriesApi(id).then((productsCategory) => { setItem(productsCategory) }) })}
            <CardList >{item}</CardList>
        </>
    );
}

export default CategoriesGroup;