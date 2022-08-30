import { useRef, useState } from "react";
import { Box, Button, TextField } from '@mui/material';

const InputPhoto = ({ label, onChange, error }) => {
    const ref = useRef();
    const [attachment, setAttachment] = useState(null);

    const handleChange = (event) => {
        const files = Array.from(event.target.files);
        const [file] = files;
        setAttachment(file);
        if (!!onChange) onChange({ target: { value: file } });
    };

    return (
        <Box
            position="relative"
            height={98}
            color={error}
            borderBottom={4}
        >
            <Box position="absolute" top={0} bottom={0} left={0} right={0} mx={2}>
                <TextField
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    margin="normal"
                    fullWidth
                    disabled
                    label={label}
                    value={attachment?.name || ""}
                    error={!!error}
                    helperText={error?.message || " "}
                />
            </Box>
            <Button
                component="label"
                variant="outlined"
                onKeyDown={(e) => e.keyCode === 32 && ref.current?.click()}
            >
                <input
                    ref={ref}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleChange}
                />
            </Button>
        </Box>
    );
};



export default InputPhoto;


