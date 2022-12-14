import styled from "styled-components";
import theme from "../../themes/theme";

export const ErroContainer= styled.div`
    background-color: ${theme.backgroundColors.DarkBlue};
    min-height: 61.6vh;


    >div{
        animation:mymove 2.5s ease 0s 1;
        @keyframes mymove {
        0% {
        opacity:0;
        transform: translateY(-5%);
        }
        100% {
            opacity:1;
        }}

        padding-top: 80px;
        line-height: 40px;
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: ${theme.backgroundColors.Gray};
        p{
            font-size: 24px;
        }
        h2{
            font-size: 32px;
        }
    }
`;
