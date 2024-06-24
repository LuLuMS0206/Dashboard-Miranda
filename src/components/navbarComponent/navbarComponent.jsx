import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { NavbarStyles } from "../navbarStyles";



export const NavbarComponent = () => {

    return (

        <NavbarStyles>
            <TfiAlignLeft />
            <p>Dashboard</p>

            <div>
            <IoIosSearch />
            
            <IoMdHeartEmpty />
            
            
            <MdOutlineMail />

            <TbMessage />
            <img src=""  alt="Profile icon"/>
    
            </div>
        </NavbarStyles>
    )
}