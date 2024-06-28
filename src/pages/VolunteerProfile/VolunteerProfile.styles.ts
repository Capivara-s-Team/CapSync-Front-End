import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  overflow-x: hidden;

`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;

  .Card-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    gap: 1.5rem;

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 600px;
  }
}
  .circle {
    width: 150px;
    height: 150px;
    background: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    font-size: 30px;
  }

  `;

export const ContentInputs = styled.div``;

export const InputName = styled.div`
display: flex;
gap: 3rem;
width: 100%;

div{
  width: 100%;
  label{
    margin-bottom: 16px;
    display: flex;
  }
}

`;

export const InfoArea = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 1.25rem;

`;

export const DiscordArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  .title{
    display: flex;
    align-items: flex-start;
    height: 32px;
  }


  .teste {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .tele {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      div:nth-child(1) {
        width: 80px;
      }
    }
  }
`;

export const Stacks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  select{
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: 0;
    padding: 0px 16px;
  }
`;

export const TextInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;
  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea{
      border: 0;
      border-radius: 8px;
      max-width: 600px;
      min-height: 132px;
    }


  }
`;

export const SquadOptions = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  label{
    letter-spacing: 0.125rem;
    margin: 1rem 0px;
    height: 24px;
    text-align: justify;
  }
`;
