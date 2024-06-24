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
  //height: 85%;
  padding-top: 48px;
  width: 100%;
`;

export const LoginContainer = styled.div`
background: linear-gradient(180deg, #F86B01 0%, #F8C787 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

justify-content: space-evenly;
gap: 28px;

//height: 90%;
padding: 56px 70px 48px;
min-width: 520px;
border-radius: 30px;

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

    a{
      text-decoration: none;
      color: #FFF;
    }

  @media screen and (max-width: 768px){
    display: none;
    background-color: red;

    }
  `;
