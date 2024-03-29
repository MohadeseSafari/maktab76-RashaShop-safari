import * as Yup from "yup";
import { uploadImageApi } from "api";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { createProduct } from "redux/feature/products/ProductsSlice";
import { fetchCategories } from "redux/feature/category/CategorySlice";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  Stack,
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import {
  Backdrop,
  DeliveryButton,
  editModalStyle,
  Modal,
} from "components/management/checkProducts/style";

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

const Input = styled("input")({
  display: "block",
  position: "absolute",
  textAlign: "right",
  opacity: "0",
  width: "50px",
  padding: "5px",
});

const initialValues = {
  name: "",
  publication: "",
  image: [],
  author: "",
  translator: "",
  genre: [],
  price: "",
  pages: "",
  off: 0,
  quantity: 0,
  description: "",
  category: ""
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("این فیلد نمیتواند خالی باشد!"),
  publication: Yup.string().required("این فیلد نمیتواند خالی باشد!"),
  author: Yup.string().required("این فیلد نمیتواند خالی باشد!"),
  translator: Yup.string().required("این فیلد نمیتواند خالی باشد!"),
  price: Yup.string().required("این فیلد نمیتواند خالی باشد!"),
  pages: Yup.number().required("این فیلد نمیتواند خالی باشد!"),
  off: Yup.number().required("این فیلد نمیتواند خالی باشد!"),
  quantity: Yup.number().required("این فیلد نمیتواند خالی باشد!"),

});

const CreateModal = ({ openCreate, handelCloseCreate }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [previewSrc, setPreviewSrc] = useState([]);
  const [dataInput, setDataInput] = useState(null);
  const [genreName, setGenreName] = useState([]);
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])


  const handleChangeGenre = (event, props) => {
    const { value } = event.target;
    setGenreName(typeof value === "string" ? value.split(",") : value);

    props.setFieldValue("genre", value);

    switch (genreName[0]) {
      case "فانتزی":
        props.setFieldValue("category", "Fantasy");
        break;

      case "فلسفی":
        props.setFieldValue("category", "Philosophical");
        break;

      case "آموزشی":
        props.setFieldValue("category", "Academic");
        break;

      case "درام":
        props.setFieldValue("category", "Drama");
        break;

      case "داستانی":
        props.setFieldValue("category", "Fiction");
        break;

      case "اکشن":
        props.setFieldValue("category", "Action");
        break;

      case "کمیک":
        props.setFieldValue("category", "Comic");
        break;

      case "عاشقانه":
        props.setFieldValue("category", "Romance");
        break;

      case "وحشت":
        props.setFieldValue("category", "Horror");
        break;

      case "تاریخی":
        props.setFieldValue("category", "Historical");
        break;

      case "علمی تخیلی":
        props.setFieldValue("category", "ScienceFiction");
        break;

      case "جنایی":
        props.setFieldValue("category", "Crime");
        break;

      case "معمایی":
        props.setFieldValue("category", "Mystery");
        break;

      case "کمدی":
        props.setFieldValue("category", "Comedy");
        break;
    }

  };

  const handleChangeImage = (e, props) => {
    setDataInput(e.target.files[0]);
    setPreviewSrc(URL.createObjectURL(e.target.files[0]));
  };

  const handelUpload = async (event, props) => {
    const image = new FormData();
    image.append("image", dataInput, dataInput.name);

    uploadImageApi(image).then((res) => props.setFieldValue("image", [res]));
  };

  const handelSubmit = (values, props) => {
    dispatch(createProduct(values));
    props.resetForm();
    setGenreName([]);
    setPreviewSrc(null);
    handelCloseCreate();

  };

  return (
    <Modal
      open={openCreate}
      onClose={handelCloseCreate}
      components={{ Backdrop }}
    >
      <Box sx={editModalStyle}>
        <Typography variant="h5">افزودن کالا</Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handelSubmit}
        >
          {(props) => (
            <Form autoComplete="false">
                {console.log(props)}
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ display: "flex", justifyContent: "center" }}
                    spacing={2}
                  >
                    <img src={previewSrc} width="30" />

                    <label htmlFor="contained-button-file">
                      <Button>
                        <Input
                          type="file"
                          id="fileInput"
                          multiple
                          onChange={(e) => handleChangeImage(e, props)}
                        />
                        <AddAPhotoIcon sx={{ fontSize: 25 }} />
                      </Button>
                      <span>: انتخاب عکس</span>
                      <Button onClick={(event) => handelUpload(event, props)}>
                        آپلود عکس
                      </Button>
                    </label>
                  </Stack>
                  {previewSrc.length === 0 ? (<FormHelperText sx={{ color: "#d63031", textAlign: "left", mr: 2, fontSize: 18 }}>لطفا یک عکس آپلود کنید</FormHelperText>) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="نام کالا"
                    size="small"
                    name="name"
                    value={props.values.name}
                    onChange={props.handleChange}
                  />
                  {props.errors.name ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.name}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="نویسنده"
                    size="small"
                    name="author"
                    value={props.values.author}
                    onChange={props.handleChange}
                  />
                  {props.errors.author ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.author}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="مترجم"
                    size="small"
                    name="translator"
                    value={props.values.translator}
                    onChange={props.handleChange}
                  />
                  {props.errors.translator ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.translator}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="ناشر"
                    size="small"
                    name="publication"
                    value={props.values.publication}
                    onChange={props.handleChange}
                  />
                  {props.errors.publication ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.publication}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="تعداد صفحات"
                    size="small"
                    name="pages"
                    value={props.values.pages}
                    onChange={props.handleChange}
                  />
                  {props.errors.pages ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.pages}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={12}>
                  <FormControl sx={{ width: "100%", height: "45px" }}>
                    <InputLabel sx={{ mb: 1 }}>ژانر</InputLabel>
                    <Select
                      sx={{ height: "45px" }}
                      multiple
                      value={genreName}
                      onChange={(event) => handleChangeGenre(event, props)}
                      input={<OutlinedInput label="Chip" />}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
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
                          style={getStyles(name, genreName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {genreName.length === 0 ? (<FormHelperText sx={{ color: "#d63031", textAlign: "left", mr: 2, fontSize: 18 }}>لطفا یک ژانرو انتخاب کنید</FormHelperText>) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="قیمت"
                    size="small"
                    name="price"
                    value={props.values.price}
                    onChange={props.handleChange}
                  />
                  {props.errors.price ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.price}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="تعداد کالا"
                    type="number"
                    name="quantity"
                    value={props.values.quantity}
                    size="small"
                    onChange={props.handleChange}
                  />
                  {props.errors.quantity ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.quantity}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="تخفیف"
                    type="number"
                    name="off"
                    value={props.values.off}
                    size="small"
                    onChange={props.handleChange}
                  />
                  {props.errors.off ? (
                    <FormHelperText
                      sx={{
                        color: "#d63031",
                        textAlign: "left",
                        mr: 2,
                        fontSize: 18,
                      }}
                    >
                      {props.errors.off}
                    </FormHelperText>
                  ) : null}
                </Grid>

                <Grid item xs={12}>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) =>
                      props.setFieldValue("description", editor.getData())
                    }
                  />
                </Grid>


              </Grid>
              <DeliveryButton type="submit" sx={{ mt: 2, ml: 35 }} disabled={!props.isValid}>
                ذخیره
              </DeliveryButton>
            
            </Form> 
          )}  
        </Formik>
      </Box>
    </Modal>
  );
};

export default CreateModal;