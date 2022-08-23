import NavbarLoginButton from 'layout/managementLayout/login/style';
import { useNavigate } from "react-router-dom";
import LightTooltip from 'common/Tooltip';

function LoginNavbar() {
    let navigate = useNavigate();
    return (
        <LightTooltip title="بازگشت">
        <NavbarLoginButton variant="contained" onClick={()=> navigate(-1)} >
            بازگشت به خانه
        </NavbarLoginButton>
        </LightTooltip >
    );
}
export default LoginNavbar;