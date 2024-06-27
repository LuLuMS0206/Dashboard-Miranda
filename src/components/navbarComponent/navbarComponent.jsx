// src/components/navbarComponent/navbarComponent.jsx
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

import { useState } from "react";
import "./stylesNavbar.css";
import { ButtonStyles } from "../buttonComponent/buttonComponent";
import { KpisComponent } from "../kpisComponent/kpisComponent";


export const NavbarComponent = () => {
    const [menuOpen, setIsMenulOpen] = useState(false);

    const handleClick = () => {
        setIsMenulOpen(!menuOpen);
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
                                    <PhotoStyles src="src/assets/img/photo.jpg" alt="" />
                                    <NameStyles>Lucia Macho Sánchez</NameStyles>
                                    <EmailStyles>luciamacho00@gmail.com</EmailStyles>
                                    <ButtonStyles styled="contact">Edit User</ButtonStyles>
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
                            {/* <PhotoStyles src="src/assets/img/photo.jpg" alt=""/> */}
                        </IconStyles>
                    </NavbarTopStyles>

                    <KpisComponent /> {/* Aquí va tu componente de KPIs */}
                </MainContentStyles>
            </NavbarStyles>
        </>
    );
};
