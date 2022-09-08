import { Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

function failed() {
    return (
        <Container>
            <Typography variant="h5">نتیجه پرداخت</Typography>
            <Button endIcon={<CheckCircleOutlineIcon />}></Button>
            <Typography variant="h5"> پرداخت موفقیت آمیز نبود،سفارش شما در انتظار پرداخت است.</Typography>
        </Container>
    );
}

export default failed;