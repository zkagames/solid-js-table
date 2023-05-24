import { styled } from "solid-styled-components";

export const MainPage = styled.div`
    padding:0px;
    margin:0px;
    font-size:16px;
    padding: 16px;
    font-family:verdana;
    *{font-size:16px;}
`

export const PageHeader = styled.div`
    font-weight: 600;
    margin-bottom:20px;
`

export const FullDay = styled.div<{isFull: boolean}>`
    font-weight: 600;
    color: ${props=>props.isFull ? '#2a2': '#d22'};
`


