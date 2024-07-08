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
            slidesPerView: 2, 
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }, []);

    return (
        <CardContentBackgroundStyles>
            <div className="swiper swiper-arrowFacilities">
                <div className="swiper-wrapper">
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
                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </CardContentBackgroundStyles>
    );
};
