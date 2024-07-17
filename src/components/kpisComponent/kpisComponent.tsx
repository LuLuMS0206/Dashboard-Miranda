// import { IoBedOutline } from "react-icons/io5";
// import { BsBoxArrowInRight } from "react-icons/bs";
// import { BsBoxArrowInLeft } from "react-icons/bs";
// import { LuCalendarCheck2 } from "react-icons/lu";
// import { KpisComponentStyled, KpisCardStyled, IconStyled, KpisTextStyled, KpisH3Styled} from "./kpisStyles";
// import './stylesKpis.css';

// export const KpisComponent = () => {



//     return(
//         <KpisComponentStyled >
//             <KpisCardStyled>
//                 <IconStyled className="iconBackground">
//                 <IoBedOutline className="icon" />
//                 </IconStyled>

//                 <div>
//                     <KpisH3Styled>8,461</KpisH3Styled>
//                     <KpisTextStyled >New Booking</KpisTextStyled>
//                 </div>

//             </KpisCardStyled>

//             <KpisCardStyled>
//                 <IconStyled className="iconBackground">
//                 <LuCalendarCheck2 className="icon" />
//                 </IconStyled>

//                 <div>
//                     <KpisH3Styled>963</KpisH3Styled>
//                     <KpisTextStyled >Scheduled Room</KpisTextStyled>
//                 </div>

//             </KpisCardStyled>

//             <KpisCardStyled>
//                 <IconStyled className="iconBackground">
//                 <BsBoxArrowInRight className="icon"/> 
//                 </IconStyled>

//                 <div>
//                     <KpisH3Styled>753</KpisH3Styled>
//                     <KpisTextStyled >Check In</KpisTextStyled>
//                 </div>

//             </KpisCardStyled>

//             <KpisCardStyled>
//                 <IconStyled className="iconBackground">
//                 <BsBoxArrowInLeft className="icon" />
//                 </IconStyled>

//                 <div>
//                     <KpisH3Styled>516</KpisH3Styled>
//                     <KpisTextStyled >Check Out</KpisTextStyled>
//                 </div>

//             </KpisCardStyled>

//         </KpisComponentStyled>
//     )
// }

import React from 'react';
import { IoBedOutline } from "react-icons/io5";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
    KpisComponentStyled,
    KpisCardStyled,
    IconStyled,
    KpisTextStyled,
    KpisH3Styled
} from "./kpisStyles";
import './stylesKpis.css';

export const KpisComponent: React.FC = () => {
    return (
        <KpisComponentStyled>
            <KpisCardStyled>
                <IconStyled className="iconBackground">
                    <IoBedOutline className="icon" />
                </IconStyled>
                <div>
                    <KpisH3Styled>8,461</KpisH3Styled>
                    <KpisTextStyled>New Booking</KpisTextStyled>
                </div>
            </KpisCardStyled>

            <KpisCardStyled>
                <IconStyled className="iconBackground">
                    <LuCalendarCheck2 className="icon" />
                </IconStyled>
                <div>
                    <KpisH3Styled>963</KpisH3Styled>
                    <KpisTextStyled>Scheduled Room</KpisTextStyled>
                </div>
            </KpisCardStyled>

            <KpisCardStyled>
                <IconStyled className="iconBackground">
                    <BsBoxArrowInRight className="icon" />
                </IconStyled>
                <div>
                    <KpisH3Styled>753</KpisH3Styled>
                    <KpisTextStyled>Check In</KpisTextStyled>
                </div>
            </KpisCardStyled>

            <KpisCardStyled>
                <IconStyled className="iconBackground">
                    <BsBoxArrowInLeft className="icon" />
                </IconStyled>
                <div>
                    <KpisH3Styled>516</KpisH3Styled>
                    <KpisTextStyled>Check Out</KpisTextStyled>
                </div>
            </KpisCardStyled>
        </KpisComponentStyled>
    );
};
