import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { MenuLeftStyles, NavbarStyles, PStyles, DivLeftStyles, LogoContentStyles, ImgLogoStyles, TravelStyles, HotelStyles } from "./navbarStyles";
import { useState } from 'react';
import './stylesNavbar.css';


export const NavbarComponent = () => {

    const [menuOpen, setIsMenulOpen] = useState(false);


    const handleClick = () => {
        setIsMenulOpen(!menuOpen);
    };

    return (

        <NavbarStyles>
            <DivLeftStyles>
                {menuOpen && (
                    <MenuLeftStyles>
                        <div className="NavbarOpen">
                            <LogoContentStyles>
                            <ImgLogoStyles src="src/assets/img/logo.png" alt="" />
                            <div>
                            <TravelStyles>travl</TravelStyles>
                            <HotelStyles>Hotel Admin Dashboard</HotelStyles>
                            </div>
                                
                            </LogoContentStyles>

                        </div>
                    </MenuLeftStyles>
                )}



                <TfiAlignLeft onClick={handleClick} />
                <PStyles>Dashboard</PStyles>
            </DivLeftStyles>



            <div>
                <IoIosSearch className="icons" />

                <IoMdHeartEmpty className="icons" />


                <MdOutlineMail className="icons" />

                <TbMessage className="icons" />

                <img src="" alt="Profile icon" />

            </div>
        </NavbarStyles>
    )
}