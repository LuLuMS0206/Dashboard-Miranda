
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { TableComponent } from "../../components/tableComponent/tableComponent"
import bookingsData from "./../../data/booking.json"


export const BookingPage = () => {
    const bookingsColumns = [
        { headerColumn: 'Guest', columnsData: 'guest' },
        { headerColumn: 'Order Date', columnsData: 'orderDate' },
        { headerColumn: 'Check In', columnsData: 'checkIn' },
        { headerColumn: 'Check Out', columnsData: 'checkOut' },
        { headerColumn: 'Special Request', columnsData: 'specialRequest' },
        { headerColumn: 'Room Type', columnsData: 'roomType' },
        { headerColumn: 'Status', columnsData: 'status' },
    ];
    
    return(
        <NavbarComponent>
            <TableComponent columns={bookingsColumns} data={bookingsData} />
        </NavbarComponent>
    )
}