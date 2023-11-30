import { LightButton } from "../../common-components/LightButton";

import { Container } from "../../common-styles/common-styles.styled";
import {
   Copyright,
   HeroTitle,
   Section,
   Thumb,
   Picture,
   Definition,
   Address,
   AddressWrapper,
   Email,
   HeroWrapper,
} from "./Hero.styled";

import { ArrowRight } from "../../../assets/svg-components/ArrowRight";

import maskGroup from "../../../assets/images/hero/mask-group.jpg";
import maskGroup2x from "../../../assets/images/hero/mask-group@2x.jpg";
import maskGroupTablet from "../../../assets/images/hero/mask-group-tablet.jpg";
import maskGroupTablet2x from "../../../assets/images/hero/mask-group-tablet@2x.jpg";
import maskGroupDesktop from "../../../assets/images/hero/mask-group-desktop.jpg";
import maskGroupDesktop2x from "../../../assets/images/hero/mask-group-desktop@2x.jpg";

export const Hero = () => {
   return (
      <Container>
         <Section>
            <HeroWrapper>
               <HeroTitle>renewable energy for any task</HeroTitle>
               <Definition>
                  Development and implementation of renewable non-polluting energy sources,
                  generating power generation using energy wind, sun, water, biomass
               </Definition>
               <LightButton
                  title="Learn more"
                  marginTop={{ mobile: "auto", tablet: "43px", desktop: "20px" }}
                  marginBottom={{ mobile: "49px", tablet: "43px" }}
                  marginLeft={{ mobile: "auto", tablet: "0" }}
               >
                  <ArrowRight />
               </LightButton>
            </HeroWrapper>
            <AddressWrapper>
               <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
               <Email href="mailto: office@ecooptima.com.ua">office@ecosolution.com</Email>
               <Copyright>ecosolution &copy; 2023</Copyright>
            </AddressWrapper>
            <Thumb>
               <Picture>
                  <source
                     media="(min-width: 1280px)"
                     srcSet={`${maskGroupDesktop} 1x, ${maskGroupDesktop2x} 2x`}
                  />
                  <source
                     media="(min-width: 768px)"
                     srcSet={`${maskGroupTablet} 1x, ${maskGroupTablet2x} 2x`}
                  />
                  <source srcSet={`${maskGroup2x} 2x`} />
                  <img src={maskGroup} />
               </Picture>
            </Thumb>
         </Section>
      </Container>
   );
};
