import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import Success from 'components/Home/payment/Success';
import Failed from 'components/Home/payment/Failed';

function Payment() {
    const urlParams = window.location.href.split("/");
    const result = urlParams[urlParams.length - 1];
    return (
        <>
            <NavbarLayout />
            {result === "success" ? <Success /> : <Failed />}


        </>
    );
}

export default Payment;