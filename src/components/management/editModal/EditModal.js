import * as Yup from 'yup';
import { uploadImageApi, deleteImageApi, updateProductApi } from 'api';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { BASE_URL_IMAGE } from 'config/api';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useDispatch, useSelector } from 'react-redux';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { fetchCategories } from 'redux/feature/category/CategorySlice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Box, Button, Chip, Grid, FormHelperText, FormControl, TextField, Typography, InputLabe, Stack, Select, InputLabel, MenuItem, OutlinedInput, IconButton } from '@mui/material';
import { Backdrop, DeliveryButton, editModalStyle, Modal } from 'components/management/checkProducts/style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, genreName, theme) {
    return {
        fontWeight:
            genreName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Input = styled('input')({
    display: 'block',
    position: 'absolute',
    textAlign: "right",
    opacity: '0',
    width: '50px',
    padding: '5px',
});



const SignupSchema = Yup.object().shape({
    name: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    publication: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    genre: Yup.array().required('این فیلد نمیتواند خالی باشد!'),
    author: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    translator: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    price: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    pages: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
    quantity: Yup.number().required('این فیلد نمیتواند خالی باشد!'),
    description: Yup.string().required('این فیلد نمیتواند خالی باشد!'),
})

function EditModal({ openEdit, handleCloseEdit, product }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [dataInput, setDataInput] = useState(null);
    const [genres, setGenre] = useState([]);
    const categories = useSelector(state => state.categories.categories)
    const { id, name, image, publication, author, translator, genre, price, pages, quantity, off, description } = product
    const [previewSrc, setPreviewSrc] = useState([]);

    useEffect(() => {
        if (product.image) {
            setPreviewSrc([...product.image])
        }
    }, [product])

    const handleChangeGenre = (event, props) => {
        const { value } = event.target;
        setGenre(typeof value === 'string' ? value.split(',') : value);
        props.setFieldValue("genre", value);


    };

    const handleChangeImage = (e, props) => {
        setDataInput(e.target.files[0]);
        props.setFieldValue("image", previewSrc);
    }

    const handelUpload = (event, props) => {
        const img = new FormData();
        img.append('image', dataInput, dataInput.name);
        uploadImageApi(img).then((res) => {
            setPreviewSrc([...previewSrc, res]);
        });
    }


    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handelDeleteImage = (img) => {

    }

    console.log(previewSrc)
    const handelSubmit = (values, props) => {
        handleCloseEdit()
        dispatch(updateProductApi(values));
        console.log(props);
        
    }


    return (
        <Modal open={openEdit} onClose={handleCloseEdit} components={{ Backdrop }}>
            <Box sx={editModalStyle}>
                <Typography variant='h5'>ویرایش کالا</Typography>
                <Formik
                    initialValues={{
                        id: id,
                        name: name,
                        publication: publication,
                        image: previewSrc,
                        author: author,
                        translator: translator,
                        genre: genre,
                        price: price,
                        pages: pages,
                        quantity: quantity,
                        description: description
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={handelSubmit}>
                    {(props) => (
                       
                        <Form autoComplete='false' > {console.log("nnv",props.values)}
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <Stack direction="row" alignItems="center" sx={{ display: 'flex', justifyContent: "center" }} spacing={2}>

                                        {previewSrc.map((img, index) => <><IconButton color='error' variant='text'><img key={index} src={`${BASE_URL_IMAGE}/${img}`} width="30" onClick={() => handelDeleteImage(img)} /><RemoveCircleIcon sx={{ fontSize: 18, position: 'absolute', bottom: 50 }} /></IconButton></>)}
                                        <label htmlFor="contained-button-file" >
                                            <Button>
                                                <Input type="file" id="fileInput" multiple  onChange={(e) => handleChangeImage(e, props)} />
                                                <AddAPhotoIcon sx={{ fontSize: 25 }} />
                                            </Button>
                                            <Button onClick={(event) => handelUpload(event, props)}>آپلود عکس</Button>
                                        </label>

                                    </Stack>
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="نام کالا" size="small" name='name' value={props.values.name} onChange={props.handleChange} />
                                    {props.errors.name ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.name}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="نویسنده" size="small" name='author' value={props.values.author} onChange={props.handleChange} />
                                    {props.errors.author ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.author}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="مترجم" size="small" name='translator' value={props.values.translator} onChange={props.handleChange} />
                                    {props.errors.translator ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.translator}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="ناشر" size="small" name='publication' value={props.values.publication} onChange={props.handleChange} />
                                    {props.errors.publication ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.publication}</FormHelperText>) : null}
                                </Grid>


                                <Grid item xs={6}>
                                    <TextField fullWidth label="تعداد صفحات" size="small" name='pages' value={props.values.pages} onChange={props.handleChange} />
                                    {props.errors.pages ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.pages}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl sx={{ width: '100%', height: '50px' }}>
                                        <InputLabel >ژانر</InputLabel>
                                        <Select
                                            sx={{ height: '50px' }}
                                            multiple
                                            value={props.values.genre}
                                            onChange={(event) => handleChangeGenre(event, props)}
                                            input={<OutlinedInput label="Chip" />}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {categories.map(({ id, name }) => (
                                                <MenuItem
                                                    key={id}
                                                    value={name}
                                                    style={getStyles(name, genres, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {props.errors.genre ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.genre}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="قیمت" size="small" name='price' value={props.values.price} onChange={props.handleChange} />
                                    {props.errors.price ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.price}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField fullWidth label="تعداد کالا" type='number' name='quantity' value={props.values.quantity} size="small" onChange={props.handleChange} />
                                    {props.errors.quantity ? (<FormHelperText sx={{ color: '#d63031', textAlign: 'left', mr: 2, fontSize: 18 }} >{props.errors.quantity}</FormHelperText>) : null}
                                </Grid>

                                <Grid item xs={12}>
                                    <CKEditor dir='rtl' editor={ClassicEditor} data={description} onChange={(event, editor) => props.setFieldValue("description", editor.getData())} />
                                </Grid>


                            </Grid>

                            <DeliveryButton type='submit' sx={{ mt: 2, ml: 35 }}>ذخیره</DeliveryButton>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal >

    );
}

export default EditModal;