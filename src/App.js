import CssBaseline from '@mui/material/CssBaseline';
import MainRoutes from 'routes/index';
import 'styles/style.css';
import { ThemeProvider } from '@mui/system';
import { theme } from 'common/theme';


function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </>

  );
}

export default App;
