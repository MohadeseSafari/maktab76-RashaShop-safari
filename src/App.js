import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ManagementPanel from './pages/ManagementPanel';
import NoMatched from './pages/NoMatched';
import './styles/style.css';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='management' element={<ManagementPanel />} />

        <Route path='*' element={<NoMatched/>} />    
      </Routes>
    </ThemeProvider>
  );
}

export default App;
