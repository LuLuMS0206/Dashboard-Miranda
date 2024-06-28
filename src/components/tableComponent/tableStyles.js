import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Th = styled.th`
  padding: 1rem;
  border: 1px solid #dee2e6;
  text-align: left;
`;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #e9ecef;
  }
`;

export const Td = styled.td`
  padding: 1rem;
  border: 1px solid #dee2e6;
`;
