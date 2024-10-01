
import React, { useState, ReactNode, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage, TbCalendarCheck } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { SlKey } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
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
import { PopupUserComponent } from "../popupUserComponent/popupUserComponent";
import { UserContext } from '../../context/userContext';

interface NavbarComponentProps {
    children: ReactNode;
}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({ children }) => {
    const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error("UserContext no encontrado");
    }

    const { state } = userContext;

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
                                    <ImgLogoStyles src="../logo.png" alt="" />
                                    <div>
                                        <TravelStyles>travl</TravelStyles>
                                        <HotelStyles>Hotel Admin Dashboard</HotelStyles>
                                    </div>
                                </LogoContentStyles>

                                <UlStyles>
                                    <LiStyles>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <RiDashboardLine />
                                            <PLiStyles>Dashboard</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink
                                            to="/bookings"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <TbCalendarCheck />
                                            <PLiStyles>Bookings</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink
                                            to="/rooms"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <SlKey />
                                            <PLiStyles>Room</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink
                                            to="/contact"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <GrContactInfo />
                                            <PLiStyles>Contact</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                    <LiStyles>
                                        <NavLink
                                            to="/users"
                                            className={({ isActive }) => (isActive ? "active" : "")}
                                        >
                                            <BsPerson />
                                            <PLiStyles>Users</PLiStyles>
                                        </NavLink>
                                    </LiStyles>
                                </UlStyles>

                                <UserStyles>
                                    <PhotoStyles src="../photo.jpg" alt="" />
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
                                    <CopyFooterStyles>© 2020 Todos los derechos reservados</CopyFooterStyles>
                                    <MadebyFooterStyles>Hecho por Lucia Macho</MadebyFooterStyles>
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