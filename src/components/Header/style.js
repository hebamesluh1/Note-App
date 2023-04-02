import styled from "styled-components";

export const HeaderStyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px 0px;
    h1{
        color: ${props=>props.theme.palette.textColor};
    }
`