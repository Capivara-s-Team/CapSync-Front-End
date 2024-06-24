import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .footer {
        align-self: end;
        margin-right: 168px;
        padding-bottom: 30px;
    }
`;

export const Logo = styled.img`
    height: auto;
    //margin-top: 20px;
`;
export const Title = styled.h1`
    //width: 70%;
    text-align: center;
    font-size: 64px;
    font-weight: bold;


    strong {
     background: linear-gradient(#DF6001, #E5B088);
     background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    }
`;

export const Content_container = styled.div`
    //height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Content = styled.div`
    //padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: justify;
    color: #5C5A5A;
    gap: 56px;
    width: 50vw;
    
    p {
    width: 320px;
    }
`;

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 98px 58px 24px 116px;
    height: 100%;
    width: 100vw;
`;
