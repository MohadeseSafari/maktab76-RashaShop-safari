import { useState } from 'react';
import CKeditorForm from 'common/CKeditorForm';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Box, IconButton, Grid, TextField, Typography, InputLabel } from '@mui/material';
import { Backdrop, DeliveryButton, editModalStyle, Modal } from 'components/management/checkProducts/style';


function EditModal({ open, handleClose, product }) {

    const { name, image, publication, author, translator, genre, price, pages, quantity, off, description } = product

    const [editProduct, setEditProduct] = useState({
        name: name,
        publication: publication,
        image: image,
        author: author,
        translator: translator,
        genre: genre,
        price: price,
        pages: pages,
        quantity: quantity,
        description: description
    });



    const handleChange = (event) => {
    
    };


    return (
        <Modal open={open} onClose={handleClose} components={{ Backdrop }}>

            <Box sx={editModalStyle}>
                <Typography variant='h5'>ویرایش کالا</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12}>
                        {/* <IconButton color="primary" aria-label="upload picture" component="label"> */}     {/* <PhotoCamera />
                        </IconButton> */}
                        <input type="file"  onClick={()=> console.log("dffdf")} />

                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="نام کالا" size="small" name='name' value={editProduct.name} onChange={handleChange}  />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="نویسنده" size="small" name='author' value={editProduct.author} defaultValue={author} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="مترجم" size="small" name='translator' value={editProduct.translator} defaultValue={translator} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="ناشر" size="small" name='publication' value={editProduct.publication} defaultValue={publication} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="ژانر" size="small" name='genre' value={editProduct.genre} defaultValue={genre} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="تعداد صفحات" size="small" name='pages' value={editProduct.pages} defaultValue={pages} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="قیمت" size="small" name='price' value={editProduct.price} defaultValue={price} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField fullWidth label="تعداد کالا" type='number' value={editProduct.name} size="small" defaultValue={quantity} />
                    </Grid>

                    <Grid item xs={12}>
                        <CKeditorForm description={description} />
                    </Grid>

                </Grid>

                <DeliveryButton sx={{ mt: 2 }}>ذخیره</DeliveryButton>
            </Box>
        </Modal >

    );
}

export default EditModal;