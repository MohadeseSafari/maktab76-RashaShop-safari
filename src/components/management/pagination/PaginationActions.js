import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const rowsPerPage = 5;
export default function PaginationActions(props) {
    const theme = useTheme();

    const { products, currentPage,fetchProducts } = props;

    const handleBackButtonClick = () => {
        fetchProducts((currentPage - 1) * 5, currentPage * 5, -1)
    };

    const handleNextButtonClick = () => {
        fetchProducts((currentPage + 1) * 5, (currentPage + 2) * 5, 1)
    };

    if (currentPage === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0, ml: 2.5 }}>

                <IconButton onClick={() => fetchProducts(5, 10, 1)} aria-label="next page" >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>

            </Box>
        )
    } else if (currentPage < rowsPerPage - 1 && products.length === rowsPerPage) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0, ml: 2.5 }}>

                <IconButton onClick={handleNextButtonClick} aria-label="next page">
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>

                <IconButton onClick={handleBackButtonClick} aria-label="previous page" >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>


            </Box>
        )
    } else {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexShrink: 0, ml: 2.5 }}>
                <IconButton onClick={() => fetchProducts(5, 10, -1)} aria-label="previous page" >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>

            </Box>
        )
    }
}

PaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
