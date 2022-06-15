import React, { useState } from 'react'
import Contact from '../../components/contact/Index'
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/Index';
import Navbar from '../../components/navbar/Index';
import Sidebar from '../../components/sidebar/Index';

export default function ContactPage() {
    const [ isOpen, setIsOpen ] = useState( false );

    const toggle = () => {
        setIsOpen( !isOpen );
    };
    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <Contact />
            <Footer />
        </div>
    )
}
