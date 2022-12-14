import styled from "styled-components";
import theme from "../../../themes/theme";

export const InfoContent = styled.div`
    padding: 60px 4%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    animation:mymove 2.5s ease 0s 1;

    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
    }
    100% {
        opacity:1;
    }}
`;


export const TextInfo = styled.div`
    width: 50%;
    justify-content: center;
    display: flex;
    text-align: justify;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    font-size: 2.8em;



    > div > p > span{
        background-color: ${theme.backgroundColors.DarkPurple};
        color: ${theme.backgroundColors.Gray};
        padding: 10px;
        border-radius: 10px;
        line-height: 75px;
        }

    >div>p{
        color: ${theme.backgroundColors.Gray};


    }

    @media screen and (max-width:960px){
        width: 100%;
        >div{text-align: center;}
    }
    @media screen and (max-width:570px){
        font-size: 2em;
    }
`;

export const Subtext = styled.div`
        font-size: 16px;
        flex-wrap: wrap;
        line-height: 36px;
        margin-top: 40px;
        color: ${theme.backgroundColors.Gray};
        @media screen and (max-width:570px){
        font-size: 12px;
        line-height: 30px;
        margin-top: 20px;
        }

     span{
        font-size: 26px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        gap: 36px;
    }

     >span>a{
        text-decoration: none;
        color: ${theme.backgroundColors.Gray};
        transition: 0.5s;
    }

    >span>a:hover{
        color: black;
    }

     svg{
        margin-top: 30px;
    }
    @media screen and (max-width:960px){
        text-align: center;
    }
`;
export const ImgInfo = styled.div`
    width: 50%;
    text-align: center;
    >img{
        width:418.6px;
        height:519.2px;
    }
    @media screen and (max-width:960px){
        width: 100%;
        margin-top: 80px;
    }
    @media screen and (max-width:570px){
        >img{
            width:calc(418.6px /2);
            height:calc(519.2px/2);
        }
    }
`;

