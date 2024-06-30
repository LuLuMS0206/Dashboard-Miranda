import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
    CardContentBackgroundStyles,
    CardImgStyles,
    CardStyles,
    IconsStyles,
    CardContentStyles,
    CardNameStyles,
    CardTimeStyles,
    CardTextStyles,
} from "./cardStyles";
import { useEffect } from 'react';

export const CardComponent = () => {
    useEffect(() => {
        const swiperArrowTest = new Swiper(".swiper-arrowFacilities", {
            direction: "horizontal",
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }, []); // Se ejecuta solo una vez después del montaje inicial

    return (
        <CardContentBackgroundStyles>

            <div className="swiper swiper-arrowFacilities">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"> <div className="cardContent">

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
                                    <IoIosCloseCircleOutline className="iconClose" />
                                </IconsStyles>
                            </CardContentStyles>
                        </CardStyles>
                    </div></div>
                    <div className="swiper-slide">
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
                                        <IoIosCloseCircleOutline className="iconClose" />
                                    </IconsStyles>
                                </CardContentStyles>
                            </CardStyles>
                        </div>
                    </div>
                    <div className="swiper-slide"><div className="cardContent">

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
                                    <IoIosCloseCircleOutline className="iconClose" />
                                </IconsStyles>
                            </CardContentStyles>
                        </CardStyles>
                    </div></div>
                </div>

                <div className="swiper-scrollbar"></div>
            </div>
            {/* <div className="cardContent">

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
            </div> */}
        </CardContentBackgroundStyles>



    );
};



//     <div className="swiper swiper-arrowFacilities">
//         <div className="swiper-wrapper">
//             <div className="swiper-slide">Slide 1</div>
//             <div className="swiper-slide">Slide 2</div>
//             <div className="swiper-slide">Slide 3</div>
//         </div>

//         <div className="swiper-scrollbar"></div>
//     </div>