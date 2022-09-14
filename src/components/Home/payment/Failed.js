import { Container, Typography, Box } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FailedPayment from 'assets/image/background/failed-payment.jpg';

function failed() {
    
    return (
        <Container sx={{ mt: 10, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5">نتیجه پرداخت</Typography>
            <Box sx={{ display: 'flex' }}>
                <HighlightOffIcon sx={{ fontSize: 40, color: "#c0392b" , mx:2 }} />
                <Typography variant="h5"> پرداخت موفقیت آمیز نبود،سفارش شما در انتظار پرداخت است.</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width="400px" src={FailedPayment} alt="failed payment" />
            </Box>
        </Container>
    );
}

export default failed;