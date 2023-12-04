import { PageLogoWrapper } from "../header/Header.styled";
import { Container } from "../common-styles/common-styles.styled";

import {
   FooterWrapper,
   Button,
   Address,
   Email,
   Copyright,
   SocialMediaContainer,
   SocialMediaLink,
   FooterContainer,
} from "./Footer.styled";

import { PageLogo } from "../../assets/svg-components/PageLogo";
import { ArrowUp } from "../../assets/svg-components/ArrowUp";

import { Facebook } from "../../assets/svg-components/contacts/Facebook";
import { Instagram } from "../../assets/svg-components/contacts/Instagram";

export const Footer = () => {
   return (
      <FooterContainer>
         <Container>
            <FooterWrapper>
               <PageLogoWrapper>
                  <PageLogo />
               </PageLogoWrapper>
               <Button>
                  <ArrowUp />
               </Button>
            </FooterWrapper>
            <SocialMediaContainer>
               <SocialMediaLink href="">
                  <Facebook />
               </SocialMediaLink>
               <SocialMediaLink href="">
                  <Instagram />
               </SocialMediaLink>
            </SocialMediaContainer>
            <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
            <Email>office@ecosolution.com</Email>
            <Copyright>ecosolution &copy; 2023</Copyright>
         </Container>
      </FooterContainer>
   );
};
