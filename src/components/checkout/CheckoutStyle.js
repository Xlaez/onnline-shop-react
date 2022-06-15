import styled from 'styled-components';

export const CartTotal = styled.div`
margin-top:5rem;
margin-bottom:5rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h4{
    display:block;
    text-transform:uppercase;
    font-size:1.1rem;
    color:#888;
    padding-bottom:10px;
}
    table{
        width:500px;
        @media(max-width:440px){
            width:90vw;
        }
        tbody{
            width:100%;
            tr{
                border:1px solid #e0e0e0;
            }                
            .stand1,.total-price th{
                width:40%;
                padding:0.8rem;
                border:1px solid #e0e0e0;
                font-size:.8rem;
                color:#777;
                background:#f4f4f4;
            }
            td{
                font-size:.8rem;
                color:#888;
                border:1px solid #e0e0e0;
                padding-left:20px;
            }
        }
    }
    button{
        width:500px;
        padding:1rem;
        color:#fff;
        text-transform:uppercase;
        border:1px solid #093c66;
        border-radius:3px;
        background:#093c66;
        cursor:pointer;
        &:hover{
            opacity:0.9;
        }
        @media(max-width:440px){
        max-width:90vw;

    }
`

export const Heading = styled.h1`
padding-top:3rem;
padding-bottom:3rem;
text-transform:uppercase;
color:#888;
font-weight:700;
text-align:center;
`
export const CheckoutWrapper = styled.div`
max-width:85vw;
margin:0 auto;
padding:1rem;
@media(max-width:440px){
    max-width:99vw;
    padding:0.5rem;
}
`

export const Table = styled.table`
background:#fff;
border-top:1px solid #e0e0e0;
padding:2rem;
width:100%;
@media(max-width:440px){
    display:none;
}
.table-row-1{
    th{
        border:1px solid #e7e7e7;
        color:#888;
        padding:1rem;
        background:#f4f4f4;
        font-family: 'Overlock', cursive;
        text-transform:capitalize;
    };
    .item-x{
        width:5%;
  
    };
    .descr-x{
        width:40%;
    }
    .price-x{
        width:15%;
    };
    .discount-x{
        width:5%;
    };
    .quantity-x{
        width:15%;
    };
    .total-x{
        width:10%;
    }
    .remove-x{
        width:10%;        
    }
}
.table-row-2{
    td{
        color:#777;
        font-family: 'Overlock', cursive;
        border-right:1px solid #e7e7e7;
        border-left:1px solid #e7e7e7;
        border-bottom:1px dashed #e7e7e7;
    }
    .item-x-x{

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100%;
   

    };
    .descr-x-x{
        padding-left:20px;
        font-size:1rem;
        text-transform:uppercase;
    }
    .price-x-x{
        padding-left:20px;
        font-size:1rem;
    };
    .discount-x-x{
        padding-left:20px;
    }
    .quantity-x-x{
        padding-left:20px;
        font-size:1rem;
    };
    .total-x-x{
        padding-left:20px;
        font-size:1rem;
    }
    .remove-x-x{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100%;
        height:100%;
        border-bottom:1px solid transparent;
        padding-top:20px;
        svg{
            cursor:pointer;
        &:hover{
            color:#131313;
        }
        }
    }
`

export const Table2 = styled.table`
background:#fff;
border-top:1px solid #e0e0e0;
padding:2rem 0;
width:100%;
display:none;
width:98vw;
@media(max-width:768px){
    display:block;
}
.table-row-1{
    th{
        border:1px solid #e7e7e7;
        color:#888;
        padding:1rem;
        background:#f4f4f4;
        font-family: 'Overlock', cursive;
        text-transform:capitalize;
    };
    .item-x{
        width:5%;
  
    };
    .descr-x{
        width:40%;
    }
    .price-x{
        width:15%;
    };
    .discount-x{
        width:5%;
    };
    .quantity-x{
        width:15%;
    };
    .total-x{
        width:10%;
    }
    .remove-x{
        width:10%;        
    }
}
.table-row-2{
    td{
        color:#777;
        font-family: 'Overlock', cursive;
        border-right:1px solid #e7e7e7;
        border-left:1px solid #e7e7e7;
        border-bottom:1px dashed #e7e7e7;
    }
    .item-x-x{

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        height:100%;
   

    };
    .descr-x-x{
        padding-left:20px;
        font-size:1rem;
        text-transform:uppercase;
    }
    .price-x-x{
        padding-left:20px;
        font-size:1rem;
    };
    .discount-x-x{
        padding-left:20px;
    }
    .quantity-x-x{
        padding-left:20px;
        font-size:1rem;
    };
    .total-x-x{
        padding-left:20px;
        font-size:1rem;
    }
    .remove-x-x{
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100%;
        height:100%;
        border-bottom:1px solid transparent;
        padding-top:20px;
        svg{
            cursor:pointer;
        &:hover{
            color:#131313;
        }
        }
    }
`
export const NoCart = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:1rem;
padding:7rem 0;
h2{
    color:#666;
    font-size:1.5rem;
}
svg{
    font-size:10rem;
    color:#777;
}
button{
    padding:10px 30px;
    color:#fff;
    background:#093c66;
    border:1px solid #093c66;
    border-radius:3px;
    cursor:pointer;
    transition:all 1s ease-out;
    &:hover{
        border:1px solid #3a8bcd;
        background:#3a8bcd;
    }
}
`