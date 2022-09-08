import React from 'react';
import NavbarLayout from 'layout/userLayout/navbar/NavbarLayout';
import Success from 'components/Home/payment/Success';
import Failed from 'components/Home/payment/Failed';

function Payment() {
    return (
        <>
            <NavbarLayout />
            <Success />
            <Failed />
        </>
    );
}

export default Payment;