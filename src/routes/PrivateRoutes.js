import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PrivateRoutes({children}) {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.users)
    return isLoggedIn ? <>{children}</> : navigate('/management')
        
    ;
}

export default PrivateRoutes;