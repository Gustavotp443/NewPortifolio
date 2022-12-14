import styled from "styled-components";
import theme from "../../themes/theme";


export const PaginationContainer= styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    p{
        color: white;
    }

`;

export const Button= styled.button`
    cursor: pointer;
    padding: 5px 10px;
    background-color: ${theme.backgroundColors.DarkPurple};
    color: white;
    border: none;

    &:disabled{
        cursor: auto;
        background-color: rgba(79, 42, 165,0.5);
    }

`;
