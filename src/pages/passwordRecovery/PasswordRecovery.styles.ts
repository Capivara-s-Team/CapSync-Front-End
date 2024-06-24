import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

`;

export const Content = styled.div`
  border: 1px solid #ff0000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100%;
  gap: 80px;

`;

export const RecoverContainer = styled.div`
background: linear-gradient(180deg, #F86B01 0%, #F8C787 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;
height: 90%;
min-width: 520px;
border-radius: 30px;

  `;

export const RecoverContent = styled.div`
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
    gap: 16px;
    }

    a{
      text-decoration: none;
      color: #FFF;
    }

`;
