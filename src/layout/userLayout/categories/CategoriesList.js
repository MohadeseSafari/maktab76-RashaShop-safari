import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/feature/category/CategorySlice'
import { Box, CssBaseline, Drawer, Toolbar, List, ListItemButton, ListItem, ListItemText, Typography, Divider } from '@mui/material';

function CategoriesList() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{

                    width: 200,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                <Toolbar />
                <List>
                    {categories.map(({ id, name, color }) => (
                        <>
                            <ListItem key={id} disablePadding>
                                <ListItemButton sx={{fontSize: 23}} >
                                    <ListItemText sx={{ color: { color } }} primary={name} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
            >
                <Toolbar />

            </Box>
        </Box>
    );
}

export default CategoriesList;







