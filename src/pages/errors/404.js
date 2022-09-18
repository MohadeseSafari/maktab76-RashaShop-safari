import Error from 'assets/image/background/404Error.gif';
import { Container, Typography } from '@mui/material';

function NoMatched() {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h3">404 Error</Typography>
            <Typography variant="h3">صفحه یافت نشد</Typography>
            <img src={Error} alt="404 error" />
        </Container>
    );
}

export default NoMatched;