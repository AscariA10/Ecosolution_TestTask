import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import { SliderCard } from "../slider-card/SliderCard";
import { SliderContainer } from "./SuccessfulSlider.styled";

export const SuccessfulSlider = () => {
   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
   return (
      <SliderContainer>
         <Slider {...settings}>
            <SliderCard />
            <div>
               <span>2</span>
            </div>
            <div>
               <span>3</span>
            </div>
            <div>
               <span>4</span>
            </div>
            <div>
               <span>5</span>
            </div>
            <div>
               <span>6</span>
            </div>
         </Slider>
      </SliderContainer>
   );
};
