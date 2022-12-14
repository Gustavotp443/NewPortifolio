import styled from "styled-components";
import theme from "../../themes/theme";

export const Card = styled.div`
    position: relative;
    background-color: white;
    height: 200px;
    max-width: 500px;
    background-color: ${theme.backgroundColors.DegradientBlue};
    border:1px solid rgba(225,225,230,0.2);

    header{
        width: 100%;
        padding: 2rem 2%;
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        color: ${theme.backgroundColors.Gray};

        @media screen and (max-width:425px){
            font-size: 14px;
        }
    }

    footer{
        position: absolute;
        display: flex;
        justify-content: center;
        bottom:0;
        gap:20px;
        width: 100%;
        padding: 2rem 0;
        font-size: 16px;
        text-align: center;
        color: ${theme.backgroundColors.Gray};

        @media screen and (max-width:425px){
            font-size: 14px;
        }

        a{
            text-decoration: none;
            color: inherit;
        }

        svg{
            font-size: 20px;
            &:hover{
                transition: 0.4s ease;
                transform: translateX(30%);
            }
            @media screen and (max-width:425px){
            font-size: 18px;
            }
        }

    }
`;
