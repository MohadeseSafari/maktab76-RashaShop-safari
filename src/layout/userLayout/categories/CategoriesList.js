import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/feature/category/CategorySlice'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontSize: 20,
        fontWeight: 900,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});


function CategoriesList() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div role="presentation" style={{ marginTop: 20 }}>
            <Breadcrumbs >
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    {categories.map((category) => {
                        const { id, name, icon } = category
                        return (
                            <StyledBreadcrumb key={id} label={name} sx={{ mt: 10, mb:20 }} />
                        )
                    })}
                </ul>
            </Breadcrumbs>
        </div>
    );
}

export default CategoriesList;