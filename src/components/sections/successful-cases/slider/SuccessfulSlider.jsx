import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import { SliderCard } from "../slider-card/SliderCard";
import { SliderContainer } from "./SuccessfulSlider.styled";

import { SlideButton } from "../slide-button/SlideButton";

import { ArrowLeft } from "../../../../assets/svg-components/ArrowLeft";
import { ArrowRight } from "../../../../assets/svg-components/ArrowRight";
import turbines from "../../../../assets/images/cases/turbines-mobile.jpg";

export const SuccessfulSlider = () => {
   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "50px",
      arrows: true,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
      prevArrow: (
         <SlideButton
            position={{
               top: { mobile: "-92px", tablet: "-105px", desktop: "-206px" },
               right: { mobile: "78px", desktop: "108px" },
            }}
         >
            <ArrowLeft width={{ mobile: "36px" }} height={{ mobile: "36px" }} />
         </SlideButton>
      ),
      nextArrow: (
         <SlideButton
            position={{
               top: { mobile: "-92px", tablet: "-105px", desktop: "-206px" },
               right: { mobile: "0px" },
            }}
         >
            <ArrowRight width={{ mobile: "36px" }} height={{ mobile: "36px" }} />
         </SlideButton>
      ),
   };
   return (
      <SliderContainer>
         <Slider {...settings}>
            <SliderCard image={turbines} />
            <SliderCard image={turbines} />
            <SliderCard image={turbines} />
            <SliderCard image={turbines} />
            <SliderCard image={turbines} />
            <SliderCard image={turbines} />
         </Slider>
      </SliderContainer>
   );
};
