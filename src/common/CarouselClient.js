import Carousel from 'react-material-ui-carousel';
import Comma from 'assets/image/background/Comma.png';
import { Box, Container, Typography } from '@mui/material';
import { ReviewTitle, SubCaption } from 'common/client/style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsClient } from 'redux/feature/comment/CommentSlice';
import { useEffect } from 'react';

const CarouselClient = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCommentsClient())
    }, [])
    const { commentsClient, loading } = useSelector((state) => state.commentsClient);

    function Item({ commentClient }) {
        const { firstName, lastName, city, icon, comment } = commentClient;
        return (
            <>
                <Typography variant="h6" color="primary.light" style={ReviewTitle}>نظرات خریداران!</Typography>
                <Box sx={{ width: '75%', mt: 7, textAlign: 'center' }}>
                    <Typography variant="h6">"{comment}"</Typography>
                    <Box sx={{ mt: 5, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Comma} alt="Comma" />
                        <Box style={SubCaption}>
                            <Typography variant="subtitle1">{city}/{lastName}{firstName}</Typography>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    }

    return (
        <Carousel>
            {commentsClient.map((commentClient, index) => {  
                return (
                    <Item commentClient={commentClient} key={index} />
                )
            })}
        </Carousel>
    )
}

export default CarouselClient;