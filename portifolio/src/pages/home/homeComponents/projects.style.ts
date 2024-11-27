import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../themes/theme";


export const ProjectsContainer= styled.section`

 padding: 60px 4%;
 padding-bottom: 60vh;
 display: flex;
 color: ${theme.backgroundColors.Gray};
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 animation:mymove 2.5s ease 0s 1;

    @keyframes mymove {
    0% {
    opacity:0;
    transform: translateY(-5%);
    }
    100% {
        opacity:1;
    }}

 >h2{
    font-size: 2rem;
    background-color: ${theme.backgroundColors.DarkPurple};
    padding: 10px;
    border-radius: 10px;
 }
 >p{
    font-size: 1.5rem;
 }

 @media screen and (max-width: 425px){
  padding-bottom: 30vh;
  }

`;


export const CardWrapper= styled.div`
    margin-top: 30px;
    color: white;
    display: flex;
    gap: 60px;
    position: relative;
    @media screen and (max-width: 860px){
        margin-top: -10px;

    }
    @media screen and (max-width: 570px){
        margin-top: -130px;
    }

.img{
    object-fit: 100% 100%;
    width: 17.5rem;
    height: 31.25rem;
}

.card{
    border: 1px solid ${theme.backgroundColors.Gray};
    box-shadow: 16px 16px 2px 1px ${theme.backgroundColors.DarkPurple};
    position: absolute;
    transform:translateX(-55%);
    margin: auto;
    width: 17.5rem;
    height: 31.25rem;
    cursor: pointer;
    opacity: 1;
    transition: 500ms;
    @media screen and (max-width: 860px){
        transform: translateX(-55%) scale(0.6);

    }
    @media screen and (max-width: 570px){
        transform:  translateX(-50%) scale(0.35);
    }
}

.card--active{
    opacity: 1;
    z-index: 999;

}

.card--left{
    transform: translateX(-160%) scale(0.8);
    transition: 500ms;
    opacity: 0.3;
    @media screen and (max-width: 860px){
        transform: translateX(-120%) scale(0.5);
    }
    @media screen and (max-width: 570px){
        transform: translateX(-88%) scale(0.3);
    }
}

.card--right{
    transform: translateX(50%) scale(0.8);
    transition: 500ms;
    opacity: 0.3;
    @media screen and (max-width: 860px){
        transform: translateX(10%) scale(0.5);
    }
    @media screen and (max-width: 570px){
        transform: translateX(-12%) scale(0.3);
    }
}
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 570px) {
        font-size: 0.75rem;
    }
`;

export const DescriptionText = styled.p`
    color: ${theme.backgroundColors.Gray};
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
    max-width: 70%; /* Ajuste para limitar a largura da descrição */
    word-wrap: break-word;

    @media screen and (max-width: 860px) {
        font-size: 0.9rem;
        max-width: 85%; /* Mais compacto em telas menores */
    }

    @media screen and (max-width: 570px) {
        font-size: 0.75rem;
    }
`;

export const SeeMoreProjects= styled(Link)`
    width: 33%;
    height: 15vw;
    max-width: 150px;
    max-height: 75px;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.backgroundColors.Gray};
    border-top:none;
    border-bottom:5px solid ${theme.backgroundColors.DegradientPurple};
    border-left:none;
    border-right: none;
    text-decoration: none;
    font-size: 0.9rem;
    border-radius: 10px;
    background-color: ${theme.backgroundColors.DarkPurple};

    &:hover{
        background-color: ${theme.backgroundColors.DegradientPurple};
    }
`;

export const ButtonContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 4%;
    margin-top: 50px;
    @media screen and (max-width: 860px){
        margin-top: -10px;
    }
    @media screen and (max-width: 570px){
        margin-top: -240px;
    }
`;
