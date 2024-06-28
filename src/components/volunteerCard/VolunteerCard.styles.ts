import styled from "styled-components";

export const Content = styled.div`
  font-size: 18px;
  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  padding: .4rem 1.4rem;

  align-items: center;

  border-bottom: 1px solid rgba(168, 168, 168, .3);

  .nameAndImage {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }

  .circle {
    background-color: #F86B01;
    width: 55px;
    height: 55px;
    border-radius: 50%;

    p {
      text-align: center;
      margin-top: 18px;
    }
  }

  .name {
    color: #79797B;
  }

  .orange {
    color: #F86B01;
  }

  .ativo {
    color: #007913;
    background-color: #B5F0BB;
    border-radius: 10px;
    padding: .2rem 1.5rem;
  }

  .inativo {
    color: #FF002E;
    background-color: #F3ACAC;
    border-radius: 10px;
    padding: .2rem 1.5rem;
  }
`;