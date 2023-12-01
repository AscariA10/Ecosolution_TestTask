import { SectionTitle } from "../../common-components/SectionTitle";
import { ValueCard } from "./ValueCard/ValueCard";

import { Container } from "../../common-styles/common-styles.styled";

import { Definition, Section, ValueList } from "./Values.styled";

import { Innovation } from "../../../assets/svg-components/values/Innovation";
import { Openness } from "../../../assets/svg-components/values/Openness";
import { Quality } from "../../../assets/svg-components/values/Quality";
import { Responsibility } from "../../../assets/svg-components/values/Responsibility";

export const Values = () => {
   return (
      <Container>
         <Section>
            <SectionTitle title="main values of our company" />
            <Definition>
               EcoSolution envisions a world where sustainable energy solutions power a brighter and
               cleaner future for all. We aspire to be at the forefront of the global shift towards
               renewable energy, leading the way in innovative technologies that harness the power
               of nature to meet the world's energy needs.
            </Definition>
            <ValueList>
               <ValueCard
                  title="Openness"
                  description="to the world, people, new ideas and projects"
               >
                  <Openness />
               </ValueCard>
               <ValueCard
                  title="Responsibility"
                  description="we are aware that the results of our work have an impact on our lives and the lives of future generations"
               >
                  <Responsibility />
               </ValueCard>
               <ValueCard
                  title="Innovation"
                  description="we use the latest technology to implement non-standard solutions"
               >
                  <Innovation />
               </ValueCard>
               <ValueCard
                  title="Quality"
                  description="we do not strive to be the first among others, but we want to be the best in our business"
               >
                  <Quality />
               </ValueCard>
            </ValueList>
         </Section>
      </Container>
   );
};
