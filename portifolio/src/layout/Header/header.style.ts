import styled from "styled-components";
import theme from "../../themes/theme";
import {BiMenuAltRight} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";

export const HeaderContainer= styled.header`
    height: 70px;
    background-color: ${theme.backgroundColors.DegradientBlue};
    border-bottom:1px solid rgba(225,225,230,0.2);
`;

export const HeaderWrapper= styled.div`
    max-width: 1440px;
    margin:0 auto;
    display: flex;
    align-items: center;
    height:90%;
    >div{z-index: 1001;}
    justify-content: space-between;

    >div{
        margin-right: 4%;
    }
`;

export const Typography= styled.h2`
    color: ${theme.backgroundColors.Gray};
    margin-left: 4%;
    z-index: 1001;
    a{
        text-decoration: none;
        color: inherit;
        transition: 0.8s ease;
        &:hover{
            color: aqua;
        }
    }
`;

export const IconMenu= styled(BiMenuAltRight)`
    color: ${theme.backgroundColors.DarkPurple};
    font-size: 2rem;
    cursor: pointer;

`;

export const closeMenu= styled(IoMdClose)`
    color: ${theme.backgroundColors.DarkPurple};
    font-size: 2rem;
    cursor: pointer;

`;

export const Menu= styled.nav`
    transition:0.5s;
    position: absolute;
    background-color: ${theme.backgroundColors.DarkBlue};
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    padding: 60px 0;
    gap: 40px;
    z-index: 1000;

    >div:nth-child(1){
        margin-top: 100px;
    }

    >div{

        margin-left: 4%;
        background-color:${theme.backgroundColors.DegradientBlue};
        padding: 10px;
        width: 90%;
        border-radius: 10px;
        display: flex;
        gap: 20px;

        >div{

        height: 100%;
        width: 10px;
        background-color: ${theme.backgroundColors.DarkPurple};
    }

    }
    a{
        transition: 1s ease;
        &:hover{
            color: aqua;
        }
        color: white;
        text-decoration: none;
    }
`;
