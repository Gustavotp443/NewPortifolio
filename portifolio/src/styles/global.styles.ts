import styled,{createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body,html{
        height: 100%;
    }

`;

export const MainContainer=styled.section`
    max-width:1440px;
    margin:0 auto;
`;
