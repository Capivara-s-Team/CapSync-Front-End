import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;

`;
export const Content = styled.div`
width: 100%;
height: 100%;
gap: 1rem;
row-gap: 1rem;

display: flex;
align-items: center;
justify-content: space-evenly;

.Card-content{
  max-width: 610px;
  width: 100%;

  span{
    font-size: 1rem;
    color: #FFF;
  }
}

`;
export const ContentInputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  form{
    border: 1px solid #ff0000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    input{
      width: 220px;
      border: 1px solid #ff0000;
  }
  }
`;
export const ContentButtons = styled.div`
  display: flex;
  gap: 2rem;

`;
