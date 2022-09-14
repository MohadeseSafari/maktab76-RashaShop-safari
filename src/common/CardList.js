import { Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import Card from 'common/Card';


function CardList({ engNameCategory, title, data }) {

    return (
        <>
            <Link to={`/category/${engNameCategory}`} style={{ color: "GrayText" }}>
                <Typography variant="h4" >{title}</Typography>
            </Link>
            <Grid container spacing={2} rowSpacing={4} sx={{ mt: 1 }}>
                {data.map((product) => {
                    return (<Card product={product} categoryName={engNameCategory} />)
                })}
            </Grid>
        </>

    );
}

export default CardList;