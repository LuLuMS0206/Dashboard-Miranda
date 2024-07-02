import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {setBookings} from '../../assets/features/booking/bookingSlice'
import data from '../../data/booking.json';
import { NavbarComponent } from '../../components/navbarComponent/navbarComponent';
import { TableComponent } from '../../components/tableComponent/tableComponent';
import { SectionOrder, List, ItemList, SelectStyled } from '../../components/styledGeneric/styledGeneric';
import { ButtonStyles } from '../../components/buttonComponent/buttonComponent';
import { BookingDetailComponent } from '../../components/bookingDetailComponent/bookingDetailComponent';

export const BookingPage = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings.bookings); 
    const [selectedBooking, setSelectedBooking] = useState(null); 

    useEffect(() => {
        dispatch(setBookings(data)); 
    }, [dispatch]);

    const handleRowClick = (booking) => {
        setSelectedBooking(booking);
        dispatch(setSelectedBooking(booking));
    };

    const handleClickAll = () => {
        dispatch(setBookings(data));

    };

    const handleClickCheckIn = () => {
        const filteredBookings = data.filter(booking => booking.status === 'Check In');
        dispatch(setBookings(filteredBookings)); 
    };

    const handleClickCheckOut = () => {
        const filteredBookings = data.filter(booking => booking.status === 'Check Out');
        dispatch(setBookings(filteredBookings));
    };

    const handleClickInProgress = () => {
        const filteredBookings = data.filter(booking => booking.status === 'In Progress');
        dispatch(setBookings(filteredBookings)); 
    };

    const handleBookingsChange = (event) => {
        const value = event.target.value;
        let sortedBookings = [...bookings]; 

        if (value === 'orderDate') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
        } else if (value === 'guest') {
            sortedBookings = sortedBookings.sort((a, b) => a.guest.localeCompare(b.guest));
        } else if (value === 'checkIn') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));
        } else if (value === 'checkOut') {
            sortedBookings = sortedBookings.sort((a, b) => new Date(a.checkOut) - new Date(b.checkOut));
        } else {
            sortedBookings = sortedBookings.sort((a, b) => a.id - b.id);
        }

        dispatch(setBookings(sortedBookings)); 
    };

    const bookingsColumns = [
        { headerColumn: 'Guest', columnsData: 'guest' },
        { headerColumn: 'Order Date', columnsData: 'orderDate' },
        { headerColumn: 'Check In', columnsData: 'checkIn' },
        { headerColumn: 'Check Out', columnsData: 'checkOut' },
        { headerColumn: 'Special Request', columnsData: 'specialRequest' },
        { headerColumn: 'Room Type', columnsData: 'roomType' },
        {
            headerColumn: 'Status',
            columnsData: 'status',
            columnRenderer: (booking) => {
                switch (booking.status) {
                    case 'In Progress':
                        return <ButtonStyles styled='progress'>In Progress</ButtonStyles>;
                    case 'Check In':
                        return <ButtonStyles styled='roomAvailable'>Check In</ButtonStyles>;
                    case 'Check Out':
                        return <ButtonStyles styled='roomBooked'>Check Out</ButtonStyles>;
                    default:
                        return booking.status;
                }
            }
        },
    ];

    return (
        <NavbarComponent>
            <SectionOrder>
                <List>
                    <ItemList onClick={handleClickAll}>All Bookings</ItemList>
                    <ItemList onClick={handleClickCheckIn}>Check In</ItemList>
                    <ItemList onClick={handleClickCheckOut}>Check Out</ItemList>
                    <ItemList onClick={handleClickInProgress}>In progress</ItemList>
                </List>
                <ButtonStyles styled='new'>+ New Booking</ButtonStyles>
                <SelectStyled onChange={handleBookingsChange}>
                    <option value='orderDate'>Order Date</option>
                    <option value='guest'>Guest</option>
                    <option value='checkIn'>Check In</option>
                    <option value='checkOut'>Check Out</option>
                </SelectStyled>
            </SectionOrder>
            <TableComponent columns={bookingsColumns} data={bookings} onRowClick={handleRowClick} />
            {selectedBooking && <BookingDetailComponent booking={selectedBooking} />}
        </NavbarComponent>
    );
};