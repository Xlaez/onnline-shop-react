//eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Index'
import SingleProduct from '../../components/product/Index';
import Sidebar from '../../components/sidebar/Index'
import '../home/style.css';

export default function Product() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <SingleProduct />
        </div>
    )
}
