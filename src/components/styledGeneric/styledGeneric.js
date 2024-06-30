import styled from "styled-components";


export const List = styled.ul `
    list-style: none;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 0.2em;
    margin-right: 0.625em;
    width: 100%;
`

export const ItemList = styled.li `
    cursor: pointer;
    width: 40%;
    padding-bottom: 0.625em;
    color: ${props => props.$active ? '#135846' : '#6E6E6E'};
    border-bottom: ${props => props.$active ? '1px solid #6E6E6E' : 'none'};
`



export const SectionOrder = styled.section `
    width: 100%;
    display: flex;
    flex-direction: space-between;
    margin-botton: 2em;
`

export const SelectStyled = styled.select `
    border: 1px solid #135846;
    color: #135846;
    margin-left: 3em;
    height: 3.5em;
`