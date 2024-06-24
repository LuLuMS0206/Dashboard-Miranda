import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { DivLeftStyles, NavbarStyles, PStyles } from "../navbarStyles";



export const NavbarComponent = () => {

    return (

        <NavbarStyles>

            <DivLeftStyles>
                <TfiAlignLeft />
                <PStyles>Dashboard</PStyles>
            </DivLeftStyles>


            <div>
                <IoIosSearch />

                <IoMdHeartEmpty />


                <MdOutlineMail />

                <TbMessage />
                <img src="" alt="Profile icon" />

            </div>
        </NavbarStyles>
    )
}