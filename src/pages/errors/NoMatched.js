import Alert from '@mui/material/Alert';
function NoMatched() {
    return (
        <Alert severity="error" sx={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>صفحه یافت نشد</Alert>
    );
}

export default NoMatched;