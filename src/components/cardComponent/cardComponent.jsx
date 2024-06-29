import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CardContentBackgroundStyles, CardImgStyles, CardStyles, IconsStyles, CardContentStyles, CardNameStyles, CardTimeStyles, CardTextStyles } from "./cardStyles";
import './stylesCard.css';


export const CardComponent = () => {


    return (
        <CardContentBackgroundStyles>
            <div className="cardContent">
            
                <CardStyles>
                    <CardTextStyles className="Card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardTextStyles>
                    <CardContentStyles>
                        <CardImgStyles src="src/assets/img/person.jpg" alt="" />
                        <div>
                            <CardNameStyles>Kusnaidi Anderson</CardNameStyles>
                            <CardTimeStyles>4m ago</CardTimeStyles>
                        </div>

                        <IconsStyles>
                        <IoCheckmarkCircleOutline className="iconCheck" />
                        <IoIosCloseCircleOutline className="iconClose"/>
                        </IconsStyles>
                    </CardContentStyles>
                </CardStyles>
            </div>
            </CardContentBackgroundStyles>)}




/* <!-- Slider main container-- >
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div className="cardContent">
                <CardStyles>
                    <CardTextStyles className="Card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardTextStyles>
                    <CardContentStyles>
                        <CardImgStyles src="src/assets/img/person.jpg" alt="" />
                        <div>
                            <CardNameStyles>Kusnaidi Anderson</CardNameStyles>
                            <CardTimeStyles>4m ago</CardTimeStyles>
                        </div>

                        <IconsStyles>
                        <IoCheckmarkCircleOutline className="iconCheck" />
                        <IoIosCloseCircleOutline className="iconClose"/>
                        </IconsStyles>
                    </CardContentStyles>
                </CardStyles>

            </div>
            <div className="cardContent">
                <CardStyles>
                    <CardTextStyles className="Card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardTextStyles>
                    <CardContentStyles>
                        <CardImgStyles src="src/assets/img/person.jpg" alt="" />
                        <div>
                            <CardNameStyles>Kusnaidi Anderson</CardNameStyles>
                            <CardTimeStyles>4m ago</CardTimeStyles>
                        </div>

                        <IconsStyles>
                        <IoCheckmarkCircleOutline className="iconCheck" />
                        <IoIosCloseCircleOutline className="iconClose"/>
                        </IconsStyles>
                    </CardContentStyles>
                </CardStyles>


            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    )
} */
        



