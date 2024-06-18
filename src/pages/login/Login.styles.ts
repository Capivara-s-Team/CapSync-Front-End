import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 85%;
  width: 100%;
`;

export const ThemeIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
background: linear-gradient(180deg, #F86B01 0%, #F8C787 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;
height: 80%;
min-width: 520px;
border-radius: 30px;

input{
  display: flex;
  width:280px;
  height: 40px ;
  border: 0;
  }

  @media screen and (max-width: 768px){
    display: none;
    background-color: red;

    }
  `;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 28px;

  .main-text{
    font-size: 36px;
    color: #000;
  }

  .login-text{
    font-size: 20px;
    color: #fff;
    font-weight: lighter;
  }
  #border{
     width: 280px;
    border-bottom: 0.5px solid #FFF;
    line-height: 0px;
    font-weight: lighter
  }

  span{
    color: #FFF;
    display: flex;
    flex-direction: column;
    gap: 8px;
    }

    input{
      min-width: 280px;
      border-radius: 8px;
      padding: 24px;
    }

    a{
      text-decoration: none;
      color: #FFF;
    }

`;
