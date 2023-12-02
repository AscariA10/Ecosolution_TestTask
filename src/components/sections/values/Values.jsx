import { SectionTitle } from "../../common-components/SectionTitle";
import { ValueCard } from "./ValueCard/ValueCard";

import { Definition, Section, ValuesWrapper, Thumb, TitleWrapper } from "./Values.styled";
import { Container } from "../../common-styles/common-styles.styled";

import { Innovation } from "../../../assets/svg-components/values/Innovation";
import { Openness } from "../../../assets/svg-components/values/Openness";
import { Quality } from "../../../assets/svg-components/values/Quality";
import { Responsibility } from "../../../assets/svg-components/values/Responsibility";

import solar from "../../../assets/images/values/solar-tablet.jpg";
import turbine from "../../../assets/images/values/turbine-tablet.jpg";
import solarDesktop from "../../../assets/images/values/solar-desktop.jpg";
import turbineDesktop from "../../../assets/images/values/turbine-desktop.jpg";

export const Values = () => {
   return (
      <Section>
         <Container>
            <TitleWrapper>
               <SectionTitle title="main values of our company" />
               <Definition>
                  EcoSolution envisions a world where sustainable energy solutions power a brighter
                  and cleaner future for all. We aspire to be at the forefront of the global shift
                  towards renewable energy, leading the way in innovative technologies that harness
                  the power of nature to meet the world's energy needs.
               </Definition>
            </TitleWrapper>
            <ValuesWrapper>
               <ValueCard
                  title="Openness"
                  description="to the world, people, new ideas and projects"
               >
                  <Openness
                     width={{ mobile: "16px", desktop: "24px" }}
                     height={{ mobile: "16px", desktop: "24px" }}
                  />
               </ValueCard>
               <ValueCard
                  title="Responsibility"
                  description="we are aware that the results of our work have an impact on our lives and the lives of future generations"
               >
                  <Responsibility
                     width={{ mobile: "16px", desktop: "24px" }}
                     height={{ mobile: "16px", desktop: "24px" }}
                  />
               </ValueCard>
               <ValueCard
                  title="Innovation"
                  description="we use the latest technology to implement non-standard solutions"
               >
                  <Innovation
                     width={{ mobile: "16px", desktop: "24px" }}
                     height={{ mobile: "16px", desktop: "24px" }}
                  />
               </ValueCard>
               <ValueCard
                  title="Quality"
                  description="we do not strive to be the first among others, but we want to be the best in our business"
               >
                  <Quality
                     width={{ mobile: "16px", desktop: "24px" }}
                     height={{ mobile: "16px", desktop: "24px" }}
                  />
               </ValueCard>
               <Thumb>
                  <picture>
                     <source media="(min-width: 1280px)" srcSet={`${solarDesktop}`} />
                     <img src={solar} />
                  </picture>
               </Thumb>
               <Thumb>
                  <picture>
                     <source media="(min-width: 1280px)" srcSet={`${turbineDesktop}`} />
                     <img src={turbine} />
                  </picture>
               </Thumb>
            </ValuesWrapper>
         </Container>
      </Section>
   );
};
