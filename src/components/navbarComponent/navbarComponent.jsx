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
import { NavLink, useNavigate } from "react-router-dom";
import { HiLogin } from "react-icons/hi";

import {
    MadebyFooterStyles,
    CopyFooterStyles,
    TravelFooterStyles,
    NameStyles,
    EmailStyles,
    PhotoStyles,
    IconStyles,
    DashboarStyles,
    NavbarTopStyles,
    FooterStyles,
    UserStyles,
    PLiStyles,
    MenuLeftStyles,
    NavbarStyles,
    PStyles,
    DivLeftStyles,
    LogoContentStyles,
    ImgLogoStyles,
    TravelStyles,
    HotelStyles,
    LiStyles,
    UlStyles,
    MainContentStyles
} from "./navbarStyles";

import "./stylesNavbar.css";
import { ButtonStyles } from "../buttonComponent/buttonComponent";
import { PopupUserComponent } from "../popupUserComponent/popupUserComponent.jsx";

import { useContext, useState } from "react";
import { UserContext } from '../../context/userContext.jsx'; 


export const NavbarComponent = ({ children }) => {
    const [menuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { state } = useContext(UserContext);

    const handleClick = () => {
        setIsMenuOpen(!menuOpen);
    };

    const handleLogoutClick = () => {
        navigate('/login');
    };

    const handleEditUserClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <NavbarStyles>
                <DivLeftStyles isOpen={menuOpen}>
                    {menuOpen && (
                        <MenuLeftStyles>
                            <div>
                                <LogoContentStyles>
                                    <ImgLogoStyles src="src/assets/img/logo.png" alt="" />
                                    <div>
                                        <TravelStyles>travl</TravelStyles>
                                        <HotelStyles>Hotel Admin Dashboard</HotelStyles>
                                    </div>
                                </LogoContentStyles>

                                <UlStyles>
                                    <LiStyles>
                                        <NavLink to="/" activeClassName="active">
                                            <RiDashboardLine />
                                            <PLiStyles>Dashboard</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink to="/bookings" activeClassName="active">
                                            <TbCalendarCheck />
                                            <PLiStyles>Bookings</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink to="/rooms" activeClassName="active">
                                            <SlKey />
                                            <PLiStyles>Room</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink to="/contact" activeClassName="active">
                                            <GrContactInfo />
                                            <PLiStyles>Contact</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink to="/users" activeClassName="active">
                                            <BsPerson />
                                            <PLiStyles>Users</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                </UlStyles>

                                <UserStyles>
                                    <PhotoStyles src="src/assets/img/photo.jpg" alt="" />
                                    <NameStyles>{state.name}</NameStyles>
                                    <EmailStyles>{state.email}</EmailStyles>
                                    <ButtonStyles styled="contact" onClick={handleEditUserClick}>
                                        Edit User
                                    </ButtonStyles>
                                </UserStyles>
                                <FooterStyles>
                                    <TravelFooterStyles>
                                        Travl Hotel Admin Dashboard
                                    </TravelFooterStyles>
                                    <CopyFooterStyles>© 2020 All Rights Reserved</CopyFooterStyles>
                                    <MadebyFooterStyles>Made by Lucia Macho</MadebyFooterStyles>
                                </FooterStyles>
                            </div>
                        </MenuLeftStyles>
                    )}
                </DivLeftStyles>

                <MainContentStyles isOpen={menuOpen}>
                    <NavbarTopStyles isOpen={menuOpen}>
                        <DashboarStyles>
                            <TfiAlignLeft onClick={handleClick} />
                            <PStyles>Dashboard</PStyles>
                        </DashboarStyles>
                        <IconStyles>
                            <IoIosSearch className="icons" />
                            <IoMdHeartEmpty className="icons" />
                            <MdOutlineMail className="icons" />
                            <TbMessage className="icons" />
                            <HiLogin className="icons" onClick={handleLogoutClick} />
                        </IconStyles>
                    </NavbarTopStyles>

                    {children}
                </MainContentStyles>
            </NavbarStyles>
            <PopupUserComponent isOpen={isPopupOpen} onClose={handleClosePopup} />
        </>
    );
};

