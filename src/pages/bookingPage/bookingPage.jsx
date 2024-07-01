
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent"
import { TableComponent } from "../../components/tableComponent/tableComponent"
import { useState, useEffect } from "react";
import data from "../../data/booking.json"
import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";


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

    const [bookings, setBookings] = useState(data);

    useEffect(() => {
        sortBookingsHandler('id');
    }, []);

    const sortBookingsHandler = (value) => {
        let sortedBookings = [...data];

        if (value === 'orderDate') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.bookDate) - new Date(b.bookDate));
        } else if (value === 'guest') {
            sortedBookings = sortedBookings.sort((a, b) => a.fullName.localeCompare(b.fullName));
        } else if (value === 'checkIn') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));
        } else if (value === 'checkOut') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.checkOut) - new Date(b.checkOut));
        } else {
            sortedBookings = sortedBookings.sort((a, b) => a.id - b.id);
        }

        setBookings(sortedBookings);
    };

    const handleBookingsChange = (event) => {
        const value = event.target.value;
        sortBookingsHandler(value);
    };

    const handleClickAll = () => {
        setBookings(data);
    };

    const handleClickCheckIn = () => {
        const filteredBookings = data.filter(booking => booking.status === 'Check In');
        setBookings(filteredBookings);
    };

    const handleClickCheckOut = () => {
        const filteredBookings = data.filter(booking => booking.status === 'Check Out');
        setBookings(filteredBookings);
    };

    const handleClickInProgress = () => {
        const filteredBookings = data.filter(booking => booking.status === 'In Progress');
        setBookings(filteredBookings);
    };
    
    return(
        <NavbarComponent>
            <SectionOrder>
                <List>
                    <ItemList onClick={handleClickAll}>All Bookings</ItemList>
                    <ItemList onClick={handleClickCheckIn}>Check In</ItemList>
                    <ItemList onClick={handleClickCheckOut}>Check Out</ItemList>
                    <ItemList onClick={handleClickInProgress}>In progress</ItemList>
                </List>
                <ButtonStyles styled='send'>+ New Booking</ButtonStyles>
                <SelectStyled onChange={handleBookingsChange}>
                    <option value='orderDate'>Order Date</option>
                    <option value='guest'>Guest</option>
                    <option value='checkIn'>Check In</option>
                    <option value='checkOut'>Check Out</option>
                </SelectStyled>
            </SectionOrder>
            <TableComponent columns={bookingsColumns} data={bookings} />
        </NavbarComponent>
    )
}