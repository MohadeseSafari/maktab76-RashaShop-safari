import PageCard from 'common/PageCard';
import { loadSingleProductsApi } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarLayout from "layout/userLayout/navbar/NavbarLayout";

function SingleProduct() {
    const { idProduct } = useParams();
    const [product, setProduct] = useState({});
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        loadSingleProductsApi(+idProduct).then((result) => {
            setProduct(result);
            setFlag(true);
        })
    }, [])

    return (
        <>
            <NavbarLayout />
            {flag && <PageCard data={product} />}
        </>
    );
}

export default SingleProduct;