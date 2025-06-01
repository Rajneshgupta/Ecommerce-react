import React from 'react'
import bannerone from "../../../asset/download/home-banner1.jpeg";
import bannertwo from "../../../asset/download/home-banner2.jpeg";
import bannerthree from "../../../asset/download/home-banner3.jpeg";
import bannerfour from "../../../asset/download/home-banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const Banner = () => {
    const banners = [
        { image: bannerone, link: "/product/1" },
        { image: bannertwo, link: "/product/2" },
        { image: bannerthree, link: "/product/3" },
        { image: bannerfour, link: "/product/4" },
    ];
    return (
        <div>
            <div className="slider-container py-3">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade, EffectCube]}
                    slidesPerView={1}
                    effect="cube"
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={5000}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <Link to={banner.link}>
                                <div className='img-banner'>
                                    <img
                                        src={banner.image}
                                        alt={`Banner ${index + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

                                </div>
                                <div className={`content`}>
                                    <div>
                                        <h3 className={`${index ===1 || index===3?"text-dark":""}`}>Banner</h3>
                                        <p>While Swiper doesn't have an out-of-the-box "page-turn" effect, the closest you can get </p>
                                    </div>
                                    <button className='btn btn-primary text-uppercase'>SHow Now</button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Banner