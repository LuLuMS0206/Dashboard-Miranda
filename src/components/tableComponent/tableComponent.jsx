import { Table, Thead, Th, Tbody, Tr, Td } from './tableStyles';

const columns = [
    { headerColumn: 'Guest', columnsData: 'guest' },
    { headerColumn: 'Order Date', columnsData: 'orderDate' },
    { headerColumn: 'Check In', columnsData: 'checkIn' },
    { headerColumn: 'Check Out', columnsData: 'checkOut' },
    { headerColumn: 'Special Request', columnsData: 'specialRequest' },
    { headerColumn: 'Room Type', columnsData: 'roomType' },
    { headerColumn: 'Status', columnsData: 'status' },
];

const data = [
    {
        id: 'RES123456',
        guest: 'John Doe',
        orderDate: '2024-06-15',
        checkIn: '2024-06-20',
        checkOut: '2024-06-25',
        specialRequest: 'Late check-in',
        roomType: 'Deluxe - Room 101',
        status: 'Check In',
    },
    {
        id: 'RES654321',
        guest: 'Jane Smith',
        orderDate: '2024-06-10',
        checkIn: '2024-06-18',
        checkOut: '2024-06-22',
        specialRequest: 'Extra pillows',
        roomType: 'Standard - Room 202',
        status: 'In Progress',
    },
    {
        id: 'RES789012',
        guest: 'Mike Johnson',
        orderDate: '2024-06-12',
        checkIn: '2024-06-19',
        checkOut: '2024-06-23',
        specialRequest: 'High floor',
        roomType: 'Suite - Room 303',
        status: 'Check Out',
    }
];

export const TableComponent = () => {
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
                                {col.columnsData === 'guest' ? (
                                    <>
                                        {row[col.columnsData]}<br />
                                        <small>{row.id}</small>
                                    </>
                                ) : (
                                    row[col.columnsData]
                                )}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};
