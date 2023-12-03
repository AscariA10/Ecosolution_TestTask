import { SectionTitle } from "../../common-components/SectionTitle";
import { SuccessfulSlider } from "./slider/Slider";

import { Container } from "../../common-styles/common-styles.styled";

export const SuccessfulCases = () => {
   return (
      <section>
         <Container>
            <SectionTitle
               title="successful cases of our company"
               width={{ mobile: "264px", tablet: "272px", desktop: "365px" }}
            />
            <SuccessfulSlider></SuccessfulSlider>
         </Container>
      </section>
   );
};
