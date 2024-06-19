import styled from "styled-components";

export const Span = styled.span`
  color: #FFF;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div{
    background-color: #FFF;
    display: flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 8px;

    img{
      color: #333;
    }

    input{
    display: flex;
    width:270px;
    height: 40px ;
    border: 0;
    padding: 24px 8px;
  }
  }
`;

export const IconWrapper = styled.div`
  color: #666360;
  display: flex;
  align-items: center;
`;
