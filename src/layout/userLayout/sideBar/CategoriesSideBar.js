import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/feature/category/CategorySlice'
import { Box, CssBaseline, Drawer, IconButton, Toolbar, List, ListItemButton, ListItem, ListItemText, Divider, SwipeableDrawer } from '@mui/material';

const CategoriesSideBar = (props) => {
    const dispatch = useDispatch();
    const { open, handelCloseMenu } = props
    const categories = useSelector(state => state.categories.categories);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor="left"
                open={open}
                onClose={handelCloseMenu}
                onOpen={() => { }}
            >
                <List sx={{ width: 250 }}>
                    {categories.map(({ id, name, engName, color }) => (
                        <>
                            <Link to={`/category/${engName}`}>
                                <ListItem key={id} disablePadding>
                                    <ListItemButton sx={{ fontSize: 23 }} >
                                        <ListItemText sx={{ color: { color } }} primary={name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Divider />
                        </>
                    ))}
                </List>

            </SwipeableDrawer>
            {/* // <Box sx={{ display: 'flex' }}>
        //     <CssBaseline />
        //     <Drawer
        //         sx={{
        //             width: 200,
        //             flexShrink: 0,
        //             '& .MuiDrawer-paper': {
        //                 width: 200,
        //                 boxSizing: 'border-box',
        //             },
        //         }}

        //         open={open}
        //         variant="permanent"
        //         anchor="left"
        //     >
        //         <DrawerHeader>
        //             <IconButton onClick={handleDrawerClose}>
        //                 {theme.direction === 'ltr' ? <ChevronLeftIcon color="secondary" /> : <ChevronRightIcon color="secondary" />}
        //             </IconButton>
        //         </DrawerHeader>
        //         <Divider />

        //         <Toolbar />
        //        
        //     </Drawer>
        //     <Box
        //         component="main"
        //         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
        //     >
        //         <Toolbar />

        //     </Box>
        // </Box> */}

        </>
    );
}

export default CategoriesSideBar;







