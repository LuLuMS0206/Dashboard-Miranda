import { ButtonStyles } from '../buttonComponent/buttonComponent';
import { Table, Thead, Th, Tbody, Tr, Td, PaginationTable } from './tableStyles';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const TableComponent = ({ columns, data, onRowClick, redirectUrl, onEditClick }) => {
    const pageSize = 4;
    const navigate = useNavigate();

    const pagination = (array, size) => {
        const aux = [];
        for (let i = 0; i < array.length; i += size)
            aux.push(array.slice(i, i + size));
        return aux;
    };

    const [num, setNum] = useState(0);
    const [pages, setPages] = useState(pagination(data, pageSize));

    const handlePrev = () => {
        num > 0 && setNum(num - 1);
    };

    const handleNext = () => {
        num + 1 < pages.length && setNum(num + 1);
    };

    useEffect(() => {
        setPages(pagination(data, pageSize));
        setNum(0); 
    }, [data]);

    const handleRowClick = (row) => {
        if (onRowClick) onRowClick(row);
        if (redirectUrl) navigate(`${redirectUrl}/${row.id}`); 
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <Table>
                <Thead>
                    <Tr>
                        {columns.map((column, index) => (
                            <Th key={index}>{column.headerColumn}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {pages[num]?.map((row) => (
                        <Tr 
                            key={row.id}
                            onClick={() => handleRowClick(row)}
                            style={{ cursor: 'pointer' }}
                        >
                            {columns.map((col, colIndex) => (
                                <Td 
                                    key={colIndex}
                                    onClick={col.headerColumn === 'Actions' ? stopPropagation : undefined}
                                >
                                    {col.columnRenderer ? col.columnRenderer(row) : row[col.columnsData]}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <PaginationTable>
                {num === 0 ? (
                    <ButtonStyles disabled styled='prev'>Prev</ButtonStyles>
                ) : (
                    <ButtonStyles onClick={handlePrev} styled='next'>Prev</ButtonStyles>
                )}
                {num + 1 >= pages.length ? (
                    <ButtonStyles disabled styled='prev'>Next</ButtonStyles>
                ) : (
                    <ButtonStyles onClick={handleNext} styled='next'>Next</ButtonStyles>
                )}
            </PaginationTable>
        </>
    );
};
