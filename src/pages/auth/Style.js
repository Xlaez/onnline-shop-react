import styled from 'styled-components';

export const RegisterForm = styled.form`
width:100vw;
height:100vh;
overflow:hidden;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
strong{
    background:#093c66;
    width:30vw;
    padding:1rem;
    text-align:center;
    border-radius:5px;
    margin-bottom:.7rem;
    font-size:1rem;
    color:#fff;
    text-transform:uppercase;
}
span{
    color:#093c66;
    text-transform:lowercase;
    font-size:0.9rem;
    text-align:center;
    font-family: 'Overlock', cursive;
    a{
        text-decoration:none;
        color:#093c66;
        opacity:0.9;
    }
}
.form-body{
    border-radius:5px;
    border:1px solid #ffffff37;
    background:#093c66;
    padding:1rem;
    display:flex;
    flex-direction:column;
    margin-bottom:1rem;
    width:30vw;
}
.form-btn{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:30vw;
}
@media(max-width:440px){
    strong{
        width:90vw;
    }
    .form-body{
        width:90vw;
    }
    
}
`