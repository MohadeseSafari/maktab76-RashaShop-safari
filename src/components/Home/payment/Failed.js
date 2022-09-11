import { Container, Typography, Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from 'react';

function failed() {
    
    return (
        <Container sx={{ mt: 10 }}>
            <Typography variant="h5">نتیجه پرداخت</Typography>
            <Box sx={{ display: 'flex' }}>
                <HighlightOffIcon sx={{ fontSize: 40, color: "#c0392b" , mx:2 }} />
                <Typography variant="h5"> پرداخت موفقیت آمیز نبود،سفارش شما در انتظار پرداخت است.</Typography>
            </Box>
        </Container>
    );
}

export default failed;