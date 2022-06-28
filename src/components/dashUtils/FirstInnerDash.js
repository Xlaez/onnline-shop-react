import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonBeautiful, FirstInnerStyle, FirstInnerStyleH1, FirstInnerStyleHeaderBody, SvgCloud, Small1, Small2, AngleRightBtn, ButtonArranger } from './FirstInnerDashStyle'


function FirstInnerDash( { setInnerBodyMode } ) {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    setInnerBodyMode( "add-product" )
  };

  return (
    <FirstInnerStyle>
      <FirstInnerStyleHeaderBody>
        <FirstInnerStyleH1>Dashboard</FirstInnerStyleH1>
        <ButtonArranger>
          <Small1>Dashboard</Small1>
          <AngleRightBtn />
          <Small2 onClick={() => navigate( '/' )}>Home</Small2>
          <AngleRightBtn />
          <Small2 onClick={() => setInnerBodyMode( "my-store" )}>My store</Small2>
        </ButtonArranger>
      </FirstInnerStyleHeaderBody>
      <ButtonBeautiful onClick={() => handleAddProduct()}>
        <SvgCloud />
        <span>Add prdouct</span>
      </ButtonBeautiful>
    </FirstInnerStyle>
  )
}

export default FirstInnerDash