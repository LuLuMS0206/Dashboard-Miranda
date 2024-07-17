import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1rem 0;
  padding: 2rem 1rem;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Tbody = styled.tbody`
  
`;

export const Tr = styled.tr`
  background-color: #ffffff; 
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
`;

export const Td = styled.td`
  padding: 1rem;
  &:first-child {
    border-bottom-left-radius: 20px;
  }
  &:last-child {
    border-bottom-right-radius: 20px;
  }
`;

export const PaginationTable = styled.div`
    width: 15%;
    display: flex;
    gap: 2em;
`;
