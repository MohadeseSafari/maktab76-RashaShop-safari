import { useState } from 'react';
import CKeditorForm from 'common/CKeditorForm';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Box, IconButton, Grid, TextField, Typography, InputLabel } from '@mui/material';
import { Backdrop, DeliveryButton, editModalStyle, Modal } from 'components/management/checkProducts/style';

const CreateModal = ({ openCreate, handelCloseCreate }) => {
    const [createProduct, setCreateProduct] = useState({
        name: "",
        publication: "",
        image: [],
        author: "",
        translator: "",
        genre: [],
        price: 0,
        pages: 0,
        quantity: 0,
        description: ""
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        console.log(name)
        setCreateProduct({ [name]: value })

    };


    return (
        <Modal open={openCreate} onClose={handelCloseCreate} components={{ Backdrop }}>

            <Box sx={editModalStyle}>
                <Typography variant='h5'>افزودن کالا</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12}>


                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="نام کالا" size="small" name='name' value={createProduct.name} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="نویسنده" size="small" name='author' value={createProduct.author} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="مترجم" size="small" name='translator' value={createProduct.translator} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="ناشر" size="small" name='publication' value={createProduct.publication} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="ژانر" size="small" name='genre' value={createProduct.genre} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="تعداد صفحات" size="small" name='pages' value={createProduct.pages} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="قیمت" size="small" name='price' value={createProduct.price} defaultValue='' onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="تعداد کالا" type='number' name='quantity' value={createProduct.name} size="small" onChange={handleChange} />
                    </Grid>

                    <Grid item xs={12}>
                        <CKeditorForm description={createProduct.description} />
                    </Grid>

                </Grid>

                <DeliveryButton sx={{ mt: 2 }}>ذخیره</DeliveryButton>
            </Box>
        </Modal >

    );
}

export default CreateModal;