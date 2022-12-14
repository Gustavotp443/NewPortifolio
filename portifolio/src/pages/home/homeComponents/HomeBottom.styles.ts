import styled from "styled-components";
import theme from "../../../themes/theme";

export const AboutContainer = styled.div`
    margin-top: 30px;
    padding:50px 3%;
    background-color:inherit;
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

export const AboutHeader = styled.div`
>h1{
    color:${theme.backgroundColors.DarkPurple};
    font-weight: 400;
    font-size: 1.6em;
    text-shadow: 0 0 40px #a286e1;
}
>h2{
    font-size: 1.7em;
    color: #321a68;

}
@media screen and (max-width:400px){
    text-align: center;
}
`;

export const AboutText = styled.div`
margin-top: 30px;
line-height: 36px;
text-align: justify;
text-justify: distribute;
text-align-last: left;
text-indent:3em;

@media screen and (max-width:400px){
    text-indent:0;
    text-align: center;
    text-align-last: center;
}
`;

export const TextTop = styled.div`
font-size: 16px;
color: ${theme.backgroundColors.Gray} ;
text-shadow: 0 0 40px ${theme.backgroundColors.LightBG};
@media screen and (max-width:580px){
    font-size: 12px;
    line-height: 26px;
}

`;

export const TextBot = styled.div`
margin-top: 40px;
text-shadow: 0 0 40px ${theme.backgroundColors.LightBG};
font-size: 16px;
color: ${theme.backgroundColors.Gray} ;

@media screen and (max-width:580px){
    margin-top: 20px;
    font-size: 12px;
    line-height: 26px;
}
`;

export const AboutIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 60px;

svg{
    box-shadow: 0 0 40px #a286e1;
    color: ${theme.backgroundColors.Gray} ;
    font-size: 24px;
    background:rgba(162,134,225,0.2);
    backdrop-filter: blur(40px);

}
    svg:hover{
        color: #9e9e9e
    }
`;
