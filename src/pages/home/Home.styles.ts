import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const Logo = styled.img`
    height: auto;
    margin-top: 20px;
`;
export const Title = styled.h1`
    width: 70%;
    text-align: center;
    font-size: 64px;
    font-weight: bold;

    strong {
     background: linear-gradient(#DF6001, #E5B088);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;

    }
`;

export const Content = styled.p`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    text-align: justify;
    color: #5C5A5A;
    font-size: 14px;
    width: 50vw;

    p{
    width: 320px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    height: 100%;
    width: 100vw;
`;
