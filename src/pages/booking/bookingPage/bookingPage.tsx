// 
import { NavbarComponent } from "../../../components/navbarComponent/navbarComponent";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setBookings, setSelectedBooking, getBookingsStatus, getBookingSlice, getBookingsError } from '../../../assets/features/booking/bookingSlice';
import { TableComponent } from '../../../components/tableComponent/tableComponent';
import { SectionOrder, List, ItemList, SelectStyled } from '../../../components/styledGeneric/styledGeneric';
import { ButtonStyles } from '../../../components/buttonComponent/buttonComponent';
import { BookingsThunk } from '../../../assets/features/booking/bookingThunk';
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export const BookingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookingStatus = useSelector(getBookingsStatus);
    const bookingSlice = useSelector(getBookingSlice);
    const bookingError = useSelector(getBookingsError);
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bookingStatus === 'idle') {
            dispatch(BookingsThunk());
        } else if (bookingStatus === 'fulfilled') {
            setLoading(false);
            setBookingList(bookingSlice);
        } else if (bookingStatus === 'rejected') {
            setLoading(false);
            setError(bookingError);
        }
    }, [bookingStatus, bookingSlice, bookingError, dispatch]);

    const handleRowClick = (booking) => {
        dispatch(setSelectedBooking(booking));
        navigate(`/bookingsDetail/${booking.id}`);
    };

    const handleDeleteRow = (id) => {
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

    const handleClickAll = () => {
        setBookingList(bookingSlice);
    };

    const handleClickCheckIn = () => {
        const filteredBookings = bookingSlice.filter(booking => booking.status === 'Check In');
        setBookingList(filteredBookings);
    };

    const handleClickCheckOut = () => {
        const filteredBookings = bookingSlice.filter(booking => booking.status === 'Check Out');
        setBookingList(filteredBookings);
    };

    const handleClickInProgress = () => {
        const filteredBookings = bookingSlice.filter(booking => booking.status === 'In Progress');
        setBookingList(filteredBookings);
    };

    const handleBookingsChange = (event) => {
        const value = event.target.value;
        let sortedBookings = [...bookingList];

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
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (booking) => {
                return (
                    <>
                        <MdOutlineEdit style={{ marginRight: '1rem' }} onClick={(e) => { e.stopPropagation(); navigate(`/bookingsEdit/${booking.id}`); }} />
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
                            <ItemList onClick={handleClickAll}>All Bookings</ItemList>
                            <ItemList onClick={handleClickCheckIn}>Check In</ItemList>
                            <ItemList onClick={handleClickCheckOut}>Check Out</ItemList>
                            <ItemList onClick={handleClickInProgress}>In progress</ItemList>
                        </List>
                        <ButtonStyles styled='new' onClick={handleClickNewBooking}>+ New Booking</ButtonStyles>
                        <SelectStyled onChange={handleBookingsChange}>
                            <option value='orderDate'>Order Date</option>
                            <option value='guest'>Guest</option>
                            <option value='checkIn'>Check In</option>
                            <option value='checkOut'>Check Out</option>
                        </SelectStyled>
                    </SectionOrder>
                    <TableComponent 
                        columns={bookingsColumns} 
                        data={bookingList} 
                        onRowClick={handleRowClick} 
                        redirectUrl='/bookingsDetail' 
                        onEditClick={(id) => navigate(`/bookingsEdit/${id}`)} 
                    />
                </>
            )}
        </NavbarComponent>
    );
};
