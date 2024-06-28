
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { TableComponent } from "../../components/tableComponent/tableComponent";
import roomsData from "./../../data/rooms.json"


export const RoomPage = () => {
    const roomsColumns = [
        { headerColumn: 'Image', columnsData: 'image', columnRenderer: (row) => <img src={row.image}  width="100" /> },
        { headerColumn: 'Information', columnsData: 'information', columnRenderer: (row) => `Room ${row.roomNumber} - ID: ${row.id}` },
        { headerColumn: 'Room Type', columnsData: 'roomType' },
        { headerColumn: 'Amenities', columnsData: 'amenities', columnRenderer: (row) => row.amenities.join(', ') },
        { headerColumn: 'Price', columnsData: 'price' },
        { headerColumn: 'Offer Price', columnsData: 'offerPrice' },
        { headerColumn: 'Status', columnsData: 'status' }
    ];

    return(
        <NavbarComponent>
            <TableComponent columns={roomsColumns} data={roomsData} />
        </NavbarComponent>
    )
}