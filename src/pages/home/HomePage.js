//eslint-disable-next-line
import React, { useState, useEffect, Fragment } from 'react'
import Navbar from '../../components/navbar/Index';
import Sidebar from '../../components/sidebar/Index';
import Hero from '../../components/hero/Index';
// import Category from '../../components/category/Index';
import Showcase from '../../components/showcase/Index'
import './style.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/showcase/Header';
import CenterButton from '../../components/centerButton/Button';
import HomeInter from '../../components/homeInter/Index';
import Intermediate from '../../components/intermediate/Index';
import { WrappingDash } from '../dashboard/Style';
import DashSidebar from '../../components/dashboardSidebar/Index';
import DashboardBody from '../../components/dashboardBody/Index';
import { api } from '../../utils/Api';

export default function HomePage() {

  let [ mode, setMode ] = useState( "home" );
  const [ isOpen, setIsOpen ] = useState( false );
  let [ state, setCurrentState ] = useState( false );
  const [ innerBodyMode, setInnerBodyMode ] = useState( null );
  const [ products, setProducts ] = useState( [] );
  const [ exclusiveProducts, setExclusiveProducts ] = useState( [] );

  const setState = () => {
    setCurrentState( !state );
  };

  const toggle = () => {
    setIsOpen( !isOpen );
  };

  async function getLatestProducts() {
    const req = await fetch( `${api}/prod/latest` );
    const res = await req.json();
    setProducts( res.data );
  }

  async function getExclusiveProducts() {
    const req = await fetch( `${api}/prod/exclusive` );
    const res = await req.json();
    setExclusiveProducts( res.data );
  }

  useEffect( () => {

    getLatestProducts();
  }, [] );

  useEffect( () => {
    getExclusiveProducts();
  }, [ products ] );

  return (
    <div>
      {
        products.length > 0 && (
          <Fragment>
            {
              mode === "home" && (
                <Fragment>
                  <Navbar toggle={toggle} />
                  <Sidebar isOpen={isOpen} toggle={toggle} setMode={setMode} />

                  <Hero />
                  <Header />
                  <Showcase products={products} />
                  <CenterButton />
                  <HomeInter />
                  <Intermediate exclusiveProducts={exclusiveProducts} />
                  <Footer />
                </Fragment>
              )
            }
            <Fragment>
              {
                mode === null && (
                  <WrappingDash >
                    {
                      !state ? (
                        <DashSidebar setInnerBodyMode={setInnerBodyMode} innerBodyMode={innerBodyMode} />
                      ) : ""
                    }
                    <DashboardBody setMode={setMode} setState={setState} state={state} innerBodyMode={innerBodyMode} setInnerBodyMode={setInnerBodyMode} />
                  </WrappingDash>
                )
              }
            </Fragment>
          </Fragment>
        )
      }
    </div>
  )
}
