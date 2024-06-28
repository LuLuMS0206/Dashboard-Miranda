import { Table, Thead, Th, Tbody, Tr, Td } from './tableStyles';


export const TableComponent = ({ columns, data }) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    {columns.map((column, index) => (
                        <Th key={index}>{column.headerColumn}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row) => (
                    <Tr key={row.id}>
                        {columns.map((col, colIndex) => (
                            <Td key={colIndex}>
                                {col.columnRenderer ? col.columnRenderer(row) : row[col.columnsData]}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};
