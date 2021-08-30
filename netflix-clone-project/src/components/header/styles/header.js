import styled  from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

// const bgImage =  require('/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/misc/bg-movies.jpg')

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('https://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2020/03/Best-German-Movies.jpg?resize=780%2C400&ssl=1');
    z-index : 10;
    

    // @media (max-width: 1100px) {
    //     background: none;
    // }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }
`;

export const Link = styled.p``;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;

export const Logo = styled.img`
    height: auto;
    width: 55%;
    margin-right: 40px;


    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;