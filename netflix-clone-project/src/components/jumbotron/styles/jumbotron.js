import styled from 'styled-components';


export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;
    
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    color: white;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    overflow: hidden;
`;

export const Container = styled.section`
    z-index: 1;
    background-color: black;
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;


export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;


export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%
        padding: 0 45px;
        text-align: center;
    }
`;


export const Image = styled.img`
    max-width: 90%;
    margin:5%;
    height: auto;
`;