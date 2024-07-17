import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ButtonStyles } from '../buttonComponent/buttonComponent';
import { Table, Thead, Th, Tbody, Tr, Td, PaginationTable } from './tableStyles';

interface Column {
    headerColumn: string;
    columnsData?: string; 
    columnRenderer?: (row: any) => React.ReactNode;
}

interface TableComponentProps {
    columns: Column[];
    data: any[];
    onRowClick?: (row: any) => void;
    redirectUrl?: string;
    onEditClick?: (row: any) => void;
}

export const TableComponent: React.FC<TableComponentProps> = ({ columns, data, onRowClick, redirectUrl }) => {
    const pageSize = 4;
    const navigate = useNavigate();

    const pagination = (array: any[], size: number): any[][] => {
        const aux: any[][] = [];
        for (let i = 0; i < array.length; i += size) {
            aux.push(array.slice(i, i + size));
        }
        return aux;
    };

    const [num, setNum] = useState<number>(0);
    const [pages, setPages] = useState<any[][]>(pagination(data, pageSize));

    const handlePrev = () => {
        if (num > 0) setNum(num - 1);
    };

    const handleNext = () => {
        if (num + 1 < pages.length) setNum(num + 1);
    };

    useEffect(() => {
        setPages(pagination(data, pageSize));
        setNum(0); 
    }, [data]);

    const handleRowClick = (row: any) => {
        if (onRowClick) onRowClick(row);
        if (redirectUrl) navigate(`${redirectUrl}/${row.id}`); 
    };

    const stopPropagation = (event: React.MouseEvent) => {
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
                                    onClick={col.headerColumn === 'Acción' ? stopPropagation : undefined}
                                >
                                    {col.columnRenderer ? col.columnRenderer(row) : col.columnsData ? row[col.columnsData] : null}
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
                    <ButtonStyles onClick={handlePrev} styled='prev'>Prev</ButtonStyles>
                )}
                {num + 1 >= pages.length ? (
                    <ButtonStyles disabled styled='next'>Next</ButtonStyles>
                ) : (
                    <ButtonStyles onClick={handleNext} styled='next'>Next</ButtonStyles>
                )}
            </PaginationTable>
        </>
    );
};
