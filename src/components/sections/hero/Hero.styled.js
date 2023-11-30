import styled from "@emotion/styled";

import { LightButton } from "../../common-components/LightButton";

import { colors } from "../../common-styles/colors";

export const Section = styled.section`
   width: 320px;
   margin-left: auto;
   margin-right: auto;
   padding-top: 136px;
   padding-bottom: 18px;
   @media screen and (min-width: 768px) {
      width: 708px;
      padding-top: 154px;
   }
   @media screen and (min-width: 1280px) {
      width: 1240px;
   }
`;

export const HeroWrapper = styled.div`
   @media screen and (min-width: 768px) {
      display: grid;
      grid-auto-flow: column;
      grid-template-areas:
         "A B"
         "A C";
      gap: 43px 65px;
   }
`;

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
   @media screen and (min-width: 768px) {
      grid-area: A;
      width: 290px;
      font-size: 48px;
   }
`;

export const Definition = styled.p`
   width: 320px;
   margin-bottom: 24px;

   text-align: justify;
   @media screen and (min-width: 768px) {
      grid-area: B;
      width: 342px;
   }
`;

export const Address = styled.address`
   margin-left: auto;
   margin-right: auto;
   text-align: center;
   font-style: normal;

   &::before {
      content: "";
      display: block;
      margin-bottom: 24px;
      width: 100%;

      border-bottom: 1px solid ${colors.accent};
   }
`;

export const Email = styled.a`
   display: block;
   width: 163px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 8px;

   text-decoration: none;
`;

export const Thumb = styled.div`
   width: 320px;
   margin: 36px auto 0;

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
