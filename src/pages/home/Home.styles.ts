import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-x: hidden;
`;

export const Logo = styled.img`
    width: 200px;
    height: auto;
    margin-top: 20px;
`;

export const Title = styled.h1`
    width: 70%;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
`;

export const Content = styled.p`
    padding: 10px;
    width: 70%;
    margin-top: 15px;
    color: #5C5A5A;
    text-align: center;
    font-size: 14px;
`;
