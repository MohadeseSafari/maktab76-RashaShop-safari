import { Box, Paper } from '@mui/material';
import { ContainerImage, PaperClient } from 'common/client/style';
import CarouselClient from 'common/CarouselClient';

function ClientCard() {
    return (
        <Box style={ContainerImage}>
            <Paper elevation={0} style={PaperClient}>
                <CarouselClient />
            </Paper>
        </Box>

    )
}

export default ClientCard;