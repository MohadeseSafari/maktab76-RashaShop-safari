import {  Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import Card from 'common/Card';


function CardList({ engNameCategory, title, data }) {
  
    return (
        <>
            <Link to={`/category/${engNameCategory}`} style={{ color: "GrayText",mt:5 }}><Typography variant="h4">{title}</Typography></Link>
            <Grid container spacing={2}>
                {data.map((product) => {
                    return (<Card product={product} categoryName={engNameCategory} />)
                })}
            </Grid>
        </>

    );
}

export default CardList;