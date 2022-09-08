import { Container, Typography } from '@mui/material';
function success() {
    return (
        <Container sx={{ mt: 10 }}>
            <Typography variant="h4">نتیجه پرداخت</Typography>
            <Typography variant="h5"> با تشکر از پرداخت شما،سفارش شما ثبت شدهو جهت هماهنگی ارسال با شما تماس گرفته خواهد شد.</Typography>
        </Container>
    );
}

export default success;