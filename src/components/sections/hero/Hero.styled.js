import styled from "@emotion/styled";
import { colors } from "../../common-styles/colors";

export const HeroTitle = styled.h1`
   display: block;
   width: 320px;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: 24px;

   text-transform: uppercase;
   font-family: "Oswald", sans-serif;
   font-size: 36px;
   font-weight: 400;
   line-height: 1;
`;

export const Section = styled.section`
   padding-top: 110px;
   padding-bottom: 18px;
`;

export const Definition = styled.p`
   width: 320px;
   margin-bottom: 24px;

   text-align: justify;
   font-size: 16px;
   line-height: 1.3;
   letter-spacing: -0.039em;
`;

export const Thumb = styled.div`
   width: 320px;
   margin: 0 auto;
   @media screen and (min-width: 480px) {
      width: 480px;
   }

   @media screen and (min-width: 768px) {
      width: 708px;
   }

   @media screen and (min-width: 1280px) {
      width: 1280px;
   }
`;

export const Picture = styled.picture`
   display: block;
   max-width: 100%;
`;
