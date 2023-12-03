import { SectionTitle } from "../../common-components/SectionTitle";
import { SuccessfulSlider } from "./slider/SuccessfulSlider";
import { SlideButton } from "./slide-button/SlideButton";

import { Container } from "../../common-styles/common-styles.styled";
import { Section } from "./SuccessfulCases.styled";

import { ArrowLeft } from "../../../assets/svg-components/ArrowLeft";
import { ArrowRight } from "../../../assets/svg-components/ArrowRight";

export const SuccessfulCases = () => {
   return (
      <Section>
         <Container>
            <SectionTitle
               title="successful cases of our company"
               width={{ mobile: "264px", tablet: "272px", desktop: "365px" }}
            />
            <SuccessfulSlider></SuccessfulSlider>
         </Container>
      </Section>
   );
};

{
   /* <SlideButton>
               <ArrowLeft width={{ mobile: "36px" }} height={{ mobile: "36px" }} />
            </SlideButton>
            <SlideButton>
               <ArrowRight width={{ mobile: "36px" }} height={{ mobile: "36px" }} />
            </SlideButton> */
}
