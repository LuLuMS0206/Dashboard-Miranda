import React, { useState, useEffect } from 'react';
import { NavbarComponent } from "../../../components/navbarComponent/navbarComponent";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setBookings, setSelectedBooking, getBookingsStatus, getBookingSlice, getBookingsError, Booking } from '../../../assets/features/booking/bookingSlice';
import { TableComponent } from '../../../components/tableComponent/tableComponent';
import { SectionOrder, List, ItemList, SelectStyled } from '../../../components/styledGeneric/styledGeneric';
import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
import { BookingsThunk } from '../../../assets/features/booking/bookingThunk';
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { AppDispatch } from './../../../store/store';

export const BookingPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const bookingStatus = useSelector(getBookingsStatus);
    const bookingSlice= useSelector(getBookingSlice);
    const bookingError = useSelector(getBookingsError);
    const [bookingList, setBookingList] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (bookingStatus === 'idle') {
            dispatch(BookingsThunk());
        } else if (bookingStatus === 'pending'){
            setLoading(true);
        } else if (bookingStatus === 'fulfilled') {
            setLoading(false);
            setBookingList(bookingSlice);
            console.log('BookingSlice in useEffect:', bookingSlice); 
        } else if (bookingStatus === 'rejected') {
            setLoading(false);
            setError(bookingError);
        }
    }, [bookingStatus]);

    const handleRowClick = (booking: Booking) => {
        console.log('Selected booking:', booking);
        dispatch(setSelectedBooking(booking));
        navigate(`/bookingsDetail/${booking.id}`);
    };

    const handleDeleteRow = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedBookings = bookingList.filter(booking => booking.id !== id);
                dispatch(setBookings(updatedBookings));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    const filterBookings = (status: string) => {
        if (status === 'All') {
            setBookingList(bookingSlice);
        } else {
            const filteredBookings = bookingSlice.filter(booking => booking.status === status);
            setBookingList(filteredBookings);
        }
    };

    const handleBookingsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        let sortedBookings = [...bookingList];

        if (value === 'orderDate') {
            sortedBookings.sort((a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime());
        } else if (value === 'guest') {
            sortedBookings.sort((a, b) => a.guest.localeCompare(b.guest));
        } else if (value === 'checkIn') {
            sortedBookings.sort((a, b) => new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime());
        } else if (value === 'checkOut') {
            sortedBookings.sort((a, b) => new Date(a.checkOut).getTime() - new Date(b.checkOut).getTime());
        } else {
            sortedBookings.sort((a, b) => a.id - b.id);
        }
        setBookingList(sortedBookings);
    };

    const handleClickNewBooking = () => {
        navigate('/newBooking');
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
            columnRenderer: (booking: Booking) => {
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
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (booking: Booking) => {
                return (
                    <>
                        <MdOutlineEdit style={{ marginRight: '1rem' }} onClick={(e) => { e.stopPropagation();dispatch(setSelectedBooking(booking)); navigate(`/bookingsEdit/${booking.id}`); }} />
                        <AiOutlineDelete onClick={(e) => { e.stopPropagation(); handleDeleteRow(booking.id); }} />
                    </>
                );
            }
        },
    ];

    return (
        <NavbarComponent>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <SectionOrder>
                        <List>
                            <ItemList onClick={() => filterBookings('All')}>All Bookings</ItemList>
                            <ItemList onClick={() => filterBookings('Check In')}>Check In</ItemList>
                            <ItemList onClick={() => filterBookings('Check Out')}>Check Out</ItemList>
                            <ItemList onClick={() => filterBookings('In Progress')}>In Progress</ItemList>
                        </List>
                        <ButtonStyles styled='new' onClick={handleClickNewBooking}>+ New Booking</ButtonStyles>
                        <SelectStyled onChange={handleBookingsChange}>
                            <option value='orderDate'>Order Date</option>
                            <option value='guest'>Guest</option>
                            <option value='checkIn'>Check In</option>
                            <option value='checkOut'>Check Out</option>
                        </SelectStyled>
                    </SectionOrder>
                    {console.log('BookingList being passed to TableComponent:', bookingList)}
                    <TableComponent 
                        columns={bookingsColumns} 
                        data={bookingList} 
                        onRowClick={handleRowClick} 
                        redirectUrl='/bookingsDetail' 
                    />
                </>
            )}
        </NavbarComponent>
    );
};
