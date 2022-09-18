import { Box, Paper, Typography } from '@mui/material';
import MainPicture from 'assets/image/logo/revslider_bg.jpg';

function MainImage() {
    return (
        <Box sx={{ height: '100vh', mt: 8, backgroundImage: `url(${MainPicture})`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{ backgroundColor: '#FCEDEC', width: '100vw', height: '80vh', borderRadius: "20px" }}>
              
            </Paper>
        </Box>

    )
}

export default MainImage;