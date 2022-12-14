import styled from "styled-components";
import { MainContainer } from "../../styles/global.styles";
import theme from "../../themes/theme";


export const HomeContainer= styled.section`
    min-height: calc(100vh - 70px);
    background-color: ${theme.backgroundColors.DarkBlue};
    padding-bottom: 100px;
`;
export const HomeWrapper= styled(MainContainer)`

`;

