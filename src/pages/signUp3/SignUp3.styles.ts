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

display: flex;
align-items: center;
justify-content: space-evenly;

.Card-content{
  max-width: 610px;
  gap: 1.5rem;
  padding: 56px ;

  span{
    font-size: 1rem;
    color: #FFF;
    text-align: justify;
  }
}

`;

export const Deficient = styled.div`
display: flex;
gap: 32px;

.check_option{
  display: flex;
  flex-direction: column;
  height: 20px;
  gap: 1rem;

  label{
    white-space: nowrap;
    display: flex;
  }
}

.box-checkbox{
  display: flex;
  justify-content: space-evenly;

  input[type="checkbox"]{
    width: 20px;
    height: 20px;

  }

}
`;

export const Gender = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ContentInputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  form{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:2rem;

    label{
      color: #FFF;
      padding-bottom: 12px;
    }

    input{
      width: 216px;
  }
  }
`;
export const ContentButtons = styled.div`
  display: flex;
  gap: 2rem;

`;
