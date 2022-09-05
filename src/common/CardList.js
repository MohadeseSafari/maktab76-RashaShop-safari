import {  Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import Card from 'common/Card';


function CardList({ nameId, title, data }) {
    return (
        <>
            <Link to={`/category/${nameId}`} style={{ color: "GrayText",mt:5 }}><Typography variant="h4">{title}</Typography></Link>
            <Grid container spacing={2}>
                {data.map((product) => {
                    return (<Card product={product} />)
                })}
            </Grid>
        </>

    );
}

export default CardList;