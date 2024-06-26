import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { SlKey } from "react-icons/sl";
import { TbCalendarCheck } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
import { IconStyles, DashboarStyles, NavbarTopStyles, FooterStyles, UserStyles, PLiStyles, MenuLeftStyles, NavbarStyles, PStyles, DivLeftStyles, LogoContentStyles, ImgLogoStyles, TravelStyles, HotelStyles, LiStyles, UlStyles } from "./navbarStyles";
import { useState } from 'react';
import './stylesNavbar.css';



export const NavbarComponent = () => {

    const [menuOpen, setIsMenulOpen] = useState(false);


    const handleClick = () => {
        setIsMenulOpen(!menuOpen);
    };

    return (
        <>
            <NavbarStyles className="a">
                <DivLeftStyles className="b">
                    {menuOpen && (
                        <MenuLeftStyles className="c">
                            <div >
                                <LogoContentStyles>
                                    <ImgLogoStyles src="src/assets/img/logo.png" alt="" />
                                    <div>
                                        <TravelStyles>travl</TravelStyles>
                                        <HotelStyles>Hotel Admin Dashboard</HotelStyles>
                                    </div>

                                </LogoContentStyles>

                                <UlStyles>
                                    <LiStyles>
                                        <RiDashboardLine />
                                        <PLiStyles>Dashboard</PLiStyles>
                                    </LiStyles>

                                    <LiStyles>
                                        <TbCalendarCheck />
                                        <PLiStyles>Bookings</PLiStyles>
                                    </LiStyles>

                                    <LiStyles>
                                        <SlKey />
                                        <PLiStyles>Room</PLiStyles>
                                    </LiStyles>

                                    <LiStyles>
                                        <GrContactInfo />
                                        <PLiStyles>Contact</PLiStyles>
                                    </LiStyles>

                                    <LiStyles>
                                        <BsPerson />
                                        <PLiStyles>Users</PLiStyles>
                                    </LiStyles>
                                </UlStyles>

                                <UserStyles>
                                    <img src="/assets/user.jpeg" />
                                    <p>Lucia Macho Sánchez</p>
                                    <p>luciamacho00@gmail.com</p>
                                    <button>Contact Us</button>
                                </UserStyles>
                                <FooterStyles>
                                    <p>Travl Hotel Admin Dashboard</p>
                                    <p>© 2020 All Rights Reserved</p>
                                    <p>Made by Lucia Macho</p>
                                </FooterStyles>

                            </div>
                        </MenuLeftStyles>
                    )}

                </DivLeftStyles>

                <NavbarTopStyles className="d">
                    <DashboarStyles>
                        <TfiAlignLeft onClick={handleClick} />
                        <PStyles>Dashboard</PStyles>
                    </DashboarStyles>



                    <IconStyles>
                        <IoIosSearch className="icons" />

                        <IoMdHeartEmpty className="icons" />


                        <MdOutlineMail className="icons" />

                        <TbMessage className="icons" />

                        <img src="" alt="Profile icon" />

                    </IconStyles>
                </NavbarTopStyles>

            </NavbarStyles>

        </>

    )
}