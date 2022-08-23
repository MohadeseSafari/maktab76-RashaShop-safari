import CssBaseline from '@mui/material/CssBaseline';
//import Main Routes of project
import MainRoutes from 'routes/index';
// import common styles and theme
import 'styles/style.css';
import { ThemeProvider } from '@mui/system';
import { theme } from 'common/theme';
//import store redux
import { Provider } from 'react-redux';
import { store } from 'redux/store'


function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
