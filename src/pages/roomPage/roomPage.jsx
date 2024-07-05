

import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";
import { TableComponent } from "../../components/tableComponent/tableComponent";
import { useEffect } from "react";
// import data from '../../data/rooms.json';
import { RoomsThunk } from "../../assets/features/room/roomThunk";
import { useSelector, useDispatch } from 'react-redux';
import { getRoomsStatus, getRoomsList, getRoomsError,deleteRoom  } from "../../assets/features/room/roomSlice";
import { useNavigate } from 'react-router-dom'; 

// export const RoomPage = () => {
//     const roomsColumns = [
//         { headerColumn: 'Image', columnsData: 'image', columnRenderer: (row) => <img src={row.image}  width="100" alt="Room" /> },
//         { headerColumn: 'Information', columnsData: 'information', columnRenderer: (row) => `Room ${row.roomNumber} - ID: ${row.id}` },
//         { headerColumn: 'Room Type', columnsData: 'roomType' },
//         { headerColumn: 'Amenities', columnsData: 'amenities', columnRenderer: (row) => row.amenities.join(', ') },
//         { headerColumn: 'Price', columnsData: 'price' },
//         { headerColumn: 'Offer Price', columnsData: 'offerPrice' },
//         { 
//             headerColumn: 'Status', 
//             columnsData: 'status', 
//             columnRenderer: (row) => (
//                 <ButtonStyles styled={row.availability === 'available' ? 'roomAvailable' : 'roomBooked'}>
//                     {row.availability === 'available' ? 'Available' : 'Booked'}
//                 </ButtonStyles>
//             ) 
//         },
//         {
//             headerColumn: 'Action',
//             columnsData: 'action',
//             columnRenderer: (row) => (
//                 <>
//                     <MdOutlineEdit 
//                         onClick={() => handleEditRoom(row.id)}
//                     />
//                     <AiOutlineDelete 
//                         onClick={() => handleDeleteRoom(row.id)}
//                     />
//                 </>
//             )
//         },
//     ];

//     const [rooms, setRooms] = useState([data]);
//     const [isLoading, setIsLoading] = useState(true);
//     const roomStatus = useSelector(getRoomsStatus) || 'idle';
//     const roomsError = useSelector(getRoomsError) || null;
//     const roomsList = useSelector(getRoomsList) || [];
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (roomStatus === 'idle') {
//             dispatch(RoomsThunk());
//         } else if (roomStatus === 'fulfilled') {
//             setIsLoading(false);
//             setRooms(roomsList);
//         } else if (roomStatus === 'rejected') {
//             setIsLoading(false);
//             console.error('Error fetching rooms:', roomsError);
//         }
//     }, [dispatch, roomStatus, roomsList, roomsError]);

//     useEffect(() => {
//         sortRoomsHandler('roomNumber');
//     }, []);

//     const sortRoomsHandler = (value) => {
//         let sortedRooms = [...data];

//         if (value === 'roomNumber') {
//             sortedRooms = sortedRooms.sort((a, b) => {
//                 const numA = a.roomNumber.toString();
//                 const numB = b.roomNumber.toString();
//                 return numA.localeCompare(numB);
//             });
//         } else if (value === 'availability') {
//             sortedRooms = sortedRooms.filter(room => room.availability === 'available');
//         } else if (value === 'booked') {
//             sortedRooms = sortedRooms.filter(room => room.availability === 'booked');
//         } else if (value === 'lowestPrice') {
//             sortedRooms = sortedRooms.sort((a, b) => a.price - b.price); 
//         } else if (value === 'highestPrice') {
//             sortedRooms = sortedRooms.sort((a, b) => b.price - a.price); 
//         } else if (value === 'id') {
//             sortedRooms = sortedRooms.sort((a, b) => a.id - b.id);
//         }

//         setRooms(sortedRooms);
//     };

//     const handleSortChange = (event) => {
//         const value = event.target.value;
//         sortRoomsHandler(value);
//     };

//     const handleListClick = () => {
//         sortRoomsHandler('id');
//     };

//     const handleEditRoom = (roomId) => {
//         navigate(`/roomsEdit/${roomId}`);
//     };

//     const handleDeleteRoom = (roomId) => {
//         const updatedRooms = rooms.filter(room => room.id !== roomId);
//         setRooms(updatedRooms);
//         // Aquí podrías enviar una acción a Redux para actualizar el estado global, si es necesario
//         // dispatch(setRooms(updatedRooms));
//     };

//     const handleNewRoom = () => {
//         navigate('/newRooms');
//     };

//     return (
//         <NavbarComponent>
//             {isLoading ? <p>...Loading...</p> :
//                 <>
//                     <SectionOrder>
//                         <List>
//                             <ItemList onClick={handleListClick}>All Rooms</ItemList>
//                         </List>
//                         <ButtonStyles styled='new' onClick={handleNewRoom}>+ New Room</ButtonStyles>
//                         <SelectStyled onChange={handleSortChange}>
//                             <option value='roomNumber'>Room Number</option>
//                             <option value='availability'>Available</option>
//                             <option value='booked'>Booked</option>
//                             <option value='lowestPrice'>Price Lowest to Highest</option>
//                             <option value='highestPrice'>Price Highest to Lowest</option>
//                         </SelectStyled>
//                     </SectionOrder>
//                     <TableComponent columns={roomsColumns} data={rooms} />
//                 </>
//             }
//         </NavbarComponent>
//     );
// };


// import { MdOutlineEdit } from "react-icons/md";
// import { AiOutlineDelete } from "react-icons/ai";
// import { ButtonStyles } from "../../components/buttonComponent/buttonComponent";
// import { NavbarComponent } from "../../components/navbarComponent/navbarComponent";
// import { SectionOrder, List, ItemList, SelectStyled } from "../../components/styledGeneric/styledGeneric";
// import { TableComponent } from "../../components/tableComponent/tableComponent";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { getRoomsStatus, getRoomsList, getRoomsError } from "../../assets/features/room/roomSlice";
// import { RoomsThunk } from "../../assets/features/room/roomThunk";
// import { useNavigate } from 'react-router-dom';

export const RoomPage = () => {
    const roomsColumns = [
        { headerColumn: 'Image', columnsData: 'image', columnRenderer: (row) => <img src={row.image} width="100" alt="Room" /> },
        { headerColumn: 'Information', columnsData: 'information', columnRenderer: (row) => `Room ${row.roomNumber} - ID: ${row.id}` },
        { headerColumn: 'Room Type', columnsData: 'roomType' },
        { headerColumn: 'Amenities', columnsData: 'amenities', columnRenderer: (row) => row.amenities.join(', ') },
        { headerColumn: 'Price', columnsData: 'price' },
        { headerColumn: 'Offer Price', columnsData: 'offerPrice' },
        {
            headerColumn: 'Status',
            columnsData: 'status',
            columnRenderer: (row) => (
                <ButtonStyles styled={row.availability === 'available' ? 'roomAvailable' : 'roomBooked'}>
                    {row.availability === 'available' ? 'Available' : 'Booked'}
                </ButtonStyles>
            )
        },
        {
            headerColumn: 'Action',
            columnsData: 'action',
            columnRenderer: (row) => (
                <>
                    <MdOutlineEdit onClick={() => handleEditRoom(row.id)} />
                    <AiOutlineDelete onClick={() => handleDeleteRoom(row.id)} />
                </>
            )
        },
    ];

    const roomStatus = useSelector(getRoomsStatus) || 'idle';
    const roomsError = useSelector(getRoomsError) || null;
    const roomsList = useSelector(getRoomsList) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (roomStatus === 'idle') {
            dispatch(RoomsThunk());
        } else if (roomStatus === 'rejected') {
            console.error('Error fetching rooms:', roomsError);
        }
    }, [dispatch, roomStatus, roomsError]);

    useEffect(() => {
        sortRoomsHandler('roomNumber');
    }, [roomsList]);

    const sortRoomsHandler = (value) => {
        let sortedRooms = [...roomsList];

        if (value === 'roomNumber') {
            sortedRooms = sortedRooms.sort((a, b) => {
                const numA = a.roomNumber.toString();
                const numB = b.roomNumber.toString();
                return numA.localeCompare(numB);
            });
        } else if (value === 'availability') {
            sortedRooms = sortedRooms.filter(room => room.availability === 'available');
        } else if (value === 'booked') {
            sortedRooms = sortedRooms.filter(room => room.availability === 'booked');
        } else if (value === 'lowestPrice') {
            sortedRooms = sortedRooms.sort((a, b) => a.price - b.price);
        } else if (value === 'highestPrice') {
            sortedRooms = sortedRooms.sort((a, b) => b.price - a.price);
        } else if (value === 'id') {
            sortedRooms = sortedRooms.sort((a, b) => a.id - b.id);
        }

    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        sortRoomsHandler(value);
    };

    const handleListClick = () => {
        sortRoomsHandler('id');
    };

    const handleEditRoom = (roomId) => {
        navigate(`/roomsEdit/${roomId}`);
    };

    const handleDeleteRoom = (roomId) => {
        dispatch(deleteRoom(roomId));
    };


    const handleNewRoom = () => {
        navigate('/newRooms');
    };

    return (
        <NavbarComponent>
            {roomStatus === 'pending' ? <p>Loading...</p> : roomStatus === 'rejected' ? <p>Error loading rooms...</p> :
                <>
                    <SectionOrder>
                        <List>
                            <ItemList onClick={handleListClick}>All Rooms</ItemList>
                        </List>
                        <ButtonStyles styled='new' onClick={handleNewRoom}>+ New Room</ButtonStyles>
                        <SelectStyled onChange={handleSortChange}>
                            <option value='roomNumber'>Room Number</option>
                            <option value='availability'>Available</option>
                            <option value='booked'>Booked</option>
                            <option value='lowestPrice'>Price Lowest to Highest</option>
                            <option value='highestPrice'>Price Highest to Lowest</option>
                        </SelectStyled>
                    </SectionOrder>
                    <TableComponent columns={roomsColumns} data={roomsList} />
                </>
            }
        </NavbarComponent>
    );
};
