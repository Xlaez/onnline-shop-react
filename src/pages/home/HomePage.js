//eslint-disable-next-line
import React, { useState, useEffect, Fragment } from 'react'
import Navbar from '../../components/navbar/Index';
import Sidebar from '../../components/sidebar/Index';
import Hero from '../../components/hero/Index';
import Showcase from '../../components/showcase/Index'
import './style.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/showcase/Header';
import CenterButton from '../../components/centerButton/Button';
import HomeInter from '../../components/homeInter/Index';
import Intermediate from '../../components/intermediate/Index';
import { api } from '../../utils/Api';
import Loader from '../../utils/Loader';

//All the commented code down are under test, do not delete

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [exclusiveProducts, setExclusiveProducts] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  async function getLatestProducts() {
    const req = await fetch(`${api}/prod/latest`);
    const res = await req.json();
    setProducts(res.data);
  }

  async function getExclusiveProducts() {
    const req = await fetch(`${api}/prod/exclusive`);
    const res = await req.json();
    setExclusiveProducts(res.data);
  }

  useEffect(() => {

    getLatestProducts();
  }, []);

  useEffect(() => {
    getExclusiveProducts();
  }, [products]);


  return (
    <div >

      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Header />
      {
        products.length > 0 ? (
          <Showcase products={products} />
        ) : (
          <Loader />
        )
      }
      <CenterButton />
      <HomeInter />
      {
        exclusiveProducts.length > 0 ? (
          <Intermediate exclusiveProducts={exclusiveProducts} />
        ) : (
          <Loader />
        )
      }
      <Footer />
    </div>
  )
}
