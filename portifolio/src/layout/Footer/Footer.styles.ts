import styled from "styled-components";
import theme from "../../themes/theme";

export const FooterContainer = styled.div`
    background-color: ${theme.backgroundColors.DegradientBlue};
    margin-top: 1px solid ${theme.backgroundColors.Gray};
    color: white;
    padding: 60px 2% 20px 2%;
    width: 100%;
    margin-top: auto;
    border-top:1px solid rgba(225,225,230,0.2);

`;
export const FooterContent = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Call = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media screen and (max-width:768px) {
        display: inline-block;
        text-align: center;
        margin: 0 auto;
        flex: none;
        width: 100%;
    }

`;

export const Email = styled.div`

> h1 {
    font-size: 26px;
    @media screen and (max-width:580px){
        font-size: 18px;
    }
}

> h2 {
    margin-top: 15px;
    font-size: 22px;
    @media screen and (max-width:580px){
        margin-top: 6px;
        font-size: 16px;
    }
}

> p {
    color: ${theme.backgroundColors.Gray};
    margin-top: 5px;
    @media screen and (max-width:580px){
        font-size: 12px;
    }
}
`;
export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;

    @media screen and (max-width:768px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;


export const Social = styled.nav`
    position: relative;
    top: 20px;
    width: 50%;

> p {
    font-size: 18px;
    @media screen and (max-width:580px){
        font-size: 16px;
    }
}

> ul {
    color: #ccc;
    margin-top: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
}

> ul li {
    margin-bottom: 10px;
}

> ul li:hover{
    color: ${theme.backgroundColors.DarkPurple};
    cursor: pointer;
}

 a {
    color: inherit;
    text-decoration: none;
}

 svg {
    margin-right: 10px;
    color: inherit;
    font-size: 20px;
    @media screen and (max-width:580px){
        font-size: 14px;
    }
}

@media screen and (max-width:768px) {
        width: 100%;
        display: flex;
        text-align: justify;
        flex-direction: column;
        align-items: center;
    }
`;
export const ToTop = styled.div`
    margin-top: 40px;
    width: 50%;

    @media screen and (max-width:768px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

export const ToTopContent = styled.div`
    color:black;
    background-color: ${theme.backgroundColors.DarkPurple};
    width: 140px;
    text-align: center;
    box-shadow: 0px 0px 20px ${theme.backgroundColors.LightBlue};
    padding: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;

    @media screen and (max-width:580px){
        width: 100px;
        height: 80px;
        font-size: 12px;
    }


>p {
    font-size: 14px;

    @media screen and (max-width:580px){
        font-size: 12px;
    }
}

&:hover {
    color: white;
    transform: translateY(-10px);
}
`;
export const Copyright = styled.div`
    width: 100%;
    color: #ccc;
    font-size: 16px;
    margin-top: 60px;
    text-align: center;

    @media screen and (max-width:580px){
        font-size: 12px;
        margin-top: 30px;
    }
`;
