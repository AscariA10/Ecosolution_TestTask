import { SectionTitle } from "../../common-components/SectionTitle";

import { Counter } from "./counter/Counter";

import { Section } from "./ElectricityIndicator.styled";
import { Container } from "../../common-styles/common-styles.styled";

export const ElectricityIndicator = () => {
   return (
      <Section>
         <Container>
            <SectionTitle
               title="Electricity we produced for all time"
               textAlign="center"
               marginLeft="auto"
               marginBottom={{ tablet: "24px", desktop: "16px" }}
               width={{ mobile: "286px", tablet: "368px", desktop: "491px" }}
            />
            <Counter></Counter>
         </Container>
      </Section>
   );
};
