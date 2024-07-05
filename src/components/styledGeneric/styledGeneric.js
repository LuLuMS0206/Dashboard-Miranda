import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 0.2em;
  margin-right: 0.625em;
  width: 100%;
`;

export const ItemList = styled.li`
  cursor: pointer;
  width: 40%;
  padding-bottom: 0.625em;
  color: #6e6e6e;
  border-bottom: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #135846;
    border-bottom: 1px solid #135846;
  }
`;

export const SectionOrder = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const SelectStyled = styled.select`
  border: 1px solid #135846;
  color: #135846;
  margin-left: 3em;
  padding: 0.5rem;
  border-radius: 0.4rem;
`;

export const TextAreaStyled = styled.textarea`
    padding: 8px;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
`;
