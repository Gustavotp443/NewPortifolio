import styled from "styled-components";
import { MainContainer } from "../../styles/global.styles";
import theme from "../../themes/theme";

export const ProjectsSection= styled.section`
    background-color: ${theme.backgroundColors.DarkBlue};
    min-height: 80vh;
    width: 100%;
    padding-bottom: 100px;

`;

export const ProjectContainer= styled(MainContainer)`

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

export const Title= styled.div`
    margin: 0 4%;
    color: black;
    padding-top: 30px;
    font-size: 50px;
    font-style: italic;
    transform: scale(1) rotate(0deg) translate(0px, 0px) skew(20deg, 0deg);
    text-shadow:
               -1px -1px 5px ${theme.backgroundColors.DarkPurple},
               -1px 1px 5px ${theme.backgroundColors.DarkPurple},
                1px -1px 5px ${theme.backgroundColors.DarkPurple},
                1px 0px 5px ${theme.backgroundColors.DarkPurple};

    @media screen and (max-width:580px){
        transform: scale(1) rotate(0deg) translate(0px, 0px) skew(0deg, 0deg);
        font-style: normal;
        font-size: 36px;
        text-align: center;
    }



`;

export const CardWrapper= styled.div`
    padding-top: 50px;
    margin: 0 4%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(3,1fr);
    }

    @media screen and (max-width: 520px){
        grid-template-columns: repeat(2,1fr);
    }

`;

export const PaginationWrapper= styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;

`;


