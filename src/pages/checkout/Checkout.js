import React, { useState } from 'react'
import CheckoutPage from '../../components/checkout/Index';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Index'
import Sidebar from '../../components/sidebar/Index';
import '../home/style.css'

export default function Checkout() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <CheckoutPage />
            <Footer />
        </div>
    )
}
