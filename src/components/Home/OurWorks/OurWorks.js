import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import './OurWorks.css'


const OurWorks = () => {

    const imageURL = [
        {
            image: `${carousel1}`,
        },
        {
            image: `${carousel2}`,
        },
        {
            image: `${carousel3}`,
        },
        {
            image: `${carousel4}`,
        },
        {
            image: `${carousel5}`,
        },
    ];

    const settings = {
        dots: true,
		arrows: false,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		pauseOnHover: true,
		infinite: true,
		centerMode: true,
		centerPadding: "150px",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					centerPadding: "50px",
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
		],

    }
    return (
        <div className="works py-5">
            <h1 className="section-title text-white text-center pt-xl-5">
                Here are some of <span style={{ color: 'green' }}>our works</span>
            </h1>
            <div className="py-xl-5 py-2">
                <Slider {...settings} className="pt-3 pb-5">
                    {imageURL.map((work) => (
                        <div className="works-slide">
                            <img style={{height:'350px', width:'500px'}} src={work.image} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
};


export default OurWorks;