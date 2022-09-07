import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@mui/material/CssBaseline';
//import Main Routes of project
import MainRoutes from 'routes/index';
// import common styles and theme
import 'styles/style.css';
import { ThemeProvider } from '@mui/system';
import { theme } from 'common/theme';
//import store redux
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import { cacheRtl } from 'common/RTL';
import { store } from 'redux/store'
import { injectStore } from "./api/http";
import { getTotals } from 'redux/feature/cart/CartSlice';
injectStore(store);
store.dispatch(getTotals)

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <MainRoutes />
        </ThemeProvider>
      </Provider>
    </CacheProvider>

  );
}

export default App;
